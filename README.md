# Forged to Serve Foundation Website

Official website repository for **Forged to Serve Foundation**.

## Current Site Notes

- Current site package version: **v35**
- Production updates only after the package is committed to `main` and Cloudflare Pages completes deployment
- Production site: **https://forgedtoserve.org**
- Static HTML/CSS/JavaScript site with deployable files under `/public`
- Hosted with **Cloudflare Pages**
- Source controlled through **GitHub**
- Cloudflare Pages build output directory: `public`
- **Termly** handles consent management, Privacy Policy, Cookie Policy, and consent preferences
- **Formspree** handles general website contact-form submissions
- **Zeffy** handles online donations
- Facebook content is embedded on the homepage
- Homepage includes a temporary Garth Brooks raffle popup through October 21, 2026
- Foundation email: `info@forgedtoserve.org`
- Public Facebook page: `https://facebook.com/forgedtoserve`

## Current Leadership

- **Richard Hacker** — Founder, President & Executive Director
- **Vanessa Hacker** — Vice President / Treasurer
- **Scott F. Lowry** — Secretary / Program Director

Board biographies and photos are being added as finalized for public use.

## Current Program Areas

- **Families of the Fallen**
- **Veteran Small Business Assistance**
- **Service Dogs for Veterans**

Public-facing program pages describe planned assistance while eligibility rules, award criteria, application procedures, and program limits continue to be formally developed.

## Important Design / Technical Rules

- Keep all deployable website files under `/public`.
- Preserve the approved Forged to Serve shield logo and the navy / gold / cream visual identity.
- Preserve the official tagline: **“Forged by Service. Driven to Serve.”**
- Preserve the public commitment wording: **“No Hero or Family Left Behind.”**
- Use stable local font stacks: **Georgia/Cambria** for display headings and **Segoe UI/Arial** for body and interface text.
- Keep the desktop navigation centered independently of the brand block.
- Preserve natural image aspect ratios and include intrinsic image dimensions.
- Keep Leadership cards uniform in size and structure as additional bios/photos are added.
- Do not publish final program eligibility or award rules until formally approved.
- Keep family eligibility language consistent with the approved public scope.
- Keep family support-dog wording neutral until the board formally settles the program model and terminology.
- Run a fresh Termly scan after adding third-party embeds, scripts, analytics, or services.
- Validate internal links, local assets, sitemap, metadata, and responsive layout before packaging a release.
- Because `/assets/*` is served with long-lived immutable caching, bump the shared `site.css` and `site.js` cache-busting query on **every HTML page** whenever either shared asset changes.
- Keep `README.md`, `AUDIT.md`, `FINAL-AUDIT.md`, and deployment documentation at the repository root.

## Deployment

Cloudflare Pages should use:

- Framework preset: **None**
- Build command: **leave blank**
- Build output directory: **public**
- Root directory: **repository root / blank**

Custom domains:

- `forgedtoserve.org`
- `www.forgedtoserve.org`

## Audit Status

A full production audit was completed for **v18**. See:

- [`AUDIT.md`](AUDIT.md) — findings identified during the audit
- [`FINAL-AUDIT.md`](FINAL-AUDIT.md) — post-fix validation and remaining manual items

## Updating This Change Log

For each meaningful production change, add a new sequential version section:

```text


## v35 — United for Warriors Visual Branding

Added organizer and performer artwork to the **United for Warriors Poker Run and Concert** page so the event has a stronger visual identity and direct links to participating organizations and acts.

Key changes:

- Added logo cards for Forged to Serve Foundation, VFW Post 9126, Warhound Veteran Motorcycle Association, and Broken Warrior Ranch
- Added visual concert cards for Broke Teachers and the Guitars for Vets band
- Linked Broke Teachers to their Facebook page and Guitars for Vets Glenpool to its Facebook page
- Added six event-specific image assets using the supplied artwork with preserved aspect ratios and intrinsic dimensions
- Kept the headliner position as **TBA** with a branded placeholder
- Updated shared CSS/JavaScript cache-busting references site-wide to `v35` because the shared stylesheet changed
- No routes were added or removed, and no file deletion is required

## v34 — Homepage Hero Cache-Bust & Overlap Hardening

Corrected the recurring homepage logo/commitment-card overlap and hardened shared-asset cache handling.

Key changes:

- Forces the **Our Commitment** card to remain in normal flow beneath the logo, with explicit non-overlap safeguards
- Updates every HTML page to request `site.css?v=34` and `site.js?v=34`, ensuring browsers do not reuse stale immutable shared assets
- Documents the cache-busting requirement for future shared CSS/JavaScript changes
- Preserves all v33 content, including **United for Warriors Poker Run and Concert** naming and partner links

## v21 — Vanessa Hacker Biography Restored

Restored Vanessa Hacker’s full approved leadership biography alongside her photo.

Key changes:

- Replaced the placeholder Vanessa biography with her full approved profile
- Added her business, real estate, property management, accounting, and community-relationship background
- Added her statement on continued responsibility to veterans under **Why I Serve**
- Preserved the existing Vanessa Hacker photo and Vice President / Treasurer title
- Updated Leadership page asset references to v21

## v20 — Vanessa Hacker Leadership Photo

Updated the public Leadership page with Vanessa Hacker’s approved photo.

Key changes:

- Replaced Vanessa Hacker’s initials placeholder with her photograph
- Preserved the existing uniform leadership-card dimensions and image treatment
- Added descriptive alt text for accessibility
- Added `vanessa-hacker.jpg` to the public assets folder
- Updated the Leadership page asset references to v20

## v19 — Short Change Name

Brief summary of the work.

Key changes:
- Change one
- Change two
- Change three
```

Small typo fixes and internal documentation-only changes do not need their own version.

When creating a production package:

- Update this README.
- Update audit documentation when appropriate.
- Validate all internal links and local assets.
- Preserve image aspect ratios and intrinsic dimensions.
- Confirm `/public` contains every deployable asset.
- Confirm Cloudflare Pages build output remains `public`.
- Produce both a full deployment ZIP and a changed-files-only ZIP when practical.

---




## v33 — United for Warriors Event Naming

Established the official public event name as **United for Warriors Poker Run and Concert**. Updated the homepage event spotlight, event-page title and social metadata, event-contact page, Formspree subjects/event identifiers, and event footer/navigation labels while preserving the existing `/veteranbenefit/` and `/veteranbenefit/contact/` routes.

## v32 — Event Partner Links

Added direct public links for each organizing partner on the June 5 veteran-benefit page.

Key changes:

- Linked Forged to Serve Foundation to `https://forgedtoserve.org/`
- Linked VFW Post 9126 to `https://vfw9126.org/`
- Preserved the Warhound Veteran Motorcycle Association Facebook link
- Linked Broken Warrior Ranch to `https://www.brokenwarriorranch.net/`
- Applied secure new-tab handling to external partner links

## v31 — Leadership & Event Partner Corrections

Corrected current public leadership and veteran-benefit partner information.

Key changes:

- Updated Scott F. Lowry's current role to **Secretary / Program Director**
- Updated Scott's leadership biography and image alternative text to match the current role
- Updated the leadership kicker to **Veteran & Program Leadership**
- Corrected the motorcycle organization name to **Warhound Veteran Motorcycle Association**
- Added the official Warhound VMA Facebook link on the veteran-benefit partner list
- Updated homepage and veteran-benefit poker-run references to the correct organization name

## v30 — Homepage Hero Commitment Card Fix

Corrected the homepage hero layout so the **Our Commitment** card no longer overlaps or covers the Forged to Serve logo at desktop or mobile widths.

Key changes:

- Moved the commitment card into normal document flow beneath the logo frame instead of absolutely positioning it over the artwork
- Matched the card width to the logo frame for a cleaner, intentional stacked presentation
- Removed mobile overlap offsets and unnecessary bottom padding
- Cache-busted the homepage stylesheet reference to v30
- No routes, forms, popup behavior, or content were changed
- Cloudflare Pages build output remains `public`

## v29 — Homepage Visual Refresh

Reworked the public homepage into a more distinctive Forged to Serve presentation while preserving the established navy / gold / cream brand system and approved mission language.

Key changes:

- Rebuilt the homepage hero with a layered navy treatment, stronger typography, dimensional logo presentation, and branded mission tags
- Added a three-part mission strip for Veterans, Families, and Opportunity
- Replaced the generic service cards with a more editorial three-program layout and numbered visual hierarchy
- Added a stronger Why We Serve / pledge section using the existing public mission language
- Redesigned the June 5, 2027 veteran-benefit spotlight with a dedicated date card and clearer event calls to action
- Reworked the community-partner and closing calls to action for stronger visual contrast
- Refined the Facebook section to fit the updated homepage visual system
- Scoped the new CSS to homepage-specific classes so interior-page layouts remain stable
- Cache-busted the homepage stylesheet reference to v29
- Cloudflare Pages build output remains `public`

## v28 — Veteran Benefit Contact & Applications Page

Moved event inquiry forms off the main veteran benefit page and into a dedicated contact/application route.

Key changes:

- Added `public/veteranbenefit/contact/index.html` at `/veteranbenefit/contact/`
- Moved the Sponsorship Inquiry and Vendor / Booth Application forms to the dedicated event contact page
- Added a third Formspree-backed General Event Question form
- Replaced large inline forms on the main event page with compact calls to action linking directly to the appropriate contact-page section
- Added contact-page choice cards for Sponsorship, Vendors & Booths, and General Questions
- Added the event contact page to `sitemap.xml`
- Preserved distinct Formspree subjects and inquiry metadata for each workflow
- Updated event/contact styling and cache-busted the event stylesheet reference to v28
- Cloudflare Pages build output remains `public`

## v27 — Veteran Benefit Formspree Inquiries

Added on-page Formspree workflows for event sponsorship and vendor participation.

Key changes:

- Replaced the sponsorship `mailto:` action with an on-page **Sponsorship Inquiry** form
- Added a **Vendor / Booth Application** form beneath the vendor section
- Both forms submit through the existing Forged to Serve Formspree endpoint
- Added event and inquiry-type metadata plus distinct email subjects so submissions can be identified easily
- Added accessible inline submission status handling and redirect to the existing Thank You page after successful submission
- Added privacy/sensitive-information guidance to both event forms
- Preserved the clean event route at `public/veteranbenefit/index.html` / `/veteranbenefit`
- Updated event-page form styling and cache-busted the event stylesheet reference to v27
- Cloudflare Pages build output remains `public`

## v26 — June 5 Veteran Benefit Event Page

Added the initial public event page for the June 5, 2027 veteran benefit at BlackGold Park in Glenpool.

Key changes:

- Added the event at the agreed clean-route structure: `public/veteranbenefit/index.html`
- Public URL/canonical: `https://forgedtoserve.org/veteranbenefit`
- Added the working event schedule, organizing partners, poker run, Veterans Row, Kids Zone, food/community vendors, raffle/auction, adult beverage area, and concert lineup
- Added Broke Teachers and the Guitars for Vets band, with the headliner marked to be announced
- Added preliminary sponsorship and vendor/booth information without locking in unapproved commercial pricing
- Added a homepage Save the Date spotlight linking to `/veteranbenefit`
- Added the clean event URL to `sitemap.xml`
- Updated shared event-page styling and homepage stylesheet cache reference to v26
- Preserved Cloudflare Pages build output as `public`

## v25 — Desktop Popup Reliability Fix

Made the raffle popup self-contained so it cannot fall into normal page flow if a cached or partially deployed stylesheet is served.

Key changes:

- Moved all raffle-modal positioning and layout CSS directly into `index.html`
- Uses a very high fixed overlay z-index and scoped `#garth-raffle-modal` rules
- Preserves the full square raffle artwork with no cropping
- Keeps the desktop two-column layout and mobile stacked layout
- Removed duplicate raffle-modal CSS from the shared stylesheet to prevent conflicts
- Added `!important` only to the temporary popup rules to isolate them from existing site styles
- Updated homepage stylesheet cache reference to v25

## v24 — Full Raffle Banner Display

Adjusted the Garth Brooks raffle popup so the supplied square banner is always shown in full.

Key changes:

- Removed the desktop `object-fit: cover` behavior that was cropping the raffle artwork
- Changed the banner to `object-fit: contain`
- Preserved the banner's square aspect ratio
- Centered the full artwork inside the dark visual panel
- Applied the same no-crop behavior on mobile
- Updated the homepage stylesheet cache version to v24

## v23 — Raffle Banner, Exact Logos & QR Code

Enhanced the temporary Garth Brooks raffle popup with the supplied campaign media.

Key changes:

- Added the supplied Garth Brooks raffle banner image
- Added the supplied QR code linking directly to the Zeffy raffle
- Added the exact supplied Forged to Serve Foundation and The Dallas Lowry Foundation logos
- Corrected the popup button to the same Zeffy URL encoded in the supplied QR code
- Reworked the popup into a two-column desktop layout with a stacked mobile layout
- Preserved the October 21, 2026 automatic popup expiration
- Updated popup dismissal storage to v23 so the refreshed campaign creative can display
- Optimized the large raffle banner as WebP for faster page loading

## v22 — Garth Brooks Raffle Popup

Added a temporary homepage popup promoting the Garth Brooks fundraising raffle.

Key changes:

- Added an accessible, responsive homepage raffle modal
- Promotes a pair of Garth Brooks tickets for the October 23 BOK Center concert
- Shows raffle pricing of **$10 for 1 entry** and **$50 for 6 entries**
- States that **100% of raffle proceeds benefit Forged to Serve Foundation**
- Identifies The Dallas Lowry Foundation as the raffle host
- Shows the October 21 winner-drawing date
- Suppresses the popup for 24 hours after dismissal and 72 hours after clicking the raffle button
- Automatically stops displaying after the raffle closes on October 21, 2026 at 6:00 PM Central
- Added responsive and reduced-motion styling for the popup

## v19 — Leadership Update

Updated the public leadership page to reflect the current Board of Directors.

Key changes:

- Removed Nicole Ingraham from the public Leadership page
- Updated Scott F. Lowry to **Secretary / Board Member**
- Added governance responsibilities to Scott’s public leadership biography
- Rebalanced the three-member Leadership layout so the third card remains the same width and is centered on desktop
- Updated the current leadership roster in this README

## v18 — Full Production Audit

Completed a site-wide production audit and remediation pass.

Key changes:

- Added canonical URLs, page-specific descriptions, Open Graph metadata, Twitter metadata, and Organization structured data
- Added `sitemap.xml`, `robots.txt`, and a branded `404.html`
- Added skip links, focus-visible styling, reduced-motion handling, and image dimensions
- Improved gold-on-light-background color contrast
- Fixed heading hierarchy and duplicate-ID issues in the embedded legal-policy markup
- Added security attributes to external new-tab links
- Added a clearer sensitive-information warning to the contact form
- Fixed the Donate-page support-dog terminology to match the approved neutral wording
- Added missing `.program-grid` layout styling
- Improved manifest metadata and static-asset cache headers
- Removed the unused legacy wordmark asset
- Repaired and simplified the README/change-log structure
- Added `AUDIT.md` and `FINAL-AUDIT.md`

## v17 — Deterministic Typography + Header Rendering

Removed external Google Fonts and switched to stable local font stacks so header and heading geometry no longer changes between first load, navigation, and hard refresh.

## v16 — Header Position Lock + Flicker Fix

Locked the desktop navigation to a centered rail and removed older conflicting header-positioning rules.

## v15 — Header Architecture Rebuild

Separated the desktop header into independent brand, primary-navigation, and Donate zones.

## v14 — Stable Header + Cache Refresh

Added deterministic desktop centering experiments and asset cache-busting while diagnosing header movement.

## v13 — Header Navigation Centering

Refined desktop navigation centering independently of the foundation brand block.

## v12 — Homepage Hero Alignment

Aligned homepage hero content more naturally at the top on desktop.

## v11 — Leadership Photography Pass

Refined Leadership photography and standardized board-member card presentation.

## v10 — Header + Layout Refinement

Refined desktop navigation, homepage spacing, and presentation.

## v9 — Typography Refresh

Established the site typography hierarchy, later replaced with local stacks in v17 for deterministic rendering.

## v8 — Site-Wide Visual Consistency

Standardized headers, footers, cards, spacing, buttons, terminology, and responsive presentation.

## v7 — Social + Site Icons

Added Facebook integration and the complete favicon/mobile icon set.

## v6 — Leadership Page

Built and expanded the public Leadership page.

## v5 — Program Page Redesign

Reworked the About and program pages into a stronger shared visual system.

## v4 — Program Expansion + Sponsorships

Expanded program content and added Corporate & Community Partner sponsorship levels.

## v3 — Privacy + Consent Management

Added privacy, cookie, terms, and Termly consent-management infrastructure.

## v2 — Domain, Donations + Contact

Connected the public domain and integrated Zeffy and Formspree.

## v1 — Initial Foundation Site

Built the initial responsive static site and core public pages.
