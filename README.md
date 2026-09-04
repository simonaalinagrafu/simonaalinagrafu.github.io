# simonaalinagrafu.github.io

Personal website of **Simona Alina Grafu** — Sales Manager, B2B sales, team leadership.

Live at **https://simonaalinagrafu.github.io**

Bilingual: Romanian at the root, English under `/en/`. Four pages: About, Career, Skills,
Contact.

## Stack

- [Astro](https://astro.build) — static site generator
- [Tailwind CSS v4](https://tailwindcss.com) — styling
- Deployed to GitHub Pages via GitHub Actions on every push to `main`

See `ARCHITECTURE.md` for how the code is laid out and `SETUP.md` for first-time setup and
the list of content that is still placeholder.

## Development

```sh
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build to ./dist
npm run preview  # preview the production build
npm run check    # type-check — also the CI gate
npm run cv       # regenerate both CV PDFs (after npm run build)
```

## Updating the profile

Everything about Simona lives in `src/data/profile/`:

- `shape.ts` — structure that is the same in every language: role IDs, company names,
  focus areas, icons, and the `placeholder: true` marker on entries that are not yet real
- `ro.ts` / `en.ts` — the prose for each language, keyed by those IDs
- `index.ts` — `getProfile(locale)`, plus the placeholder guard (below)

It feeds the About, Career and Skills pages and two print-optimized pages at
`/resume-print/` and `/en/resume-print/` (excluded from the sitemap and marked noindex).

The downloadable PDFs at `public/cv-ro.pdf` and `public/cv-en.pdf` are printed from those
pages. **They are not rebuilt by `npm run build`** — regenerate them after editing the
profile:

```sh
npm run build
npm run cv
```

That prints both, using `astro preview` and headless Chrome. Set `CHROME_PATH` if your
browser is not in the default location.

### Placeholder content

Entries marked `placeholder: true` in `shape.ts` are imagined stand-ins waiting for the real
CV. `npm run build` prints one warning line listing them. **Under CI the build refuses to
run** while any remain, so they cannot be deployed by accident; `PLACEHOLDERS_OK=1`
overrides that deliberately. To replace one: edit its text in `ro.ts` and `en.ts`, fix the
company or school name in `shape.ts`, and delete the `placeholder: true` line.

## Adding a language

1. Add the code to `locales` in `src/fx/lib/i18n.ts`.
2. Add `src/i18n/<code>.ts` implementing `UiStrings`, and register it in `src/i18n/index.ts`.
3. Add `src/data/profile/<code>.ts` implementing `ProfileText`, and register it in
   `src/data/profile/index.ts`.
4. Add the locale to the sitemap `i18n` option in `astro.config.mjs`.

Every route doubles automatically. `npm run check` lists whatever is still missing.
