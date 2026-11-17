# Website review dashboard

The Forged to Serve preview-only review dashboard lives at `public/test/index.html`, and is available at https://preview.forged-to-serve.pages.dev/test/.

## Mandatory “What Changed?” entries

Every time the preview website changes, add a dated entry to the **What Changed?** section of `index.html` **before committing**. Include a title, plain-English description, affected pages/files, outstanding review notes, and status (Preview only / Needs review / Approved / Published). Put the latest entry first and retain older entries, using the expandable history for earlier changes.

The [GitHub compare view](https://github.com/forgedtoserve/web/compare/main...preview) is the definitive source for file-level differences. Do not mark changes Published until their production deployment is verified. Do not merge the `preview` branch into `main` without the site's owner's explicit approval. Production website updates should also receive their own root README version log entry as appropriate.
