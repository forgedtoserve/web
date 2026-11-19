// Preview-only approval records: no deploy, merge, publish, or rollback action.
// Cloudflare Access JWT and server-side allowlist are required on every request.
const json=(data,status=200)=>new Response(JSON.stringify(data),{status,
headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store"}});
const decode = value => {
  const s = value.replace(/-/g, "+").replace(/_/g, "/");
  return JSON.parse(atob(s.padEnd(Math.ceil(s.length / 4) * 4, "=")));
};
async function verifyAccessToken(token, teamDomain, audience) {
  const parts = token.split(".");
  if (parts.length !== 3) throw Error("Invalid token");
  const header = decode(parts[0]), claims = decode(parts[1]);
  if (header.alg !== "RS256" || !header.kid) throw Error("Unsupported token");
  const issuer = "https://" + teamDomain + ".cloudflareaccess.com";
  const audOk = Array.isArray(claims.aud) ? claims.aud.includes(audience) : claims.aud === audience;
  if (claims.iss !== issuer || !audOk) throw Error("Invalid issuer or audience");
  const now = Math.floor(Date.now() / 1000);
  if (!claims.exp || claims.exp <= now || (claims.nbf && claims.nbf > now)) throw Error("Expired token");
  const response = await fetch(issuer + "/cdn-cgi/access/certs");
  if (!response.ok) throw Error("Cannot fetch signing keys");
  const { keys } = await response.json();
  const key = keys.find(k => k.kid === header.kid && k.kty === "RSA");
  if (!key) throw Error("Unknown signing key");
  const cryptoKey = await crypto.subtle.importKey("jwk", key, { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["verify"]);
  const sig = parts[2].replace(/-/g, "+").replace(/_/g, "/");
  const bytes = Uint8Array.from(atob(sig.padEnd(Math.ceil(sig.length / 4) * 4, "=")), c => c.charCodeAt(0));
  if (!await crypto.subtle.verify("RSASSA-PKCS1-v1_5", cryptoKey, bytes, new TextEncoder().encode(parts[0] + "." + parts[1]))) throw Error("Invalid signature");
  return claims;
}

const API="https://api.github.com/repos/forgedtoserve/Forged-To-Serve-Reviews/issues";
const CURRENT_REVISION="approval-tracking-2026-11-18";
const validRevision=s=>s===CURRENT_REVISION;
const ghHeaders=env=>({"Authorization":"Bearer "+env.GITHUB_TOKEN,
 "Accept":"application/vnd.github+json","User-Agent":"ForgedToServe-ReviewCenter/1.0",
 "X-GitHub-Api-Version":"2022-11-28"});
async function reviewer(request,env){
 if(!env.ACCESS_TEAM_DOMAIN||!env.ACCESS_AUD||!env.REVIEWER_EMAILS||!env.GITHUB_TOKEN)
  return {error:json({error:"Approval tracking is not configured"},503)};
 const jwt=request.headers.get("Cf-Access-Jwt-Assertion");
 if(!jwt)return {error:json({error:"Sign in to the Review Center first"},401)};
 let claims;
 try{claims=await verifyAccessToken(jwt,env.ACCESS_TEAM_DOMAIN,env.ACCESS_AUD);}
 catch{return {error:json({error:"Sign-in could not be verified"},401)};}
 const email=String(claims.email||"").toLowerCase();
 if(!email||!env.REVIEWER_EMAILS.split(",").map(v=>v.trim().toLowerCase()).includes(email))
  return {error:json({error:"This reviewer is not authorized"},403)};
 return {email};
}
async function records(env){
 const issues=[];
 for(let page=1;page<=10;page++){
   const res=await fetch(API+"?state=all&per_page=100&page="+page+"&fresh="+Date.now(),
     {headers:{...ghHeaders(env),"Cache-Control":"no-cache"},cache:"no-store"});
   if(!res.ok)throw Error("GitHub records could not be read ("+res.status+")");
   const batch=await res.json();
   if(!Array.isArray(batch))throw Error("GitHub returned invalid approval data");
   issues.push(...batch.filter(x=>!x.pull_request));
   if(batch.length<100)return issues;
 }
 throw Error("Review history exceeds the safe listing limit");
}
function status(list,revision){
 const requests=list.filter(x=>x.title==="Website review request — "+revision);
 const approvals=list.filter(x=>x.title==="Website review approval — "+revision&&x.state==="open");
 const newestRequest=Math.max(0,...requests.map(x=>Date.parse(x.created_at)||0));
 const pending=requests.filter(x=>x.state==="open").length;
 const valid=approvals.filter(x=>(Date.parse(x.created_at)||0)>newestRequest)
       .sort((a,b)=>Date.parse(a.created_at)-Date.parse(b.created_at));
 const approval=!pending?valid[0]:null;
 const found=approval&&String(approval.body||"").match(/^- \*\*Approved by:\*\* (.+)$/m);
 return {revision,approved:!!approval,approvedBy:approval?(found?found[1]:"Authorized reviewer"):null,
 approvedAt:approval?approval.created_at:null,approvalNumber:approval?approval.number:null,
 openRequests:pending,previousApprovalStale:!!approvals.length&&!valid.length,
 noPublishing:true};
}
export async function onRequestGet({request,env}){
 const who=await reviewer(request,env);if(who.error)return who.error;
 const revision=new URL(request.url).searchParams.get("revision")||"";
 if(!validRevision(revision))return json({error:"Invalid revision"},400);
 try{return json(status(await records(env),revision));}
 catch(e){return json({error:e.message||"Approval records unavailable"},503);}
}
export async function onRequestPost({request,env}){
 const origin=request.headers.get("Origin");
 if(origin&&!new Set([new URL(request.url).origin,"https://preview.forgedtoserve.org"]).has(origin))
  return json({error:"Origin not allowed"},403);
 const who=await reviewer(request,env);if(who.error)return who.error;
 let body;
 try{body=await request.json();}catch{return json({error:"Invalid request body"},400);}
 const revision=String(body.revision||"");
 if(!validRevision(revision)||body.confirmed!==true)
  return json({error:"Explicit confirmation of a valid review revision is required"},400);
 let current;
 try{current=status(await records(env),revision);}
 catch(e){return json({error:e.message||"Approval records unavailable"},503);}
 if(current.openRequests)return json({error:"Resolve open change requests before approving",...current},409);
 if(current.approved)return json({...current,alreadyApproved:true});
 const issueBody=["## Review approval — Preview only","",
  "- **Revision:** "+revision,"- **Approved by:** "+who.email,
  "- **Type:** Review sign-off (does not authorize publication)",
  "- **Publication:** Not published","",
  "No website was published. A later change request invalidates this approval."].join("\n");
 const result=await fetch(API,{method:"POST",headers:{...ghHeaders(env),"Content-Type":"application/json"},
  body:JSON.stringify({title:"Website review approval — "+revision,body:issueBody})});
 if(!result.ok)return json({error:"GitHub could not save approval. No approval or publishing was recorded."},502);
 const issue=await result.json();
 return json({revision,approved:true,approvedBy:who.email,approvedAt:issue.created_at,
 approvalNumber:issue.number,openRequests:0,noPublishing:true},201);
}
