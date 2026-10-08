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

## v26 deployment checks

This release adds the veteran benefit as a directory route, not a flat HTML page. Confirm the repository contains:

- `public/veteranbenefit/index.html`
- **No** `public/veteranbenefit.html`

After the v26 commit reaches `main` and Cloudflare Pages finishes deploying, verify:

- `https://forgedtoserve.org/veteranbenefit` loads the event page
- the homepage Save the Date button opens `/veteranbenefit`
- event-page navigation, logo, CSS, JavaScript, and footer links load from the nested route
- `https://forgedtoserve.org/sitemap.xml` includes `https://forgedtoserve.org/veteranbenefit`
- Cloudflare Pages build output remains `public`

The Cloudflare project is connected to GitHub and automatic deployments only occur after the updated files are committed/pushed to the connected production branch.

