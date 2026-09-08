# Forged to Serve Foundation Website

Official website repository for **Forged to Serve Foundation**.

## Current Site Notes

- Current production version: **v18**
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
