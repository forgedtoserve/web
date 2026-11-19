// Authenticated review-request intake for the Preview review center.
// Requires a server-side GITHUB_TOKEN secret with Issues: write permission
// on forgedtoserve/Forged-To-Serve-Reviews. Never expose this token to browser JavaScript.
const json = (data, status = 200) => new Response(JSON.stringify(data), {
  status, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" }
});
const CURRENT_REVISION="approval-tracking-2026-11-18";
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
export async function onRequestPost({ request, env }) {
  // The approved Preview custom domain may be proxied to a different Pages origin.
  // Accept only the request's own origin or the exact approved Preview host.
  const origin = request.headers.get("Origin");
  const allowedOrigins = new Set([new URL(request.url).origin, "https://preview.forgedtoserve.org"]);
  if (origin && !allowedOrigins.has(origin)) return json({ error: "Origin not allowed" }, 403);
  if (!env.ACCESS_TEAM_DOMAIN || !env.ACCESS_AUD || !env.REVIEWER_EMAILS) return json({ error: "Review authentication is not configured" }, 503);
  if (!env.GITHUB_TOKEN) return json({ error: "Secure review saving is not configured yet. No request was saved." }, 503);
  const token = request.headers.get("Cf-Access-Jwt-Assertion");
  if (!token) return json({ error: "Sign in through the review center first" }, 401);
  let claims;
  try { claims = await verifyAccessToken(token, env.ACCESS_TEAM_DOMAIN, env.ACCESS_AUD); }
  catch { return json({ error: "Sign-in could not be verified" }, 401); }
  const allowed = env.REVIEWER_EMAILS.split(",").map(x => x.trim().toLowerCase()).filter(Boolean);
  const email = String(claims.email || "").toLowerCase();
  if (!email || !allowed.includes(email)) return json({ error: "This email is not on the reviewer list" }, 403);
  let body;
  try { body = await request.json(); } catch { return json({ error: "Invalid request body" }, 400); }
  const revision = String(body.revision || "").trim().slice(0, 80);
  const note = String(body.note || "").trim();
  if (revision !== CURRENT_REVISION) return json({error:"Revision changed; refresh the Review Center"},409);
  if (!note || note.length > 3000) return json({ error: "A revision and a note of 1–3000 characters are required" }, 400);
  const createdAt = new Date().toISOString();
  const issueBody = [
    "## Website revision change request",
    "",
    "- **Revision:** " + revision.replace(/[\r\n]/g, " "),
    "- **Requested by:** " + email,
    "- **Submitted:** " + createdAt,
    "- **Status:** Revisions requested",
    "",
    "## Request",
    "",
    note,
    "",
    "---",
    "Submitted through the authenticated Forged to Serve Website Review Center."
  ].join("\n");
  const response = await fetch("https://api.github.com/repos/forgedtoserve/Forged-To-Serve-Reviews/issues", {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + env.GITHUB_TOKEN,
      "Accept": "application/vnd.github+json",
      "User-Agent": "ForgedToServe-ReviewCenter/1.0",
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title: "Website review request — " + revision, body: issueBody })
  });
  if (!response.ok) return json({ error: "GitHub could not save this request. No success was recorded." }, 502);
  const issue = await response.json();
  return json({ saved: true, requestNumber: issue.number, url: issue.html_url, requestedBy: email, submittedAt: createdAt }, 201);
}


// List private review requests for authorized reviewers only.
// The public Preview HTML never contains the GitHub credential or saved notes.
export async function onRequestGet({ request, env }) {
  if (!env.ACCESS_TEAM_DOMAIN || !env.ACCESS_AUD || !env.REVIEWER_EMAILS || !env.GITHUB_TOKEN) {
    return json({ error: "Review saving is not configured" }, 503);
  }
  const token = request.headers.get("Cf-Access-Jwt-Assertion");
  if (!token) return json({ error: "Sign in through the review center first" }, 401);
  let claims;
  try { claims = await verifyAccessToken(token, env.ACCESS_TEAM_DOMAIN, env.ACCESS_AUD); }
  catch { return json({ error: "Sign-in could not be verified" }, 401); }
  const allowed = env.REVIEWER_EMAILS.split(",").map(x => x.trim().toLowerCase()).filter(Boolean);
  const email = String(claims.email || "").toLowerCase();
  if (!email || !allowed.includes(email)) return json({ error: "Reviewer not authorized" }, 403);

  const revision = new URL(request.url).searchParams.get("revision") || "";
  if (revision !== CURRENT_REVISION) return json({ error: "Invalid revision" }, 400);
  const ghHeaders={
    "Authorization":"Bearer "+env.GITHUB_TOKEN,
    "Accept":"application/vnd.github+json",
    "User-Agent":"ForgedToServe-ReviewCenter/1.0",
    "X-GitHub-Api-Version":"2022-11-28",
    "Cache-Control":"no-cache"
  };
  const issues=[];
  for(let page=1;page<=10;page++){
    const response=await fetch("https://api.github.com/repos/forgedtoserve/Forged-To-Serve-Reviews/issues?state=open&per_page=100&page="+page,
      {headers:ghHeaders,cache:"no-store"});
    if(!response.ok)return json({error:"Could not read private review requests",githubStatus:response.status},502);
    const batch=await response.json();
    if(!Array.isArray(batch))return json({error:"GitHub returned invalid request data"},502);
    issues.push(...batch);
    if(batch.length<100)break;
    if(page===10)return json({error:"Review records exceed the safe listing limit"},503);
  }
  const prefix = "Website review request — " + revision;
  const requests = (Array.isArray(issues) ? issues : [])
    .filter(issue => !issue.pull_request && issue.state === "open" && issue.title === prefix)
    .map(issue => {
      const body = String(issue.body || "");
      const author = body.match(/^\- \*\*Requested by:\*\* (.+)$/m);
      const note = body.match(/^## Request\s*\n\s*\n([\s\S]*?)(?:\n\n---\n|$)/m);
      return {
        number: issue.number,
        requestedBy: author ? author[1].trim() : "Authorized reviewer",
        submittedAt: issue.created_at,
        note: note ? note[1].trim() : ""
      };
    });
  return json({ revision, requests });
}
