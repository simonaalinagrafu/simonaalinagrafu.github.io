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
| Google Chrome | any recent | **Only** needed to regenerate the CV PDFs and `og.png` (§6) |
| Python 3 | any | Not needed by the site; only used by ad-hoc maintenance one-liners |

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
npm run cv         # regenerate both CV PDFs (needs a build first)
npm run format     # prettier over src/
```

**Expected clean state:** `npm run check` → *0 errors, 0 warnings, 0 hints*;
`npm run build` → *11 page(s) built* (About, Career, Skills, Contact and the CV print page
in Romanian and English, plus `/404`, which is single-language) and **one warning line**
listing the placeholder entries (§7).

> If port 4321 is busy, Astro picks the next free port — or pass one explicitly:
> `npm run preview -- --port 4322`.

---

## 4. Deployment — configured and working ✅

Pages source is set to **GitHub Actions** and the pipeline has deployed successfully. Every
push to `main` rebuilds and publishes the site. (The earlier symptom — GitHub's built-in
Jekyll build rendering `README.md` — is gone; note that a run named `pages build and
deployment` still appears after each deploy, because `actions/deploy-pages` publishes its
artifact through one. That is normal, not a sign Jekyll is back.)

Verify after any deploy:

```sh
curl -s https://simonaalinagrafu.github.io | grep -o "<title>[^<]*</title>"
```

- ✅ correct: `<title>Simona Alina Grafu — Manager de Vânzări, B2B</title>` (Romanian root)
- ❌ Jekyll again: `<title>simonaalinagrafu.github.io | simonaalinagrafu</title>` — go to
  **repo → Settings → Pages → Source** and set it back to **GitHub Actions**

### If a deploy fails

- **"Refusing to build for deployment: … placeholder content"** — expected while §7 is not
  empty. That is the guard doing its job; replace the placeholders, don't override it.
- **A type error in `npm run check`** — the same gate you run locally; fix and push.
- Anything else, check one level up at **organization → Settings**, since the repo is owned by
  an organization: **Actions → General** (Actions permissions, workflow permissions) and
  **Pages** (who may publish, at what visibility).

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

## 5. Pushing

`.gitignore` already covers `node_modules/`, `dist/`, `.astro/`.

```sh
git add -A
git status          # confirm dist/ and node_modules/ are NOT staged
git commit -m "..."
git push origin main
```

Then watch the run under the repo's **Actions** tab. Remember that the generated files in
`public/` (§6) are committed, so regenerate them *before* committing a profile change.

---

## 6. Regenerating the binary assets

`public/cv-ro.pdf`, `public/cv-en.pdf` and `public/og.png` are **generated files** checked
into the repo. They are not rebuilt by `npm run build`, so they go stale silently whenever
the data behind them changes.

### The CV PDFs — after any edit to `src/data/profile/`

Both are printed from the `/resume-print/` and `/en/resume-print/` pages, which render
entirely from `src/data/profile/` and are `noindex` + excluded from the sitemap.

```sh
npm run build
npm run cv
```

`scripts/print-cv.mjs` starts `astro preview`, prints both PDFs with headless Chrome, and
shuts the server down. It uses `preview` rather than `dev` deliberately — the dev server
injects the Astro dev toolbar into the page. Set `CHROME_PATH` if Chrome is not at one of
the default locations.

Both CVs currently run to **three pages**. If you want them at two, the `pdfBullets` field
on a role caps how many bullets the PDF shows while the Career page keeps full detail; note
Romanian prose runs a little longer than English, so the two locales may need different
caps.

### `public/og.png` — after any change to name, title, or URL

The 1200x630 link-preview card, screenshotted from `design/og-image.html` (a standalone
file, not part of the build). It is single-language by design.

```powershell
& "C:\Program Files\Google\Chrome\Application\chrome.exe" --headless=new --disable-gpu `
  --screenshot="D:\Dev.Work\simonaalinagrafu.github.io\public\og.png" `
  --window-size=1200,630 --hide-scrollbars `
  "D:\Dev.Work\simonaalinagrafu.github.io\design\og-image.html"
```

It pulls Space Grotesk and Inter from Google Fonts, so this needs a network connection.

### `public/favicon.svg`

Hand-edited SVG containing the `SAG` monogram. Keep it in sync with the hero monogram
(derived from the name in `IndexPage.astro`) and the ring in `design/og-image.html`.

## 7. Outstanding — placeholder content to replace before deploying

The site now describes **Simona Alina Grafu, Sales Manager at Tipografia Everest**. Only
that one fact was supplied; everything below is an imagined-but-plausible stand-in for a
20-year B2B sales career, waiting for her real CV. Nothing invented uses a figure — the only
number on the site is "20+ years".

**Do not push until this list is empty.** `src/data/profile/index.ts` refuses to build under
CI while any `placeholder: true` remains (§8), and the live site still shows the previous
owner's biography until the first deploy after review.

Each item names where to edit: text in `src/data/profile/ro.ts` and `en.ts`, structure
(company name, dates, the `placeholder` flag) in `src/data/profile/shape.ts`.

- [ ] **Tipografia Everest — dates.** `2013 – Prezent` is a guess. Real role too, so no
      placeholder flag; just fix the years in both text files.
- [ ] **Role `team-lead`** — `[Distribuitor industrial]`, 2009–2013, Sales Team Lead.
      Invented employer and dates; prose is generic.
- [ ] **Role `key-account`** — `[Furnizor de servicii B2B]`, 2006–2009, Key Account Manager.
- [ ] **Role `sales-rep`** — `[Companie de distribuție]`, 2004–2006, B2B Sales Representative.
- [ ] **Education `degree`** — `[Universitate]`, 2000–2004, Licență în Marketing / Economie.
- [ ] **Achievements** `portfolio`, `team`, `accounts-system` — all imagined. The first one
      prints on the CV as "Key achievement". Replace with real wins, ideally with figures.
- [ ] **Career ribbon** — the `eras` array in `src/modules/career/CareerPage.astro` repeats
      the same bracketed names and year spans; update it alongside the roles.
- [ ] **Home stats and CV highlights** — `home.stats` and `resume.highlights` in
      `src/i18n/ro.ts` / `en.ts` are deliberately qualitative. Add real figures (team size,
      portfolio size, growth) when known.
- [ ] **LinkedIn URL** — `src/data/profile/shape.ts` still has
      `https://www.linkedin.com/in/vasile-grafu-6a99369`. It is live on the Contact page, in the
      header, and printed into both CV PDFs.
- [ ] **Phone** — `+40 722 635 785`, printed into both CV PDFs.
- [ ] **Email** — mechanically renamed to `simonaalinagrafu@gmail.com`. Confirm that mailbox
      actually exists.
- [ ] **GitHub link** — header and footer still link to `github.com/simonaalinagrafu`. Keep or
      remove depending on whether she wants a GitHub presence.
- [ ] **Romanian translation** — drafted by Claude and not yet reviewed by a native speaker.
      Two conventions, easy to reverse: English job titles where they are the market norm
      (Key Account Manager), and gender-neutral prose (Romanian agrees adjectives with
      gender). If she prefers explicitly feminine wording, it is one pass over the two `ro.ts`
      files.

After changing any of these, regenerate both CV PDFs (§6), then delete the `placeholder: true`
line from each entry you have confirmed.

---

## 8. Known rough edges

- **The placeholder guard.** `getProfile()` in `src/data/profile/index.ts` throws when
  `process.env.CI` is set and any placeholder remains. GitHub Actions sets `CI=true`, so a
  push with placeholders fails at the build step rather than deploying invented content.
  `PLACEHOLDERS_OK=1` overrides it deliberately. Delete the guard once the list in §7 is
  empty — it has no purpose after that.
- **`src/fx/components/FlowDiagramPart.astro` is unused.** Its only consumer was the
  Projects page, which has been removed. It is kept because `fx/` is the portable framework
  layer rather than site content — delete it if that layer is ever pruned.
- **Removed sections redirect.** `/projects`, `/articles` and `/ideas` (and their `/en/`
  twins) redirect to their locale's home, alongside `/resume` → `/career`.
- **Redirects are not locale-expanded automatically.** Adding one means adding its `/en/…`
  counterpart by hand in `astro.config.mjs`. Never inject a route for a path that also has
  a redirect — Astro treats the duplicate as an error.
- **`/404` is single-language.** GitHub Pages serves one `404.html` for every unmatched
  path, in either language, so that page carries Romanian and English together.
- **No tests and no linter.** `npm run check` is the only automated gate, and it is the same
  gate CI runs. It is load-bearing here: translations are typed as `Record<Locale, ...>`, so
  a missing translation is a type error rather than a half-English page.
