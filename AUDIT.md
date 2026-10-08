# Forged to Serve Foundation Website — Full Audit

**Audit target:** v17 production package  
**Audit result:** Major technical issues remediated in v18; two Termly/legal-content items remain manual.  
**Audit date:** September 8, 2026

## Scope

The audit reviewed the full repository and every deployable file under `/public`, including:

- 14 public HTML pages in v17
- Shared CSS and JavaScript
- Local images, favicons, and web manifest
- Header/footer consistency
- Internal links and asset references
- SEO and social metadata
- Accessibility and semantic HTML
- Responsive/layout code
- Contact form integration
- Zeffy donation integration
- Facebook embed
- Termly consent/policy integration
- Cloudflare Pages repository structure and response headers
- Public program terminology and leadership naming
- README/deployment documentation

## Pre-Audit Findings

### High Priority

1. **No canonical URLs on any page**
   - All 14 v17 HTML pages lacked canonical tags.
   - This left duplicate clean-URL / `.html` variants without an explicit preferred URL.

2. **SEO/social metadata was incomplete**
   - Most pages used the generic description `Forged to Serve Foundation`.
   - No Open Graph metadata was present.
   - No Twitter/X card metadata was present.
   - No Organization structured data was present.

3. **No sitemap, robots file, or branded 404 page**
   - `sitemap.xml` was missing.
   - `robots.txt` was missing.
   - `404.html` was missing.

4. **Accessibility navigation support was missing**
   - No skip-to-content link existed.
   - The main content areas had no shared skip-link target.
   - No site-wide `:focus-visible` treatment existed for keyboard users.
   - No reduced-motion fallback was defined.

5. **Color contrast failure on gold text over light backgrounds**
   - The primary gold `#caa24d` is approximately **2.39:1** against white.
   - It was used for small text such as board roles and some light-background labels, below WCAG AA contrast expectations.

6. **Legal-policy markup had structural defects**
   - Privacy and Cookie Policy pages each contained two `<h1>` elements.
   - The Privacy Policy contained repeated `id="control"` values.
   - These issues originated in locally embedded Termly markup.

7. **Termly policy content contains incomplete postal-contact information**
   - The Privacy Policy displays a blank/placeholder postal address.
   - The Cookie Policy also references postal contact without a completed mailing address.
   - This cannot be correctly repaired without the Foundation’s official mailing address and should be corrected in Termly, then regenerated.

### Medium Priority

8. **Images lacked intrinsic dimensions**
   - Local logo and leadership image tags did not declare `width` and `height`.
   - This increases the risk of layout shift while images load.

9. **Donate-page dog terminology had drifted**
   - Donate still said `emotional support dogs` for families.
   - Other pages correctly use neutral `support-dog assistance` until the board formally approves the family program model and terminology.

10. **Donate program cards used an undefined layout class**
    - `program-grid` appeared in HTML but had no corresponding CSS layout rule.

11. **External new-tab links were inconsistent**
    - Termly-generated `target="_blank"` links frequently lacked `rel="noopener noreferrer"`.

12. **Contact form needed stronger privacy guidance**
    - The form explained how submissions would be used but did not explicitly tell visitors not to submit sensitive personal records or credentials.

13. **Manifest metadata was minimal**
    - `start_url`, `scope`, `id`, and a description were absent.

14. **Static response headers could be improved**
    - Security headers were present, but clickjacking protection was not specified.
    - Long-lived caching for versioned static assets was not explicitly defined.

15. **Unused legacy asset remained**
    - `assets/forged-to-serve-wordmark.jpg` was no longer referenced anywhere.

16. **README/change-log structure had become corrupted**
    - The “Updating This Change Log” example contained actual v17/v16 text and a placeholder v15 entry instead of a clean reusable template.
    - The documented typography rule no longer matched the v17 local-font implementation.

### Passed in v17

- **0 broken internal links**
- **0 missing local asset references**
- Consistent primary navigation across all pages
- Consistent footer structure across all pages
- All images had meaningful alt text
- All pages declared `lang="en"`
- All pages had responsive viewport metadata
- Form controls were associated with visible labels
- Termly consent blocker appeared on every page
- Zeffy embed and direct fallback markup were present
- Facebook iframe had a descriptive title and lazy loading
- No stale `Carraco-Hacker`, prosthetics, or broken `No Hero. No Family.` wording was found
- Donation/Terms content did not claim that contributions are automatically tax deductible

## v18 Remediation

The audit remediation pass made the following changes:

- Added page-specific titles and descriptions where needed
- Added canonical URLs
- Added Open Graph metadata
- Added Twitter/X card metadata
- Added Organization JSON-LD to the homepage
- Added `sitemap.xml`
- Added `robots.txt`
- Added branded `404.html`
- Marked Thank You and 404 pages `noindex,follow`
- Added skip-to-content links on every HTML page
- Added shared `id="main-content"` targets
- Added site-wide keyboard focus styling
- Added reduced-motion handling
- Added intrinsic dimensions and decoding/loading attributes to local images
- Added a darker accessible gold text color for light backgrounds
- Fixed the homepage heading-level skip
- Fixed duplicate H1 and duplicate-ID issues in local Termly markup
- Added `noopener noreferrer` to all new-tab links
- Added a sensitive-information warning and Privacy Policy link to the contact form
- Replaced Donate-page `emotional support dogs` wording with approved neutral support-dog language
- Added `.program-grid` layout styling
- Improved web manifest metadata
- Added `X-Frame-Options: SAMEORIGIN`
- Added long-lived caching for `/assets/*`
- Removed the unused wordmark image
- Rebuilt README current-state and change-log sections
- Added this audit documentation

## Manual / External Follow-Up Required

These items depend on information or external services and were intentionally not fabricated during the audit:

1. **Official Foundation mailing address**
   - Enter the approved mailing address in Termly.
   - Regenerate the Privacy Policy and Cookie Policy.
   - Replace the local copies.
   - The current policies contain incomplete postal-contact language.

2. **Fresh Termly scan after v18 is deployed**
   - The site currently includes Termly, Zeffy, Facebook, Formspree, and Cloudflare-delivered resources.
   - Run a fresh scan after deployment so the Cookie Policy reflects the actual final production trackers/cookies.
   - Review whether the generic Termly advertising/analytics boilerplate matches the final scan.

3. **Live integration smoke tests**
   - Submit one real test through Formspree.
   - Confirm the branded Thank You redirect.
   - Open the Zeffy donation embed and direct fallback.
   - Verify the Facebook feed under both accepted and declined consent states.
   - Confirm Cookie Preferences reopens Termly.
   - These require live network/service interaction and are not fully provable from a static repository audit.

4. **Legal review**
   - The locally hosted Terms of Use already contains a notice recommending attorney review.
   - Arbitration, indemnification, liability limits, governing-law language, and the Termly-generated policies should be reviewed by qualified counsel before relying on them in a dispute.

## Production Recommendation

Deploy v18 after reviewing the manual Termly/address item. Technically, the static site is in strong production condition after remediation. The only material audit item that should not be guessed or auto-filled is the Foundation’s official postal contact information in the Termly policies.

## v26 Incremental Review

The June 5, 2027 veteran benefit page was added as `public/veteranbenefit/index.html` so the public-facing route is `/veteranbenefit`. No flat `public/veteranbenefit.html` file is included. Shared CSS, homepage linking, sitemap coverage, nested-route asset references, and release documentation were reviewed for this package.



## v27 Incremental Review

The veteran-benefit page now uses the Foundation's existing Formspree endpoint for sponsorship and vendor/booth submissions. Both forms have unique field IDs, required labels, distinct hidden subject/inquiry metadata, sensitive-information warnings, accessible status messaging, and a successful-submission redirect to `/thank-you`. The clean directory route remains `public/veteranbenefit/index.html`; no flat `public/veteranbenefit.html` file is included. Live Formspree delivery remains a post-deployment smoke test because external service delivery cannot be proven by static validation alone.

## v28 Incremental Review

Event inquiry workflows were moved from the main veteran-benefit page to `public/veteranbenefit/contact/index.html`. The main `/veteranbenefit` page now links to anchored sections on `/veteranbenefit/contact/` for sponsorship, vendor/booth participation, and general event questions. All three event forms use the existing Formspree endpoint with distinct subjects and inquiry metadata. Static review confirms unique form-control IDs, associated labels, sensitive-information guidance, root-relative nested-route assets, and sitemap coverage for the new contact route.


Static v28 validation covered 17 HTML pages with no broken internal links/local assets, duplicate IDs, intrinsic-image-dimension defects, label association defects, or H1-count defects. No files are deleted by this release.
## v29 Incremental Review

The homepage was visually redesigned without adding or removing public routes. The refresh is scoped through homepage-specific classes and retains the approved mission, program, event, partnership, donation, Facebook, and raffle content. The homepage stylesheet reference is cache-busted to v29. Interior-page structure is intentionally unchanged.

Static v29 validation covers the full `/public` tree and confirms the homepage continues to use a single H1, intrinsic dimensions on local images, valid internal route targets, and existing accessible navigation/skip-link infrastructure. No files are deleted by this release. Validation checked **17 HTML pages**, **483 local links/assets references**, **42 local image instances**, and **4 forms** with **0 errors**.


## v30 Incremental Review

The homepage hero visual was corrected so the **Our Commitment** card is no longer absolutely positioned over the logo. The card now participates in normal layout flow beneath the logo frame, with matching maximum width and responsive sizing. The active raffle popup and all other homepage content remain unchanged.


## v31 Incremental Review

The v31 release corrects current leadership and veteran-benefit partner information without changing routes or site functionality. Scott F. Lowry is now presented as **Secretary / Program Director**, with matching biography and image alternative text. Public references to the motorcycle partner are corrected to **Warhound Veteran Motorcycle Association**, and the event partner list links to the organization's official Facebook page.

Static validation checked **17 HTML pages**, **499 links**, **42 image instances**, and **4 forms** with **0 errors**. No stale `War Dogs Motorcycle Club` references remain in `/public`, no stale `Secretary / Board Member` references remain for Scott in `/public`, and the added external Facebook link includes `noopener noreferrer`. No files are deleted by this release.


## v32 Incremental Review

The v32 release adds official public links for all four organizing partners on the June 5 veteran-benefit page. Forged to Serve Foundation links to its own production domain; VFW Post 9126 and Broken Warrior Ranch link to their supplied public websites; and the previously established Warhound Veteran Motorcycle Association Facebook link is retained. External links use secure new-tab attributes. No routes or deployable assets are added or deleted by this release. Static validation checked **17 HTML pages**, **702 local links/assets references**, **42 image instances**, and all form controls with **0 errors**.


## v33 Incremental Validation — United for Warriors Naming

Validated the production content update establishing **United for Warriors Poker Run and Concert** as the official event name. Confirmed the homepage event spotlight, `/veteranbenefit/` hero and metadata, `/veteranbenefit/contact/` metadata and Formspree identifiers, and event footer labels are consistent. Existing event routes remain unchanged and no obsolete flat `public/veteranbenefit.html` file is present.
