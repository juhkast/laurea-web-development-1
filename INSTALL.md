# Course workshop index

Copy these files into the ROOT of `laurea-web-development-1`:

- `index.html` (replace the current landing page)
- `site-assets/styles.css` (a new CSS file that leaves workshop CSS alone)
- `scripts/build_workshop_index.py`
- `.github/workflows/publish-course.yml` (include the hidden `.github` folder)

Keep all existing workshop folders.

## Automatic publication

1. Commit the files to `main`.
2. Open the repository's **Settings → Pages**.
3. Set **Source → GitHub Actions**.
4. Open **Actions → Publish course workshops** and check that publication succeeds. If needed, choose **Run workflow**.
5. Open https://juhkast.github.io/laurea-web-development-1/

Each push to main rebuilds the landing page by scanning the actual repository. New folders and HTML files are included automatically. The generated index is part of the deployed website; the workflow does not commit its generated index back into the repository.

Every folder with HTML files lists those examples. Resource folders without HTML link to their files on GitHub, rather than to a nonexistent Pages directory listing. Hidden folders, scripts, site-assets and node_modules are omitted. A link means an HTML file exists, not that an unfinished exercise is fully implemented.

The supplied index.html reflects the repository structure inspected on 6 October 2026. Exact relative paths preserve the GitHub Pages repository prefix.

## Simpler manual publication

If you keep **Deploy from a branch → main → / (root)**, the supplied index.html and CSS also work. Add new links manually or run this in the repository root:

```bash
python scripts/build_workshop_index.py
```

Then commit the updated index.html. Automatic scanning only happens when the provided Actions workflow is used.

## Local preview

Open index.html with Live Server. Workshop links require the existing workshop folders alongside index.html. The download contains the landing page files, not another copy of the full course repository.
