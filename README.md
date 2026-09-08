# Forged to Serve Foundation Website

Official website repository for **Forged to Serve Foundation**.

## Current Site Notes

- Current production version: **v14**
- Production site: **https://forgedtoserve.org**
- Static HTML/CSS/JavaScript site with deployable files under `/public`
- Hosted with **Cloudflare Pages**
- Source controlled through **GitHub**
- Cloudflare Pages build output directory: `public`
- **Termly** handles consent management, Privacy Policy, Cookie Policy, and consent preferences
- **Formspree** handles general website contact-form submissions
- **Zeffy** handles online donations
- Facebook content is embedded on the homepage
- Foundation email: `info@forgedtoserve.org`
- Public Facebook page: `https://facebook.com/forgedtoserve`

## Current Leadership

- **Richard Hacker** — Founder, President & Executive Director
- **Vanessa Hacker** — Vice President / Treasurer
- **Scott F. Lowry** — Board Member
- **Nicole Ingraham** — Secretary / Board Member

Board biographies and photos are being added as finalized for public use.

## Current Program Areas

- **Families of the Fallen**
- **Veteran Small Business Assistance**
- **Service Dogs for Veterans**

Public-facing program pages describe planned assistance while eligibility rules, award criteria, application procedures, and program limits continue to be formally developed.

## Important Design / Technical Rules

- Keep all deployable website files under `/public`.
- Do **not** move the site back to the repository root unless Cloudflare Pages deployment settings are changed at the same time.
- Preserve the approved Forged to Serve shield logo and established navy / gold / cream visual identity.
- Preserve the official tagline: **“Forged by Service. Driven to Serve.”**
- Preserve the public commitment wording: **“No Hero or Family Left Behind.”**
- Use **Libre Baskerville** for major headings and leadership names, **Source Sans 3** for body copy, and **Montserrat** for navigation, buttons, kickers, labels, and roles.
- Keep desktop navigation visually centered independently of the brand block.
- Preserve natural image aspect ratios and avoid stretched portraits/logos.
- Keep Leadership cards uniform in size and structure as additional bios/photos are added.
- Do not publish final program eligibility or award rules until they are formally approved.
- Keep family eligibility language consistent with the foundation’s approved public scope.
- Keep family support-dog wording neutral until the board formally settles the exact program model and terminology.
- Run a fresh Termly scan after adding new third-party embeds, scripts, analytics, or services.
- Validate internal links and local assets before packaging a release.
- Keep `README.md` and repository documentation at the repo root; public site files belong in `/public`.

## Deployment

Cloudflare Pages should use:

- Framework preset: **None**
- Build command: **leave blank**
- Build output directory: **public**
- Root directory: **repository root / blank**

Custom domains:

- `forgedtoserve.org`
- `www.forgedtoserve.org`

No DNS, Microsoft 365, Zeffy, Formspree, Termly, SSL, or custom-domain changes are required solely because the repository uses a `/public` deployment structure.

## Updating This Change Log

For each meaningful production change, add a new sequential version section using this format:

```text
## v15 — Short Change Name

Brief summary of the work.

Key changes:
- Change one
- Change two
- Change three
```

Use the next sequential version number for meaningful production changes.

Small typo fixes, internal documentation updates, and other changes that do not materially affect the public website do not need their own version.

When creating a new production package:

- Update this README.
- Validate all internal links and local assets.
- Preserve image aspect ratios.
- Confirm the `/public` folder contains every deployable asset.
- Confirm the Cloudflare Pages build output directory remains `public`.
- Produce both a full deployment ZIP and a changed-files-only ZIP when practical.

---

## v1 — Initial Foundation Site

Built the initial responsive static website for Forged to Serve Foundation.

Key pages included:

- Home
- About
- Programs
- Families of the Fallen
- Veteran Small Business Assistance
- Service Dogs for Veterans
- Contact
- Donate

Established the navy, gold, cream, and white visual identity and integrated the approved Forged to Serve Foundation branding.

## v2 — Domain, Donations + Contact

Completed public-site infrastructure and contact/fundraising integrations.

Key changes:

- Connected the site to `forgedtoserve.org`
- Added Zeffy donation integration
- Added the Formspree website inquiry form
- Added branded thank-you page after successful contact submission
- Added foundation contact email
- Added HTTP/HTTPS and `www` domain handling through Cloudflare

## v3 — Privacy + Consent Management

Added the site compliance framework.

Key changes:

- Added Privacy Policy
- Added Cookie Policy
- Added Terms of Use
- Integrated Termly consent banner
- Added Consent / Cookie Preferences footer control
- Preserved Termly attribution where required
- Confirmed current Termly scan detected only essential cookies

## v4 — Program Expansion + Sponsorships

Expanded program information using board planning materials.

Key changes:

- Expanded Families of the Fallen planned support
- Expanded Veteran Small Business Assistance
- Expanded Service Dogs for Veterans
- Added clearer program-development and eligibility notices
- Added Corporate & Community Partners page
- Added all approved sponsorship levels from Community Supporter through Legacy Partner
- Added sponsorship calls to action on Home and Donate

## v5 — Program Page Redesign

Reworked program pages to create a stronger visual hierarchy.

Key changes:

- Replaced long plain bullet sections with support-card grids
- Added stronger program hero sections
- Added program introduction blocks
- Added mission-area CTA panels
- Redesigned the main Programs page
- Redesigned the About page to match the program-page system
- Standardized program-page spacing and responsive behavior

## v6 — Leadership Page

Built and expanded the public Leadership page.

Current leadership structure:

- Richard Hacker — Founder, President & Executive Director
- Vanessa Hacker — Vice President / Treasurer
- Scott F. Lowry — Board Member
- Nicole Ingraham — Secretary / Board Member

Key changes:

- Added uniform board-member cards
- Added Richard Hacker biography and photo
- Added Scott F. Lowry biography and photo
- Added matching leadership-profile structure
- Added “Why I Serve” content where finalized
- Kept placeholder presentation for biographies/photos still awaiting final material

## v7 — Social + Site Icons

Added public social and browser-branding improvements.

Key changes:

- Added Facebook link throughout the site
- Added homepage Facebook feed section
- Added favicon set based on the Forged to Serve shield/logo
- Added 16×16 and 32×32 browser icons
- Added Apple touch icon
- Added Android 192×192 and 512×512 icons
- Added `site.webmanifest`

## v8 — Site-Wide Visual Consistency

Completed a broad style and formatting pass.

Key changes:

- Standardized headers and footers across all pages
- Standardized cards, spacing, buttons, page rhythm, and responsive layouts
- Added active-page navigation indication
- Standardized the public commitment wording to:
  - **No Hero or Family Left Behind.**
- Updated Vanessa’s public name to **Vanessa Hacker**
- Standardized Leadership card sizes

## v9 — Typography Refresh

Replaced the generic all-purpose font treatment with a defined typography system.

Current typography:

- **Libre Baskerville** — major headings and leadership names
- **Source Sans 3** — body copy
- **Montserrat** — navigation, buttons, kickers, labels, and roles

Also refined font weight, line height, letter spacing, and heading balance across the site.

## v10 — Header + Layout Refinement

Refined desktop navigation and homepage presentation.

Key changes:

- Kept Donate in the main navigation row
- Reduced the gap between the Forged to Serve brand block and the first navigation item
- Removed the redundant oversized wordmark from the homepage “Who We Are” section
- Improved desktop navigation spacing
- Preserved responsive mobile behavior

## v11 — Leadership Photography Pass

Refined Leadership photography while keeping all cards the same size.

Key changes:

- Reframed Richard Hacker’s photo to show more context
- Replaced Scott F. Lowry’s photo with the preferred source image
- Removed the earlier image containing the visible AI-content label
- Kept consistent photo areas and board-card dimensions

## v12 — Homepage Hero Alignment

Adjusted the homepage hero so the main content and branding align more naturally at the top on desktop.

Key changes:

- Reduced unnecessary top spacing
- Top-aligned the left hero copy with the right-side logo/commitment area
- Left mobile behavior unchanged

---


## v13 — Header Navigation Centering

Refined the desktop header so the navigation group is visually centered across the page rather than being pushed off-center by the width of the foundation brand block.

Key changes:

- Centered the desktop navigation independently of the logo/name block
- Kept the Forged to Serve brand anchored to the left
- Preserved existing navigation-item spacing and Donate button styling
- Left tablet and mobile navigation behavior unchanged


## v14 — Stable Header + Cache Refresh

Made the desktop header positioning deterministic and reduced refresh-time movement.

Key changes:

- Pinned the wide-desktop navigation group to the true horizontal center of the viewport
- Kept the foundation brand anchored independently on the left
- Replaced the CSS Google Fonts `@import` with document-level font loading and preconnects
- Changed font loading to `display=optional` to reduce font-swap layout shift
- Added `?v=14` cache-busting to the shared CSS and JavaScript references so browsers and Cloudflare fetch the newest assets
- Preserved the existing tablet and mobile header behavior
