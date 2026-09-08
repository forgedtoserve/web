# Cloudflare Pages Deployment

This repository is organized so the deployable website lives in `/public`.

## Cloudflare Pages settings

- Framework preset: **None**
- Build command: **leave blank**
- Build output directory: **public**
- Root directory: **repository root**

After changing the Build output directory to `public`, push/upload this repository to GitHub.
Cloudflare Pages should redeploy automatically from the connected branch.

No DNS, Microsoft 365, Zeffy, Formspree, Termly, SSL, or custom-domain changes are required solely because of this repository reorganization.
