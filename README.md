# Forged to Serve Foundation Website

Official website repository for **Forged to Serve Foundation**.

## Current Site Notes

- Current site package version: **v58**
- Production updates only after the package is committed to `main` and Cloudflare Pages completes deployment
- Production site: **https://forgedtoserve.org**
- Static HTML/CSS/JavaScript site with deployable files under `/public`
- Hosted with **Cloudflare Pages**
- Source controlled through **GitHub**
- Cloudflare Pages build output directory: `public`
- **Termly** handles consent management, Privacy Policy, Cookie Policy, and consent preferences
- **Formspree** handles general website contact-form submissions
- **Zeffy** handles online donations
- Homepage links directly to the Foundation’s official Facebook page; the unreliable native Facebook Page Plugin timeline embed was removed in v46
- Foundation email: `info@forgedtoserve.org`
- IRS-recognized **501(c)(3) public charity** under IRC Section 170(b)(1)(A)(vi); Federal EIN `42-5213008`; exemption effective September 2, 2026
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

A full production audit was completed again before **v58**. See:

- [`AUDIT.md`](AUDIT.md) — findings identified during the audit
- [`FINAL-AUDIT.md`](FINAL-AUDIT.md) — post-fix validation and remaining manual items

## Updating This Change Log

For each meaningful production change, add a new sequential version section.

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

## Change Log

## v58 — Audit Remediation & Event SEO

Applied the safe technical fixes identified in the October 2026 production audit.

Key changes:

- Removed obsolete Formspree AJAX queue stubs while preserving standard Formspree POST submissions and CAPTCHA behavior
- Removed the expired Garth Brooks raffle popup, raffle JavaScript, and raffle-only public assets
- Removed confirmed unused legacy public assets, including old leadership and superseded event/artist image variants
- Made the dark accessible gold explicit for leadership-role and sponsorship-amount text on light backgrounds
- Tightened selected page titles and meta descriptions for search-result readability
- Added Schema.org `Event` JSON-LD for United for Warriors with date/time, BlackGold Park, organizer, and confirmed performers
- Refreshed shared CSS/JavaScript cache-busting references to `v58` across all public HTML pages
- Left Termly-generated legal-policy text untouched; the Privacy Policy questionnaire still needs to be regenerated in Termly to reflect the new program-interest form fields
- **Changed-files deployment note:** delete the obsolete files listed in `DELETE-FILES-v58.txt`; uploading changed files alone will not remove old assets from GitHub



## v57 — Formspree Standard Submission + reCAPTCHA Compatibility

Restored standard Formspree POST submissions across all seven website forms after the AJAX enhancement conflicted with the form's enabled reCAPTCHA configuration.

Key changes:

- Removed the `@formspree/ajax` browser library from Service Dogs, Veteran Business, Families, Contact, and United for Warriors contact pages
- Removed the v56 AJAX enhancer from all seven Formspree forms
- Preserved the existing Formspree endpoint, form fields, validation, inquiry labels, and reCAPTCHA/spam-protection workflow
- Standard Formspree submissions now handle CAPTCHA and submission normally without requiring a custom CAPTCHA key
- Custom post-submit routing to `https://forgedtoserve.org/thank-you` should be configured in the Formspree form's **Settings → Thank You Redirect**
- Removed the external `unpkg.com` AJAX dependency from active pages; no additional Termly vendor scan is required solely for the v57 form fix

No public routes or program content were removed. The obsolete `public/assets/formspree-forms.js` helper is removed from the full package; it may remain harmlessly in GitHub when applying the changed-files package and can be deleted during routine cleanup.

## v56 — Form Confirmation Redirect

Improved Formspree submission feedback and post-submit navigation across the site.

Key changes:

- Added Formspree's official `@formspree/ajax` browser library to all website forms that submit through the Foundation Formspree endpoint.
- Redirects visitors to the site's existing `/thank-you` page only after Formspree confirms a successful submission.
- Preserves the standard HTML `action` and `method` on every form as a no-JavaScript / blocked-script fallback.
- Applies to the three program-interest forms, the main Contact form, and all United for Warriors inquiry forms.
- Adds loading-state support and form-level error rendering through Formspree's supported library rather than custom `fetch()` code.
- Added the new local helper asset `public/assets/formspree-forms.js`; no shared CSS or `site.js` changes were required.

After deployment, run a fresh Termly scan because the affected pages now load Formspree's official AJAX library from `unpkg.com`.

No public routes were added or removed.



## v55 — Formspree Submission Reliability Fix

Replaced the site's custom JavaScript/AJAX Formspree submission handlers with standard HTML form POSTs for more reliable submissions across browsers, privacy tools, and content blockers.

Key changes:

- Removed custom `fetch()` interception from the main Contact form, all three program-interest forms, and all United for Warriors contact/inquiry forms
- Preserved the existing Formspree endpoint, form subjects, program/inquiry metadata, required fields, and validation
- Removed obsolete page-level `data-success-url` attributes that only applied to the former AJAX handlers
- Forms now submit directly to Formspree using standard HTML behavior; configure the Formspree form's Thank You Redirect to `https://forgedtoserve.org/thank-you` for a branded post-submit destination
- No CSS, shared JavaScript, program content, event content, routes, or images were changed

No file deletion is required for this release.

## v54 — Program Interest & Assistance Inquiry Forms

Added low-friction program-interest forms to the Foundation’s three core program pages while preserving the distinction between an inquiry and a formal application.

Key changes:

- Added a **Service Dog Program Interest Form** to `/dogs`
- Added a **Veteran Business Program Interest Form** to `/business`
- Added a **Family Support Inquiry** to `/families`
- Routed all three forms through the existing Forged to Serve Formspree endpoint with distinct program and inquiry-type metadata
- Added clear acknowledgment language that submission does not guarantee eligibility, placement, funding, services, or assistance
- Avoided requesting diagnoses, medical records, DD214s, tax returns, bank statements, death certificates, Social Security numbers, or other sensitive documents during initial inquiry
- Clarified program-page notices so interest inquiries are welcome now while formal application and assistance criteria remain in development
- Added accessible async submission handling and redirect to the existing Thank You page
- Reused existing form styles; no shared CSS or JavaScript files changed, so existing `v52` cache-busting references remain valid

No file deletion is required for this release.

## v53 — United for Warriors Registration Links & Final Vendor Pricing

Connected the current v52 United for Warriors experience to the live Zeffy registration campaigns without removing or replacing the established artist, partner, or event content.

Key changes:

- Added the attendee ticket / registration link: `https://www.zeffy.com/en-US/ticketing/united-for-warriors`
- Added the sponsorship and vendor registration link: `https://www.zeffy.com/en-US/ticketing/united-for-warriors-sponsorships-and-vendor-registration`
- Added direct registration calls to action on the homepage, event page, and event contact page
- Preserved the dedicated `/unitedforwarriors/artists/` page, David Oakleaf imagery and biography, Broke Teachers and Glenpool Guitars for Vets artwork, and the Everybody Eats partner presentation
- Finalized public vendor pricing at **$50 Craft / Artisan**, **$100 Business Vendor**, **$200 Food Truck / Food Vendor**, and **Free Veteran Resource Booth**
- Expanded the **$5,000 Stage Sponsor** wording to note that the sponsorship helps support artist expenses, stage production, sound, lighting, and related entertainment costs
- Kept the existing event inquiry forms available for custom, in-kind, special setup, and general questions
- No CSS, JavaScript, routes, or image assets were changed; existing `v52` cache-busting references remain valid

No file deletion is required for this release.

## v52 — United for Warriors Intro Balance

Refined the **More than a concert** section after desktop review to use the available space more intentionally while preserving the partner panel beside the event overview.

Key changes:

- Restored the two-column desktop layout with **Event Partners** on the right
- Added four compact event-highlight cards beneath the overview copy so the left column no longer ends in a large blank area
- Added direct **View Full Schedule** and **Meet the Artists** calls to action
- Returned the partner cards to a two-column layout inside the sidebar for better balance
- Preserved responsive stacking on tablets and phones
- Updated shared CSS/JavaScript cache-busting references site-wide to `v52` because the shared stylesheet changed
- No routes or image assets were added or removed

## v51 — United for Warriors Layout Refinement

Refined the United for Warriors event and artist pages after desktop review.

Key changes:

- Reworked the **More than a concert** section so the event-partner panel sits below the introduction instead of creating a large blank desktop column
- Expanded the event-partner cards into a responsive full-width grid, including Everybody Eats
- Removed the redundant standalone David Oakleaf logo from both the main headliner copy and the secondary **Live Performance** card; David’s supplied headliner photo already carries his branding
- Added the confirmed **8:00–10:00 PM** headliner time directly to the Live Performance copy
- Vertically centered and simplified the Live Performance copy beside David's performance photo
- Updated shared CSS/JavaScript cache-busting references site-wide to `v51` because the shared stylesheet changed
- No routes or image assets were added or removed

## v50 — David Oakleaf Live Performance Card Redesign

Redesigned the David Oakleaf live-performance card so the desktop layout can no longer expose a partially clipped embedded logo. The live photo is now intentionally cropped above its baked-in logo, while the complete official David Oakleaf logo is displayed separately beside the performance copy.

Key changes:

- Added a clean live-performance crop that removes the baked-in logo area from the photo
- Added the complete safe-area David Oakleaf logo as its own element in the live-performance card
- Replaced the previous `artist-secondary-photo` layout with a new dedicated `artist-live-performance-v50` component, avoiding the older desktop max-height rule entirely
- Preserved responsive stacking so the full photo and full logo remain visible on smaller screens
- Updated site-wide shared CSS/JavaScript cache-busting references to `v50` because the shared stylesheet changed
- No routes were added or removed, and no file deletion is required

## v49 — David Oakleaf Live Photo Full-Frame Fix

Corrected the David Oakleaf live-performance image on the United for Warriors Artists page so the complete supplied promotional photo — including the embedded David Oakleaf logo at the bottom — remains visible instead of being vertically cropped.

Key changes:

- Removed the fixed maximum-height crop from the live-performance image
- Preserved the image’s natural aspect ratio so the embedded artist logo and decorative artwork are fully visible
- Rebalanced the live-performance media/text columns for a cleaner desktop presentation
- Updated site-wide shared CSS/JavaScript cache-busting references to `v49` because the shared stylesheet changed
- No routes were added or removed, and no file deletion is required

## v48 — David Oakleaf Logo Safe-Area Fix

Corrected the David Oakleaf artist logo presentation so decorative border, stars, and corner details remain fully visible at every responsive size.

Key changes:

- Added a padded safe-area WebP version of the supplied David Oakleaf logo without altering the artwork
- Updated the United for Warriors main lineup card to use the safe-area logo asset
- Updated the Artists & Bands headliner section to use the same safe-area logo asset
- Preserved the existing v47 layout, artist biographies, photos, links, schedule, and event content
- Shared CSS and JavaScript were not changed, so no site-wide cache-busting update is required

No file deletion is required for this release.

## v47 — United for Warriors Artists & Confirmed Headliner

Created a dedicated Artists & Bands page for the 2027 United for Warriors Poker Run and Concert and updated the event site for the confirmed concert lineup.

Key changes:

- Added permanent route `/unitedforwarriors/artists/` with full artist profiles and supplied promotional imagery
- Confirmed **David Oakleaf & The Open Road** as the 8:00–10:00 PM headliner and added David's supplied biography, artist logo, and promotional photos
- Added a dedicated **Broke Teachers** profile featuring Matt Caldwell, James Quinn, and Michelle Quinn
- Corrected the band name to **Glenpool Guitars for Vets Band** and described the group accurately as veterans, instructors, civilian musicians, and friends of the program
- Updated the United for Warriors working schedule, concert lineup cards, live-music copy, and closing announcements
- Updated the homepage event spotlight with the confirmed lineup and an Artists & Bands link
- Added **Everybody Eats** of Tulsa to the event-partner presentation without inventing an unverified logo or external link
- Added the new Artists & Bands route to `sitemap.xml` and site footers
- Added seven optimized WebP artist assets while preserving source aspect ratios
- Updated shared CSS for the artist-page layout and bumped site-wide `site.css` and `site.js` cache-busting references to `v47`

No file deletion is required for this release.

## v46 — Facebook Homepage Reliability Fix

Removed the native Meta/Facebook Page Plugin timeline embed after it began rendering the Page header without loading the timeline, leaving a large blank area on the homepage.

Key changes:

- Removed the unreliable Facebook Page Plugin iframe from the homepage
- Replaced the blank feed area with a branded Facebook card and direct links to the official Foundation Facebook page
- Preserved the existing Stay Connected section and official `https://facebook.com/forgedtoserve` destination
- Avoided adding a third-party social-feed service or new tracking script
- No CSS or JavaScript files were changed, so existing `v41` shared-asset cache-busting references remain valid

No file deletion is required for this release.

## v45 — Zeffy Donation Campaign Update

Updated the website donation embed to use the Foundation’s new Zeffy campaign, **Support Veterans & Families**.

Key changes:

- Replaced the previous Zeffy donation-form slug with `support-veterans-and-families` on the Donate page
- Updated both the primary Zeffy embed configuration and the iframe fallback to the new campaign
- New public campaign URL: `https://www.zeffy.com/en-US/donation-form/support-veterans-and-families`
- No CSS or JavaScript files were changed, so existing `v41` shared-asset cache-busting references remain valid

No file deletion is required for this release.

## v44 — 501(c)(3) Public Charity Status

Updated the public website after receipt of the IRS determination letter confirming Forged to Serve Foundation's federal tax-exempt and public-charity status.

Key changes:

- Identified Forged to Serve Foundation site-wide as an **IRS-recognized 501(c)(3) public charity**
- Added donor-facing contribution-deductibility language to the Donate page
- Added the IRS public-charity classification under **IRC Section 170(b)(1)(A)(vi)** and the **September 2, 2026** exemption effective date to the About page
- Updated the Terms of Use donation section to reflect the Foundation's approved tax-exempt status and contribution deductibility
- Added Schema.org `nonprofitStatus: Nonprofit501c3` to homepage Organization structured data while preserving the existing EIN
- Updated all 17 public page footers with the 501(c)(3) public-charity status and Federal EIN
- No CSS or JavaScript files were changed, so existing `v41` shared-asset cache-busting references remain valid

No file deletion is required for this release.

## v43 — Federal EIN Information

Added the Foundation’s federal Employer Identification Number (EIN) to the public website and cleaned stale files that prior releases had already marked for removal.

Key changes:

- Added **Federal EIN: 42-5213008** to the site-wide footer across all 17 current public HTML pages
- Added the EIN beside donor-facing information on the Donate page
- Added `taxID` to the homepage Organization structured data
- Preserved the existing language that does not automatically represent donations as tax deductible
- Removed the stale `public/site.webmanifest` file left behind after v42
- Removed the stale `public/veteranbenefit/` directory left behind after the v39 migration to `/unitedforwarriors/`
- No CSS or JavaScript files were changed, so existing `v41` shared-asset cache-busting references remain valid

**Changed-files deployment note:** if using the changed-files-only ZIP, manually delete `public/site.webmanifest` and the entire `public/veteranbenefit/` directory from GitHub. Browser uploads do not remove obsolete files.

## v42 — Remove Installable-App Prompt

Removed Progressive Web App installability metadata so Android browsers no longer treat the site as an installable app during normal browsing.

Key changes:

- Removed the `rel="manifest"` reference from all 17 public HTML pages
- Removed `public/site.webmanifest` from the production package
- Preserved standard favicon and Apple touch-icon metadata
- Confirmed no service-worker registration, `beforeinstallprompt`, or `appinstalled` code exists
- No CSS, JavaScript, public routes, event content, or forms were changed

**Changed-files deployment note:** if using the changed-files-only ZIP, manually delete `public/site.webmanifest` from GitHub because browser uploads do not remove obsolete files.

## v41 — Homepage Hero Scale Refinement

Reduced the visual scale of the homepage hero so the opening section no longer dominates a desktop viewport.

Key changes:

- Reduced desktop and mobile hero vertical padding
- Reduced the headline maximum size while preserving the approved wording and hierarchy
- Reduced the hero logo frame and commitment card from roughly 410 px to 335 px on desktop
- Tightened hero spacing and supporting copy scale for a more balanced first-screen composition
- Preserved the navy / gold visual treatment, CTA buttons, mission tags, and commitment wording
- Bumped shared CSS and JavaScript cache-busting references to `v41` across all public HTML pages

No file deletion is required for this release.

## v40 — Warhound Logo Transparency

- Replaced the Warhound Veteran Motorcycle Association event-partner logo with a transparent-background PNG derived from the supplied artwork.
- Preserved the logo at its intrinsic 800 × 800 dimensions.
- Updated the United for Warriors partner-card reference to the PNG asset.
- Removed the old black-background JPG from the full production package.

## v39 — United for Warriors URL Migration

Moved the public event experience from the generic veteran-benefit route to the permanent **United for Warriors** event brand URL.

Key changes:

- New main event route: `public/unitedforwarriors/index.html` → `https://forgedtoserve.org/unitedforwarriors/`
- New event contact route: `public/unitedforwarriors/contact/index.html` → `https://forgedtoserve.org/unitedforwarriors/contact/`
- Updated homepage event links, event-page internal links, canonical URLs, Open Graph URLs, and sitemap entries
- Added Cloudflare Pages 301 redirects from `/veteranbenefit` and `/veteranbenefit/contact` to the new branded routes
- Removed the old `public/veteranbenefit/` directory from the full production package

**Deletion required when applying the changed-files-only package:** remove `public/veteranbenefit/` from the repository after the new route files are committed.

## v38 — United for Warriors Sponsorship Packages

Published event sponsorship levels and named sponsorship opportunities for **United for Warriors Poker Run and Concert**.

Key changes:

- Added six public sponsorship packages from **$250 Community Supporter** through **$10,000 Presenting Sponsor**
- Added named opportunities for the **Stage, Kids Zone, Veterans Row, Poker Run, Beverage Area, and Volunteer & Hospitality**
- Added clear package benefits, in-kind/custom sponsorship guidance, and production-deadline language
- Updated the event sponsorship inquiry form so sponsors can select the new package or named opportunity
- Refreshed shared CSS/JavaScript cache-busting references to **v38** across every HTML page

No files are deleted by this release.

## v37 — Mobile Header & Facebook Refinement

Refined the site-wide mobile header and reduced the homepage Facebook embed footprint on phones.

Key changes:

- Replaced the always-wrapped mobile navigation with an accessible **Menu** toggle on screens 900px and below
- Keeps navigation and Donate controls available without JavaScript, while collapsing them only after enhancement loads
- Uses a compact two-column mobile menu, switching to one column on very narrow screens
- Tightened the mobile brand/header geometry to prevent crowding at the top of the page
- Reduced the Facebook feed card width and height on mobile so it no longer dominates the homepage
- Added keyboard focus, ARIA expanded state, Escape-safe layout behavior, and reduced-motion support for the menu control
- Refreshed shared CSS/JavaScript cache-busting references to **v37** across every HTML page

No files are deleted by this release.

## v36 — United for Warriors Image Layout Fix

Corrected the event-page organizer and performer image presentation shown in the production screenshots.

Key changes:

- Prevented the legacy `.event-lineup div` rule from styling nested elements inside the new performer cards
- Constrained organizing-partner logos to consistent card-safe dimensions without cropping or stretching
- Constrained Broke Teachers and Guitars for Vets artwork inside fixed logo wells while preserving natural aspect ratio
- Hardened the visual lineup rules against older generic event styles
- Refreshed shared CSS/JavaScript cache-busting references to **v36** across every HTML page
- Preserved the existing event name, routes, partner links, and performer links

No files are deleted by this release.

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
