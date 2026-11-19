# Review workflow implementation notes

Agreed: Scott, Vanessa, and Richard have equal review permissions. Any one may request changes or approve the exact current revision. Approval after confirmation triggers publishing. New revisions invalidate prior approvals. All three share feedback, screenshot attachments, audit history, notifications, and verified rollback rights.

Implemented on preview: /api/review/status is a read-only Cloudflare Pages Function. It validates Cloudflare Access JWT signature, issuer, audience, expiry, and an explicit email allowlist. It fails closed if configuration is missing. No publishing action is enabled.

Cloudflare preview environment variables required:
- ACCESS_TEAM_DOMAIN: Access team subdomain
- ACCESS_AUD: Access application audience tag
- REVIEWER_EMAILS: comma-separated approved email addresses for all three reviewers

These values have not been configured. Reviewer addresses must be confirmed, not guessed.

Next: ensure Access protects /api/review/*; verify authorized, unauthorized and unauthenticated responses; provision D1 for review records and R2 for private screenshots; configure email provider credentials as secrets; create backend approval and request-changes routes; configure least-privilege deployment credentials and immutable release records; test exact-revision concurrency, automatic publication, and rollback before enabling production controls.

Never place deployment secrets in browser JavaScript. Never trust a browser-only approval or role check. Production main remains protected until the workflow passes end-to-end testing.
