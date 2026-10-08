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
## v27 deployment checks

This release adds Formspree-backed sponsorship and vendor forms to the existing `/veteranbenefit` page. After Cloudflare Pages finishes deploying, verify:

- `https://forgedtoserve.org/veteranbenefit` loads normally
- **Sponsorship Inquiry** scrolls to the sponsorship form
- **Apply for a Booth** scrolls to the vendor form
- submit one real sponsorship test and confirm it arrives through the existing Formspree workflow with subject `June 5, 2027 Veteran Benefit - Sponsorship Inquiry`
- submit one real vendor test and confirm it arrives with subject `June 5, 2027 Veteran Benefit - Vendor Booth Application`
- successful submissions redirect to `/thank-you`
- failed submissions remain on-page and display an accessible error message
- the event page loads `/assets/site.css?v=27`
- `public/veteranbenefit/index.html` remains the only veteran-benefit page structure; no flat `public/veteranbenefit.html` exists
- Cloudflare Pages build output remains `public`
## v28 deployment checks

This release moves event forms to the dedicated `/veteranbenefit/contact/` route. After Cloudflare Pages deploys v28, verify:

- `https://forgedtoserve.org/veteranbenefit/` loads without large inline forms
- **Sponsorship Inquiry** opens `/veteranbenefit/contact/#sponsorship`
- **Apply for a Booth** opens `/veteranbenefit/contact/#vendor`
- **Event Contact & Applications** opens `/veteranbenefit/contact/#general`
- `https://forgedtoserve.org/veteranbenefit/contact/` loads with all three event inquiry workflows
- one sponsorship test, one vendor test, and one general-question test arrive through Formspree with their distinct subjects
- successful submissions redirect to `/thank-you`
- the event and event-contact pages load `/assets/site.css?v=28`
- `sitemap.xml` includes `https://forgedtoserve.org/veteranbenefit/contact`
- no flat `public/veteranbenefit.html` exists
- Cloudflare Pages build output remains `public`

