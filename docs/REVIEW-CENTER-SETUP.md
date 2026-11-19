# Website Review Center — request saving setup

The Preview branch now contains an authenticated Pages Function at `POST /api/review/requests`.

## What it does

- Requires a Cloudflare Access JWT assertion.
- Verifies the JWT signature, issuer, audience, and expiration.
- Checks the verified email against `REVIEWER_EMAILS`.
- Accepts a revision identifier and a reviewer note (maximum 3,000 characters).
- Creates a GitHub Issue in `forgedtoserve/web` with the verified reviewer email and server timestamp.
- Never accepts a reviewer name or email supplied by the browser as identity.

## Required server-side setting

Create a Cloudflare Pages **Preview** secret named `GITHUB_TOKEN`. It must be a fine-grained GitHub token restricted to `forgedtoserve/web` with **Issues: Read and write** permission. Do not put this token in page JavaScript, a public variable, a screenshot, or chat. Do not add it to Production.

Until that secret is configured, the endpoint deliberately returns HTTP 503 and saves nothing. The Review Center form remains disabled; do not treat the visual form as an operational workflow.

## Remaining work before enabling the form

1. Configure the Preview-only `GITHUB_TOKEN` secret.
2. Deploy Preview and test with each allowlisted identity.
3. Add a read endpoint and render saved requests under the matching revision.
4. Add notification delivery only after its sender and recipient behavior are agreed.
5. Keep approval, publishing, and rollback disabled until separate authorization, audit, and release safeguards are implemented.

GitHub Issues are the persistence layer for requests; the public Review Center is the display. No D1 database is used. No Production setting is changed by this setup.
