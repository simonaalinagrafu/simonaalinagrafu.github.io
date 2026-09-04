# Setup

Everything needed to get this project running locally and deployed. Written as a runbook —
follow it top to bottom on a fresh machine, or jump to the section you need.

See `ARCHITECTURE.md` for how the code is organised and `README.md` for day-to-day authoring.

---

## 1. Facts about this project

| | |
|---|---|
| Repo | https://github.com/simonaalinagrafu/simonaalinagrafu.github.io |
| Owner | GitHub **organization** `simonaalinagrafu` (not a user account) |
| Visibility | Public (required — org Pages sites need a public repo on the free plan) |
| Default branch | `main` |
| Live URL | https://simonaalinagrafu.github.io |
| Stack | Astro 5 (static) + Tailwind CSS v4 |
| Deploy | GitHub Actions → GitHub Pages, on every push to `main` |

The repo name **must** stay exactly `simonaalinagrafu.github.io` — that is what makes GitHub
serve it at the org root domain rather than under a `/repo/` sub-path.

Commits are pushed from the **Vasile Grafu** GitHub account, which has write access to the org.
The local git identity is `Vasile Grafu <vasilegrafu@gmail.com>`; that is the committer and is
independent of the site's content identity (Simona Alina Grafu).

---

## 2. Prerequisites

| Tool | Version used | Notes |
|---|---|---|
| Node.js | v24.18.1 | Any Node 18+ works; there is no `engines` field pinning it |
| npm | 11.16.0 | Ships with Node |
| Git | 2.53.0 | |
| Google Chrome | any recent | **Only** needed to regenerate `cv.pdf` and `og.png` (§6) |

Chrome is expected at:

```
C:\Program Files\Google\Chrome\Application\chrome.exe
```

---

## 3. Local setup

```sh
git clone https://github.com/simonaalinagrafu/simonaalinagrafu.github.io.git
cd simonaalinagrafu.github.io
npm ci
```

`npm ci` prints `allow-scripts` warnings for `esbuild` and `sharp`. That is expected and
harmless — both are optional postinstall steps and the build works without approving them.

Then:

```sh
npm run dev        # dev server at http://localhost:4321
npm run check      # astro check — type-checks .astro/.ts (must be 0 errors)
npm run build      # static build to ./dist
npm run preview    # serve ./dist, to see exactly what deploys
npm run format     # prettier over src/
```

**Expected clean state:** `npm run check` → *0 errors, 0 warnings, 0 hints*;
`npm run build` → *8 page(s) built*.

> If port 4321 is busy, Astro picks the next free port — or pass one explicitly:
> `npm run preview -- --port 4322`.

---

## 4. Deployment — configure this once ⚠️

**This is the step that is currently NOT done, and nothing will deploy correctly until it is.**

As of the last check, the repo's Pages source is set to **"Deploy from a branch"**, so GitHub
runs its built-in Jekyll build and serves `README.md` rendered with the default theme. That is
what is live at https://simonaalinagrafu.github.io right now — not this Astro site. The only
workflow run in the repo's history is GitHub's own `pages build and deployment`; the workflow
in `.github/workflows/deploy.yml` has never run.

### Fix

1. Go to **repo → Settings → Pages**.
2. Under **Build and deployment → Source**, change *Deploy from a branch* to
   **GitHub Actions**.
3. Push to `main` (or run the workflow manually — it has `workflow_dispatch`).

Verify afterwards:

```sh
curl -s https://simonaalinagrafu.github.io | grep -o "<title>[^<]*</title>"
```

- ✅ correct: `<title>Simona Alina Grafu — Engineering Manager & AI Systems Builder</title>`
- ❌ still Jekyll: `<title>simonaalinagrafu.github.io | simonaalinagrafu</title>`

### If it still fails, check the org settings

Because the repo is owned by an organization rather than a user, deploys can also be blocked
one level up, at **organization → Settings**:

- **Actions → General → Actions permissions** — Actions must be allowed for this repo.
- **Actions → General → Workflow permissions** — the workflow declares its own
  `permissions:` block, but an org policy set to a stricter default can still override it.
- **Pages** — some orgs restrict who may publish Pages sites and at what visibility.

### How the pipeline works

`.github/workflows/deploy.yml`, triggered on push to `main` and via `workflow_dispatch`:

- **build** — checkout → `npm ci` → `npm run check` (type-check gate: a type error fails the
  deploy) → `withastro/action@v3`, which builds and uploads the Pages artifact.
- **deploy** — `actions/deploy-pages@v4` publishes that artifact to the `github-pages`
  environment.

Note that `withastro/action@v3` runs its own install and build, so dependencies are installed
twice. It is redundant but harmless — the explicit `npm ci` exists so `npm run check` can run
as a gate before the action takes over.

---

## 5. First push

The repo currently has a single commit (`d71f930 Initial commit`) and the whole site is still
untracked. `.gitignore` already covers `node_modules/`, `dist/`, `.astro/`.

```sh
git add -A
git status          # confirm dist/ and node_modules/ are NOT staged
git commit -m "Add Astro site"
git push origin main
```

Then watch the run under the repo's **Actions** tab.

---

## 6. Regenerating the binary assets

`public/cv.pdf` and `public/og.png` are **generated files** checked into the repo. They are not
rebuilt by `npm run build`, so they go stale silently whenever the data behind them changes.

### `public/cv.pdf` — after any edit to `src/data/profile.ts`

Printed by headless Chrome from the `/resume-print/` page (`src/modules/resume-print/`), which
renders entirely from `profile.ts` and is `noindex` + excluded from the sitemap.

Use `npm run preview`, **not** `npm run dev` — the dev server injects the Astro dev toolbar into
the page.

```sh
npm run build
npm run preview -- --port 4322    # leave running in another terminal
```

```powershell
& "C:\Program Files\Google\Chrome\Application\chrome.exe" --headless=new --disable-gpu `
  --no-pdf-header-footer `
  --print-to-pdf="D:\Dev.Work\simonaalinagrafu.github.io\public\cv.pdf" `
  "http://localhost:4322/resume-print/"
```

The `pdfBullets` field on a role caps how many bullets the PDF shows, so the Career page can
carry full detail while the PDF stays at two pages. Check the page count after regenerating.

### `public/og.png` — after any change to name, title, or URL

The 1200×630 link-preview card, screenshotted from `design/og-image.html` (which is a
standalone file, not part of the build):

```powershell
& "C:\Program Files\Google\Chrome\Application\chrome.exe" --headless=new --disable-gpu `
  --screenshot="D:\Dev.Work\simonaalinagrafu.github.io\public\og.png" `
  --window-size=1200,630 --hide-scrollbars `
  "D:\Dev.Work\simonaalinagrafu.github.io\design\og-image.html"
```

It pulls Space Grotesk and Inter from Google Fonts, so this needs a network connection.

### `public/favicon.svg`

Hand-edited SVG containing the `SAG` monogram. Keep it in sync with the hero monogram in
`src/modules/index/IndexPage.astro` and the ring in `design/og-image.html`.

---

## 7. Outstanding — placeholder data still to replace

The site was renamed from `vasilegrafu` / *Vasile Grafu* to `simonaalinagrafu` /
*Simona Alina Grafu*. The rename covered every URL, handle, title, monogram and generated asset,
but these carry over from the original and are **still wrong**:

- [ ] **LinkedIn URL** — `src/data/profile.ts` still has
      `https://www.linkedin.com/in/vasile-grafu-6a99369`. It is live on the Contact page, in the
      header, and printed into `cv.pdf`.
- [ ] **Phone** — `+40 722 635 785`, printed into `cv.pdf`.
- [ ] **Email** — mechanically renamed to `simonaalinagrafu@gmail.com`. Confirm that mailbox
      actually exists before publishing.
- [ ] **Biography** — all of `experience`, `skills`, `education` and `projects` in
      `src/data/profile.ts` describe Vasile Grafu's career (nShift, Consignor, TeamNet, Ubisoft).
      So does the `why-i-built-this-site` article and the home page hero copy.

After changing any of the first three, regenerate `cv.pdf` (§6).

---

## 8. Known rough edges

- **`README.md` is stale about articles.** It documents a Markdown/MDX content-collections
  workflow with `index.mdx` files. That does not exist. Articles are `.astro` components —
  metadata in `src/modules/articles/registry.ts`, body at
  `src/modules/articles/content/<id>/ArticlePart.astro`, resolved by convention via
  `import.meta.glob`. `ARCHITECTURE.md` describes it correctly.
- **`src/fx/components/FlowDiagramPart.astro` is unused.** Its only consumer was the Projects
  page, which has been removed. It is kept because `fx/` is the portable framework layer rather
  than site content — delete it if that layer is ever pruned.
- **`projects` is still exported from `profile.ts`** even though the Projects page is gone —
  `ResumePrintPage.astro` uses `projects[0]` for the PDF's "Key project" section. Do not delete it.
- **The Projects page was removed**; `/projects` now redirects to `/`, alongside the existing
  `/resume` → `/career` and `/ideas` → `/` redirects in `astro.config.mjs`.
- **No tests and no linter.** `npm run check` (type-checking) is the only automated gate, and it
  is the same gate CI runs.
