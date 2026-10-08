# Forged to Serve Foundation Website — Final Audit

**Version:** v18  
**Status:** **Conditional production pass**  
**Condition:** Complete the official mailing-address / Termly policy refresh described below.

## Automated Static Validation

Post-remediation validation produced:

- **15 HTML pages checked** (14 existing pages + new branded 404)
- **0 broken internal links**
- **0 missing local asset references**
- **0 pages missing titles**
- **0 pages missing meta descriptions**
- **0 pages missing canonical URLs**
- **0 pages missing required Open Graph metadata**
- **0 pages missing required Twitter/X card metadata**
- **0 heading-count defects**
- **0 heading-level skips**
- **0 duplicate HTML IDs**
- **0 pages missing skip-to-content support**
- **0 images missing alt text**
- **0 local images missing intrinsic width/height**
- **0 `target="_blank"` links missing `noopener noreferrer`**
- `sitemap.xml` present
- `robots.txt` present
- branded `404.html` present
- unused legacy wordmark asset removed

## Content Consistency Validation

Confirmed after remediation:

- Official tagline remains **“Forged by Service. Driven to Serve.”**
- Public commitment remains **“No Hero or Family Left Behind.”**
- Vanessa is listed publicly as **Vanessa Hacker**
- Richard is listed as **Founder, President & Executive Director**
- Scott F. Lowry is listed as **Board Member**
- Nicole Ingraham is listed as **Secretary / Board Member**
- Public program areas remain:
  - Families of the Fallen
  - Veteran Small Business Assistance
  - Service Dogs for Veterans
- Family dog-support language remains neutral as **support-dog assistance**
- No prosthetics language remains
- No automatic tax-deductibility claim was found

## Accessibility / UX Validation

Implemented:

- Skip-to-content links
- Shared main-content target
- Visible keyboard focus treatment
- Reduced-motion support
- Improved gold text contrast on light backgrounds
- Single-H1 structure on all pages
- Corrected heading hierarchy
- Intrinsic image dimensions to reduce layout shift
- Lazy loading for below-the-fold images
- Stable local typography with no Google Font dependency

## SEO / Discoverability Validation

Implemented:

- Page-specific titles
- Page-specific descriptions
- Canonical URLs
- Open Graph metadata
- Twitter/X card metadata
- Homepage Organization structured data
- XML sitemap
- robots.txt
- `noindex` on Thank You and 404 pages

## Security / Privacy Validation

Implemented or confirmed:

- Termly resource blocker present on all pages
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- restrictive Permissions Policy for geolocation/camera/microphone
- `X-Frame-Options: SAMEORIGIN`
- secure new-tab link relations
- sensitive-information warning on contact form
- static-asset cache policy

A full Content Security Policy was **not** added during this audit because the site depends on Termly, Zeffy, Facebook, Formspree, and inline integration code; an untested CSP could silently break fundraising, consent, or contact functionality.

## Remaining Manual Items

### 1. Termly postal address — required

The locally stored Privacy and Cookie policies contain incomplete postal-contact information. Do not invent an address.

**Action:**
1. Decide the Foundation’s official public mailing address.
2. Update it in Termly.
3. Regenerate Privacy and Cookie policies.
4. Replace the local policy HTML.
5. Re-run the static audit.

### 2. Termly production scan — required after deployment

Run a fresh Termly scan after v18 is live and review the resulting cookie classifications against the locally stored Cookie Policy.

### 3. Live service smoke test — recommended

Verify on production:

- Formspree submission and Thank You redirect
- Zeffy embed and fallback link
- Facebook timeline with consent allowed
- Facebook behavior when consent is declined
- Cookie Preferences control
- favicon/app icons
- sitemap and robots URLs
- branded 404 behavior

## Final Assessment

The **site code, structure, accessibility baseline, internal links, metadata, content consistency, assets, and repository organization pass the v18 static production audit**.

The only material unresolved audit item is external/legal content: the official mailing address and subsequent Termly policy regeneration. Once that is completed and the live integrations are smoke-tested, the site can be marked **full production pass**.

## v26 Incremental Package Validation — Veteran Benefit

The v26 release package adds `public/veteranbenefit/index.html` at the agreed clean-route structure. The flat `public/veteranbenefit.html` file is not present.

Package validation confirms:

- event canonical URL is `https://forgedtoserve.org/veteranbenefit`
- homepage event link targets `/veteranbenefit`
- nested-page internal assets and navigation use root-relative paths
- sitemap includes the clean event URL
- `/public` remains the complete Cloudflare Pages deployment output

This section validates the package only; production remains unchanged until the v26 files are committed to the connected GitHub `main` branch and Cloudflare Pages completes a new deployment.



## v27 Incremental Package Validation — Event Forms

The v27 release adds Formspree-backed sponsorship and vendor/booth forms to `public/veteranbenefit/index.html`. Static package validation confirms:

- both event forms point to the existing Formspree endpoint
- sponsorship and vendor submissions use distinct `_subject`, `event`, and `inquiry_type` values
- form controls have unique IDs and associated labels
- required fields are marked and browser validation is enabled
- sensitive-information guidance and Privacy Policy links are present
- successful asynchronous submissions redirect to `/thank-you`
- failure states remain on-page with `role="status"` / `aria-live="polite"` messaging
- the event route remains `public/veteranbenefit/index.html` and no flat `public/veteranbenefit.html` exists
- `/public` remains the Cloudflare Pages deployment output

External Formspree delivery must still be smoke-tested after deployment.

## v28 Incremental Package Validation — Event Contact Page

The v28 release moves event forms to the dedicated `public/veteranbenefit/contact/index.html` route. Static package validation confirms:

- `/veteranbenefit` no longer contains the large sponsorship or vendor forms
- sponsorship and vendor calls to action link to `/veteranbenefit/contact/#sponsorship` and `/veteranbenefit/contact/#vendor`
- the event closing action links to `/veteranbenefit/contact/#general`
- the dedicated event contact page contains Sponsorship, Vendor / Booth, and General Event Question forms
- all three forms use distinct Formspree `_subject`, `event`, and `inquiry_type` values
- form labels and IDs are unique and required fields remain browser-validated
- successful asynchronous submissions continue to redirect to `/thank-you`
- `sitemap.xml` includes the event contact route
- `/public` remains the Cloudflare Pages deployment output

External Formspree delivery remains a post-deployment smoke test.


### v28 static validation results

Post-change static validation checked **17 HTML pages** and found:

- 0 broken internal links or missing local assets
- 0 duplicate HTML IDs
- 0 local images missing intrinsic width/height
- 0 form controls missing associated visible labels
- 0 heading-count defects
- no flat `public/veteranbenefit.html` file
- 0 event inquiry forms remaining on the main `/veteranbenefit/` page
- 3 Formspree inquiry forms on `/veteranbenefit/contact/`
## v29 Incremental Package Validation — Homepage Visual Refresh

The v29 release refreshes `public/index.html` and the shared stylesheet while preserving the existing route map. Package validation confirms:

- homepage primary navigation and call-to-action targets resolve to existing local routes
- the veteran-benefit spotlight targets `/veteranbenefit/` and `/veteranbenefit/contact/`
- local homepage images retain intrinsic `width` and `height` attributes
- the homepage maintains one H1 and the existing skip-to-content target
- new visual rules are scoped to homepage-specific classes to minimize regression risk on interior pages
- the homepage uses `assets/site.css?v=29` to avoid stale custom-domain stylesheet caching
- `/public` remains the complete Cloudflare Pages deployment output
- no route or file deletion is required for this release

Static v29 validation checked **17 HTML pages**, **483 local links/assets references**, **42 local image instances**, and **4 forms** with **0 errors**. Live rendering, the Facebook embed, Termly behavior, and the active raffle popup remain post-deployment smoke tests.



## v30 Incremental Package Validation — Homepage Hero Overlap Fix

The v30 release corrects the v29 homepage hero overlap without changing site routes or functionality. Validation confirms:

- the commitment card is no longer absolutely positioned over the logo
- desktop and mobile rules keep the commitment card below the logo frame
- the homepage loads `assets/site.css?v=30`
- the active raffle popup markup and behavior are unchanged
- `/public` remains the Cloudflare Pages deployment output


## v31 Incremental Package Validation — Leadership & Event Partner Corrections

The v31 release updates public-facing leadership and event-partner content. Validation confirms:

- Scott F. Lowry is listed as **Secretary / Program Director** on the Leadership page
- Scott's biography and image alternative text match the current role
- the leadership kicker reads **Veteran & Program Leadership**
- all public event references use **Warhound Veteran Motorcycle Association**
- the event partner list links to `https://www.facebook.com/WarhoundVMA` with secure new-tab attributes
- no `War Dogs Motorcycle Club` reference remains in deployable `/public` content
- no stale `Secretary / Board Member` reference remains for Scott in deployable `/public` content
- no route or file deletion is required for this release
- static validation checked **17 HTML pages**, **499 links**, **42 image instances**, and **4 forms** with **0 errors**
