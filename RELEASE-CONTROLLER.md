# Forged to Serve — owner-only release controller

Status: design and integration contract only. **Not operational.** Preview branch only.

## Existing deployment
The website is static in `public/`, with Cloudflare Pages publishing from GitHub. The production branch is `main`; review work is on `preview`. Never deploy the entire preview branch without showing its full diff against production and obtaining explicit confirmation.

## Authorization
- Cloudflare Access protects the review center. A browser being able to load the page is not sufficient proof of authorization for a publishing request.
- A dedicated server-side controller must verify Cloudflare Access JWT signatures, audience, issuer, expiry, and exact allowlisted owner identity on **every** request, including status and mutation endpoints.
- Do not store GitHub or Cloudflare API tokens in static HTML, browser JavaScript, URLs, or Git history.
- Require POST, CSRF protection, a short-lived one-time confirmation token bound to action, release SHA, and owner, plus rate limits. Reject replay and stale releases.

## Release process
1. Server returns production SHA, preview SHA, a complete file-level diff, current release ID, and confirmed pending-change statuses.
2. User sees site-wide review and confirmation. An approved list is not inferred from all preview commits.
3. Server rechecks identity, one-time confirmation token, and unchanged production/preview SHAs.
4. Server records a durable release transaction and preserves the prior live SHA.
5. Only approved changes are promoted to the production deployment source; reject if unrelated changes would be included.
6. Wait for Cloudflare Pages deployment success and verify production URL, key routes, and deployed revision before recording Published to Live.
7. On failure, mark Failed with details and do not claim publication succeeded.

## Rollback
1. Offer only a previously verified live release, displaying the release ID and complete affected site-wide diff.
2. Require owner identity and independent confirmation token.
3. Re-deploy the selected previous live artifact/revision using a non-destructive, auditable mechanism.
4. Verify production deployment and key routes; retain newer releases in history.

## Audit records
Persist records outside the static website: event ID, site, actor, action, source and target SHAs, deployment ID, change summary, status, error, and event timestamps in UTC. Display in America/Chicago with seconds and CST/CDT as appropriate. Distinguish Git commit, deployment start, and verified live publication. Never invent historical timestamps.

## Integration requirements before enabling buttons
- Cloudflare account/project details and the existing production deployment method confirmed.
- Owner-only Cloudflare Access application and identity allowlist verified.
- Least-privilege server-side GitHub and Cloudflare credentials configured as secrets.
- Durable audit/release storage configured.
- Dry-run preview tests for identity rejection, stale confirmation, concurrent changes, deployment failure, and rollback.
- Explicit production authorization at the actual confirmation step.

The preview dashboard buttons must remain disabled until these conditions are met and end-to-end tests pass.
