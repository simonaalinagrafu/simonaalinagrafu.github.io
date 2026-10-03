# simonaalinagrafu.github.io

Personal website of **Simona Alina Grafu** — Sales Manager, B2B sales, team leadership.

Live at **https://simonaalinagrafu.github.io**

Bilingual: Romanian at the root, English under `/en/`. Four pages: About, Career, Skills,
Contact.

## Stack

- [Vite](https://vite.dev) + [React 19](https://react.dev) + TypeScript — a single-page app,
  prerendered to static HTML at build time so every page is real HTML for crawlers and link
  previews
- [React Router](https://reactrouter.com) — client-side routing
- [Tailwind CSS v4](https://tailwindcss.com) — styling, with a themeable token layer
- [Lucide](https://lucide.dev) — icons
- Deployed to GitHub Pages via GitHub Actions on every push to `main`

The whole site lives in **`webapp/`**; only this README, `.gitignore` and the
deploy workflow (`.github/workflows/deploy.yml`, which GitHub requires at the repo root) sit
outside it. Paths below are relative to `webapp/`.

See `webapp/ARCHITECTURE.md` for how the code is laid out and `webapp/SETUP.md` for
first-time setup and the list of what is still unconfirmed.

## Development

Requires **Node.js 24**, the same major the deploy workflow uses.

```sh
cd webapp
npm ci
npm run dev      # dev server with hot reload at http://localhost:5173
npm run build    # tsc -b, vite build, then prerender every route into ./dist
npm run preview  # serve ./dist at http://localhost:4173 — what GitHub Pages will serve
npm run lint     # eslint
npm run check    # type-check only (the build runs it too)
npm run cv       # regenerate both CV PDFs (after npm run build)
npm run contrast # WCAG AA check over every theme's tokens
```

Before pushing, run `npm run lint && npm run build` — the deploy workflow runs the same two
steps and does not deploy if either fails.

## Version

`version.json` (in `webapp/`) holds the site's version. It is published, as written, at
**https://simonaalinagrafu.github.io/version** — bump it with a change and that page shows
whether the deploy is live. The page is noindex and left out of the sitemap.

## Updating the profile

Everything about Simona lives in `src/data/profile/`:

- `shape.ts` — structure that is the same in every language: role IDs, company names,
  icons, and the start dates every "N years" figure is counted from
- `ro.ts` / `en.ts` — the prose for each language, keyed by those IDs
- `index.ts` — `getProfile(locale)`, which merges the two, plus the derived `tenure` figures

It feeds the About, Career and Skills pages and two print-optimized pages at
`/resume-print` and `/en/resume-print` (excluded from the sitemap and marked noindex).

The downloadable PDFs at `public/cv-ro.pdf` and `public/cv-en.pdf` are printed from those
pages. **They are not rebuilt by `npm run build`** — regenerate them after editing the
profile:

```sh
npm run build
npm run cv
```

That prints both, using `vite preview` and headless Chrome. Set `CHROME_PATH` if your
browser is not in the default location.

### Portrait

The home page hero is built around a photo. Save it as **`public/portrait.jpg`** — JPEG,
portrait orientation 4:5, at least 900×1125 — and rebuild. Until the file exists the frame
shows her initials instead, so nothing else on the page moves when the photo arrives.

### Where the content comes from

Every role traces to a document: her own CVs of 2003 for 1997–2002, and her Tipografia
Everest job descriptions and 2015 contract addendum for 2012 to today. They are transcribed
as Markdown next to the scans in `simonaalinagrafu.github.io__data_source/`, a folder beside
this repository and deliberately outside it — the originals carry a home address and a date
of birth. Job titles are the ones those documents give, and no figure is typed in by hand:
years are counted from the start dates in `shape.ts`. What is still unconfirmed is listed in
`webapp/SETUP.md` §7.

## Adding a language

1. Add the code to `locales` in `src/fx/lib/i18n.ts`.
2. Add `src/i18n/<code>.ts` implementing `UiStrings`, and register it in `src/i18n/index.ts`.
3. Add `src/data/profile/<code>.ts` implementing `ProfileText`, and register it in
   `src/data/profile/index.ts`.
4. Add its region-qualified tag to `sitemapLang` in `vite.config.ts`.

Every route doubles automatically. `npm run check` lists whatever is still missing.
