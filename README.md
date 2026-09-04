# simonaalinagrafu.github.io

Personal website of **Simona Alina Grafu** — Engineering Manager, Solutions Architect,
Enterprise & AI Systems.

Live at **https://simonaalinagrafu.github.io**

Bilingual: Romanian at the root, English under `/en/`.

## Stack

- [Astro](https://astro.build) — static site generator
- [Tailwind CSS v4](https://tailwindcss.com) — styling
- Deployed to GitHub Pages via GitHub Actions on every push to `main`

See `ARCHITECTURE.md` for how the code is laid out and `SETUP.md` for first-time setup.

## Development

```sh
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build to ./dist
npm run preview  # preview the production build
npm run check    # type-check — also the CI gate
npm run cv       # regenerate both CV PDFs (after npm run build)
```

## Adding an article

Create a directory in `src/modules/articles/content/` named after the URL slug, with one
body per language:

```
src/modules/articles/content/my-article/
  ArticlePart.ro.astro   ← Romanian body (plain HTML + any local components)
  ArticlePart.en.astro   ← English body
  Chart.astro            ← optional rich content local to this article
  demo.ts                ← components, TypeScript, videos, audio — anything
```

Both languages are required; the build fails with a message naming the missing file.

Then register it in `src/modules/articles/registry.ts`:

```ts
{
  id: 'my-article',
  pubDate: new Date('2026-09-15'),
  tags: ['ai', 'leadership'],
  text: {
    ro: { title: 'Titlul articolului', description: 'Un rezumat de o frază.' },
    en: { title: 'Article title', description: 'One-line summary.' },
  },
}
```

Push to `main` and GitHub Actions rebuilds and deploys the site automatically.

## Updating the resume

Profile data lives in `src/data/profile/`:

- `shape.ts` — structure that is the same in every language (companies, tech, icons)
- `ro.ts` / `en.ts` — the prose for each language
- `index.ts` — `getProfile(locale)`

It feeds the Career page plus two print-optimized pages at `/resume-print/` and
`/en/resume-print/` (excluded from the sitemap and marked noindex).

The downloadable PDFs at `public/cv-ro.pdf` and `public/cv-en.pdf` are printed from those
pages. **They are not rebuilt by `npm run build`** — regenerate them after editing the
profile:

```sh
npm run build
npm run cv
```

That prints both, using `astro preview` and headless Chrome. Set `CHROME_PATH` if your
browser is not in the default location.

## Adding a language

1. Add the code to `locales` in `src/fx/lib/i18n.ts`.
2. Add `src/i18n/<code>.ts` implementing `UiStrings`, and register it in `src/i18n/index.ts`.
3. Add `src/data/profile/<code>.ts` implementing `ProfileText`, and register it in
   `src/data/profile/index.ts`.
4. Add an `ArticlePart.<code>.astro` for every article.
5. Add the locale to the sitemap `i18n` option in `astro.config.mjs`.

Every route doubles automatically. `npm run check` lists whatever is still missing.
