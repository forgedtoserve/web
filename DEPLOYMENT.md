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


## v18 post-deployment checks

After Cloudflare finishes deploying v18, verify:

- `https://forgedtoserve.org/`
- `https://forgedtoserve.org/assets/forged-to-serve-logo.jpg`
- `https://forgedtoserve.org/sitemap.xml`
- `https://forgedtoserve.org/robots.txt`
- a deliberately invalid URL returns the branded 404 page
- Contact form submits through Formspree and reaches `thank-you`
- Zeffy donation embed loads
- Facebook feed behavior matches Termly consent choices
- Cookie Preferences opens the Termly preference center

Then run a fresh Termly cookie scan.
