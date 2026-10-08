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
## v29 deployment checks

This release is a visual-only homepage redesign; no routes are added or removed. After Cloudflare Pages deploys v29, verify:

- `https://forgedtoserve.org/` loads the redesigned homepage hero and mission strip
- the homepage shows the three redesigned program cards and their links open the correct program pages
- the June 5, 2027 event spotlight opens `/veteranbenefit/` and its involvement link opens `/veteranbenefit/contact/`
- Donate, About, Partners, Facebook, and Contact calls to action remain functional
- the temporary Garth Brooks raffle popup still opens and dismisses normally while its campaign is active
- homepage styling loads from `assets/site.css?v=29`
- existing interior pages retain their established layout and navigation
- no new deployable files exist outside `/public`
- Cloudflare Pages build output remains `public`


## v30 deployment checks

This release corrects the homepage hero commitment-card overlap introduced in the v29 visual refresh. After Cloudflare Pages deploys v30, verify:

- `https://forgedtoserve.org/` loads the refreshed homepage
- the **Our Commitment** card sits fully below the shield logo and does not cover any portion of the logo
- the layout remains stacked and non-overlapping on desktop, tablet, and mobile widths
- the active raffle popup behavior is unchanged
- the homepage loads `assets/site.css?v=30`
- Cloudflare Pages build output remains `public`


## v31 deployment checks

This release corrects public leadership and event-partner information. After Cloudflare Pages deploys v31, verify:

- the Leadership page lists **Scott F. Lowry — Secretary / Program Director**
- Scott's biography says he serves as Secretary and Program Director
- the leadership card kicker reads **Veteran & Program Leadership**
- the homepage event spotlight refers to the **Warhound Veteran Motorcycle Association** poker run
- `/veteranbenefit/` names **Warhound Veteran Motorcycle Association** in the event overview, partner list, and poker-run card
- the Warhound partner link opens `https://www.facebook.com/WarhoundVMA` in a new tab
- no `War Dogs Motorcycle Club` references remain in deployable public content
- Cloudflare Pages build output remains `public`


## v32 deployment checks

This release adds direct links for the four organizing partners on the veteran-benefit page. After Cloudflare Pages deploys v32, verify:

- `https://forgedtoserve.org/veteranbenefit/` loads normally
- **Forged to Serve Foundation** opens `https://forgedtoserve.org/`
- **VFW Post 9126** opens `https://vfw9126.org/`
- **Warhound Veteran Motorcycle Association** opens `https://www.facebook.com/WarhoundVMA`
- **Broken Warrior Ranch** opens `https://www.brokenwarriorranch.net/`
- external partner links open in a new tab with secure `noopener noreferrer` attributes
- Cloudflare Pages build output remains `public`


## v33 deployment checks

This release establishes the official event name **United for Warriors Poker Run and Concert** without changing the established event routes. After Cloudflare Pages deploys v33, verify:

- the homepage event spotlight displays **United for Warriors Poker Run and Concert**
- `https://forgedtoserve.org/veteranbenefit/` uses **United for Warriors Poker Run and Concert** in the page heading and metadata
- `https://forgedtoserve.org/veteranbenefit/contact/` identifies the event by the new name
- Formspree submissions use subjects beginning with `United for Warriors Poker Run and Concert`
- `/veteranbenefit/` and `/veteranbenefit/contact/` remain the public routes
- no flat `public/veteranbenefit.html` exists
- Cloudflare Pages build output remains `public`

## v34 deployment checks

This release corrects the recurring homepage hero overlap and refreshes cache-busted shared assets site-wide. After Cloudflare Pages deploys v34, verify:

- `https://forgedtoserve.org/` shows the **Our Commitment** card fully below the Foundation logo with no overlap
- the same non-overlapping layout remains correct at desktop, tablet, and mobile widths
- the homepage requests `assets/site.css?v=34` and `assets/site.js?v=34`
- nested event routes request `/assets/site.css?v=34` and `/assets/site.js?v=34`
- interior pages render normally after the shared-asset cache-bust
- the active raffle popup still functions normally
- `/public` remains the Cloudflare Pages build output

No file deletion is required for this release.
