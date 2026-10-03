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
| Stack | Vite 8 + React 19 + React Router 8 + TypeScript 6 + Tailwind CSS v4 — a single-page app, prerendered to static HTML at build time |
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
| Node.js | v24.18.1 | Node 24, the same major CI uses. The build runs `scripts/prerender.ts` with plain `node`, which relies on Node's built-in TypeScript support |
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
cd simonaalinagrafu.github.io/webapp
npm ci
```

Then:

```sh
npm run dev        # dev server with hot reload at http://localhost:5173
npm run lint       # eslint — a CI gate
npm run check      # tsc -b — type-check only (the build runs it too)
npm run build      # tsc -b, vite build, then prerender every route into ./dist
npm run preview    # serve ./dist at http://localhost:4173, to see exactly what deploys
npm run cv         # regenerate both CV PDFs (needs a build first)
npm run contrast   # WCAG AA check over every theme's tokens
npm run format     # prettier over src/
```

**Expected clean state:** `npm run lint` prints nothing; `npm run build` ends with
**11 `prerendered` lines** (Home, Career, Skills, Contact and the CV print page in Romanian
and English, plus `/version`). The 404 is not prerendered: `dist/404.html` is the bare app shell, and the page renders
in the browser.

The dev server serves the app only. The prerendered HTML, `sitemap.xml`, `404.html` and the
redirect pages come from the build, so use `build` + `preview` to check what GitHub Pages will
actually serve. (Unknown URLs behave differently there: `preview` answers them with the home
page, GitHub Pages with `404.html`.)

> If a port is busy, Vite picks the next free one — or pass one explicitly:
> `npm run preview -- --port 4322`.

---

## 4. Deployment — configured ✅

Every push to `main` builds and publishes the site through `.github/workflows/deploy.yml`
(at the repo root, one level above this `webapp/` folder, where GitHub requires it to be).
The repo's Pages source is set to **GitHub Actions** (repo → Settings → Pages → Build and
deployment → Source). Before that was set, GitHub also ran its legacy Jekyll build on every
push — a red `pages build and deployment` run beside the green one, failing harmlessly. If
that run ever reappears, the source has been switched back to *branch*; set it to
**GitHub Actions** again.

Verify after any deploy:

```sh
curl -s https://simonaalinagrafu.github.io | grep -o "<title>[^<]*</title>"
```

- ✅ correct: `<title>Simona Alina Grafu — Manager de Vânzări, B2B</title>` (Romanian root)
- ❌ Jekyll took over: `<title>simonaalinagrafu.github.io | simonaalinagrafu</title>` — set the
  source to **GitHub Actions** as above.

### If a deploy fails

- **A lint error, or a type error in the build** — the same gates you run locally
  (`npm run lint`, `npm run build`); fix and push.
- Anything else, check one level up at **organization → Settings**, since the repo is owned by
  an organization: **Actions → General** (Actions permissions, workflow permissions) and
  **Pages** (who may publish, at what visibility).

### How the pipeline works

`.github/workflows/deploy.yml`, triggered on push to `main` and via `workflow_dispatch`:

- **build** — checkout → Node 24 (with the npm cache) → `npm ci` → `npm run lint` →
  `npm run build`, all inside `webapp/`. A lint or type error fails the run and nothing
  deploys. Then `actions/configure-pages` and `actions/upload-pages-artifact` package
  `webapp/dist` as the Pages artifact.
- **deploy** — `actions/deploy-pages@v5` publishes that artifact to the `github-pages`
  environment.

The build output is never committed; `dist/` exists only on the runner and on your machine.

---

## 5. Pushing

`.gitignore` already covers `node_modules/` and `dist/`.

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

Both are printed from the `/resume-print` and `/en/resume-print` pages, which render
entirely from `src/data/profile/`, outside the site shell, and are `noindex` + excluded from
the sitemap.

```sh
npm run build
npm run cv
```

`scripts/print-cv.mjs` starts `vite preview` on port 4322, prints both PDFs with headless
Chrome, and shuts the server down. It prints the built, prerendered pages rather than the dev
server's, so the PDF is exactly what the build produced. Set `CHROME_PATH` if Chrome is not at
one of the default locations.

Both CVs run to **three pages**, and Romanian, which runs longer, fills the third almost to
the end. Check the page count after every profile change. Two levers keep it there: the
`pdfBullets` field on a role caps how many bullets the PDF shows while the Career page keeps
full detail (both Everest roles show 4), and any role with more than three bullets may break
across a page (`ResumePrintPage.tsx`).

### `public/og.png` — after any change to name, title, or URL

The 1200x630 link-preview card, screenshotted from `design/og-image.html` (a standalone
file, not part of the build). It is single-language by design.

```powershell
& "C:\Program Files\Google\Chrome\Application\chrome.exe" --headless=new --disable-gpu `
  --screenshot="D:\Dev.Work\simonaalinagrafu.github.io\webapp\public\og.png" `
  --window-size=1200,630 --hide-scrollbars `
  "D:\Dev.Work\simonaalinagrafu.github.io\webapp\design\og-image.html"
```

It pulls Fraunces and Inter from Google Fonts, so this needs a network connection.

### The masthead

`src/modules/shared/MastheadPart.tsx` — the supplied banner, shown above the navigation on
every page and at every width. It is composed, not one scalable picture: the accent panel is a
right-anchored block with a constant 28 px slant, the bar mark an SVG sized as a fraction of the
band, and the name and title real HTML text. That is deliberate — as a single SVG the type
scaled with the viewport, so by 768 px the name was 31 px in a 96 px band. Band height and both
type sizes are now set per breakpoint (76 → 176 px tall), so the proportions hold from a phone
to a wide desktop.

Its colours are `--t-*` tokens, so it follows the theme picker; `--t-mark` exists for the gold
bar alone, because the label gold is a text colour and reads as olive on the accent panel. Its
text is live, from `siteFacts.name` and the localized `site.titleShort`. To change the artwork,
edit that file; to change the sizes, edit the breakpoint classes in it.

### `public/favicon.svg`

Hand-written SVG: a burgundy rounded square with a single serif **S** in cream. One letter
reads at 16 px where three did not.

### `public/portrait.jpg` — the one asset supplied by hand

The home hero is designed around a portrait. Save the photo as `public/portrait.jpg`
(JPEG, 4:5 portrait orientation, ≥ 900×1125 px) and rebuild; `vite.config.ts` detects the
file at build time (`__HAS_PORTRAIT__`). Until it exists the frame shows her initials on a warm block, at the same
size, so the layout is identical before and after.

## 7. Outstanding — what is still drafted or unconfirmed

The career is now **sourced from her own documents**, transcribed as Markdown next to the
scans in `simonaalinagrafu.github.io__data_source/` — a folder beside this repository and
deliberately outside it, because the originals carry a home address and a date of birth:

- **1997–2002** (Euromobex, Delta Distribution, Neweuropetrolgaz, Rodata) — her CVs of 2003,
  in Romanian and English;
- **Tipografia Everest** — the job descriptions for *Reprezentant comercial* (from February
  2012) and *Șef Birou Vânzări* (from April 2015), and the contract addendum that made the
  change.

Job titles are the ones those documents give. Nothing on the site is imagined any more, so
the placeholder guard and its CI override are gone. What remains:

- [ ] **RH Printing (2003–2012)** — title and dates from her LinkedIn; the `summary` and
      `bullets` are drafted to fit the title and await her wording. No document in the data
      source covers these years.
- [ ] **LinkedIn** — her headline says *Account Manager*; the site now says *Head of Sales
      Office* (2015–) and *Sales Representative* (2012–2015), as her documents do. Updating
      LinkedIn would make the two agree — a recruiter will see both.
- [ ] **Figures** — the CV's "Key achievement" is the documented 2015 promotion. Real numbers
      (agents coordinated, portfolio size, volumes) would strengthen it and the Everest roles.
- [ ] **Journalism degree** (University of Bucharest, 2010–2012) — from LinkedIn only.
- [ ] **Email** — `simonaalinagrafu@gmail.com` was derived from the site name. Confirm the
      mailbox exists; it is on the Contact page, in the footer and on both CVs.
- [ ] **Romanian translation** — not yet reviewed by a native speaker. Two conventions, easy
      to reverse: job titles exactly as her documents give them, and gender-neutral prose
      (Romanian agrees adjectives with gender). If she prefers explicitly feminine wording,
      it is one pass over the two `ro.ts` files.

After changing any of these, regenerate both CV PDFs (§6).

---

## 8. Known rough edges

- **Removed sections redirect.** `/projects`, `/articles` and `/ideas` redirect to their
  locale's home, alongside `/resume` → `/career`. They are listed once, locale-free, in
  `redirects` in `src/routes.ts`; the build writes a small redirect page for each, in every
  locale. A path there must never also be a page.
- **`/404` is single-language.** GitHub Pages serves one `404.html` for every unmatched
  path, in either language, so that page carries Romanian and English together. It is the
  bare app shell; the page renders in the browser.
- **No tests.** `npm run lint` and the `tsc -b` inside `npm run build` are the automated
  gates, the same ones CI runs. The type check is load-bearing here: translations are typed
  as `Record<Locale, ...>`, so a missing translation is a type error rather than a
  half-English page.
