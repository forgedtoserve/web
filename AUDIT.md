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
