# Forged to Serve Foundation Website

Official static website for **Forged to Serve Foundation**.

**Website:** https://forgedtoserve.org/  
**Tagline:** *Forged by Service. Driven to Serve.*  
**Commitment:** *No Hero or Family Left Behind.*

## Deployment

The site is deployed through **GitHub → Cloudflare Pages**.

1. Push the contents of this repository to GitHub.
2. In Cloudflare Pages, connect the GitHub repository.
3. Framework preset: **None**
4. Build command: **leave blank**
5. Build output directory: **public**
6. Deploy.
7. Custom domains:
   - `forgedtoserve.org`
   - `www.forgedtoserve.org`

The Zeffy donation form, Formspree contact form, Termly consent tools, and approved Forged to Serve branding are already integrated into the site.

---

# Site Change Log

This section documents major production changes to the Forged to Serve website so future edits can be traced without relying only on Git commit history.

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

## Current Site Notes

- Static HTML/CSS/JavaScript site with deployable files under `/public`
- Hosted on Cloudflare Pages
- Source controlled through GitHub
- Microsoft 365 handles foundation email
- Zeffy handles donations
- Formspree handles website contact submissions
- Termly handles consent management
- No advertising or analytics cookies were detected in the latest documented cookie scan

## Updating This Change Log

When making a meaningful production change, add a new section using:

```md
## v13 — Short Change Name

Brief summary of the work.

Key changes:

- Change one
- Change two
- Change three
```

Small typo fixes do not need their own version unless they materially affect the public site.
