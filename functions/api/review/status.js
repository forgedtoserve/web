// Cloudflare Pages Function: read-only foundation for the review workflow.
// No publish, rollback, approval, or feedback mutation is exposed here.
const json = (data, status = 200) => new Response(JSON.stringify(data), {
  status,
  headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" }
});
const decode = (value) => {
  const s = value.replace(/-/g, "+").replace(/_/g, "/");
  return JSON.parse(atob(s.padEnd(Math.ceil(s.length / 4) * 4, "=")));
};
async function verifyAccessToken(token, teamDomain, audience) {
  const parts = token.split(".");
  if (parts.length !== 3) throw Error("Invalid token");
  const header = decode(parts[0]);
  const payload = decode(parts[1]);
  if (header.alg !== "RS256" || !header.kid) throw Error("Unsupported token");
  const issuer = "https://" + teamDomain + ".cloudflareaccess.com";
  if (payload.iss !== issuer || !(Array.isArray(payload.aud) ? payload.aud.includes(audience) : payload.aud === audience)) throw Error("Invalid issuer or audience");
  const now = Math.floor(Date.now() / 1000);
  if (!payload.exp || payload.exp <= now || (payload.nbf && payload.nbf > now)) throw Error("Expired token");
  const response = await fetch(issuer + "/cdn-cgi/access/certs");
  if (!response.ok) throw Error("Cannot fetch signing keys");
  const { keys } = await response.json();
  const key = keys.find(k => k.kid === header.kid && k.kty === "RSA");
  if (!key) throw Error("Unknown signing key");
  const cryptoKey = await crypto.subtle.importKey("jwk", key, { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["verify"]);
  const bytes = Uint8Array.from(atob(parts[2].replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(parts[2].length / 4) * 4, "=")), c => c.charCodeAt(0));
  const ok = await crypto.subtle.verify("RSASSA-PKCS1-v1_5", cryptoKey, bytes, new TextEncoder().encode(parts[0] + "." + parts[1]));
  if (!ok) throw Error("Invalid signature");
  return payload;
}
export async function onRequestGet({ request, env }) {
  // Missing configuration is an error, never an open endpoint.
  if (!env.ACCESS_TEAM_DOMAIN || !env.ACCESS_AUD || !env.REVIEWER_EMAILS) return json({ error: "Review service not configured" }, 503);
  const token = request.headers.get("Cf-Access-Jwt-Assertion");
  if (!token) return json({ error: "Sign-in required" }, 401);
  try {
    const claims = await verifyAccessToken(token, env.ACCESS_TEAM_DOMAIN, env.ACCESS_AUD);
    const allowed = env.REVIEWER_EMAILS.split(",").map(x => x.trim().toLowerCase()).filter(Boolean);
    if (!claims.email || !allowed.includes(claims.email.toLowerCase())) return json({ error: "Not authorized" }, 403);
    return json({
      authenticated: true,
      reviewer: claims.email,
      reviewStorage: "not configured",
      notifications: "not configured",
      approvalAndPublishing: "disabled",
      rollback: "disabled"
    });
  } catch {
    return json({ error: "Authentication failed" }, 401);
  }
}
