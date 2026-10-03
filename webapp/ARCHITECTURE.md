# Architecture

All paths are relative to `webapp/`. The site is a Vite + React 19 single-page app,
prerendered to static HTML at build time and hydrated in the browser. It was ported from
Astro in October 2026, keeping the same layers, naming, content and design.

## Layers

```
src/
├─ modules/            application layer
│  ├─ shared/          cross-module parts, BaseLayout, nav data, page metadata, hooks
│  ├─ index/ career/ skills/ contact/ resume-print/ version/ 404/
│  └─ …                one directory per page
├─ data/profile/       content layer — the site's facts, per locale
├─ i18n/               UI strings and page copy, per locale
├─ fx/                 framework layer — portable to any project
│  ├─ components/      fully prop-driven parts (no site content)
│  └─ lib/             pure functions (routing, locale paths, cx, fill, yearsOnly)
├─ styles/global.css   design system (token mapping + Tailwind recipes)
├─ themes/             design tokens — one CSS file per look + themes.ts registry
├─ routes.ts           central route manifest (URL → page id), plain data
├─ routeTree.tsx       route objects built from the manifest (lazy pages)
├─ router.tsx          the browser router
├─ prerender.tsx       build-time rendering of a route to HTML
└─ main.tsx            entry: fonts, global.css, hydrate or render
index.html             the page shell: site-wide head tags, pre-paint scripts
vite.config.ts         build constants, sitemap, 404 shell, redirect pages
scripts/prerender.ts   post-build step writing one HTML file per route into dist/
```

**Dependency rule: imports point downward only.**
Modules may use `shared`, `@fx`, `@data`, `@i18n`, `@themes`, and design classes.
`fx/` may import **nothing** above it — no profile data, no nav, no dictionaries,
no theme files (theme tokens reach it only as CSS variables at runtime). A part
in `fx/` that needs a word takes it as a prop.

Path aliases (`tsconfig.app.json`, mirrored in `vite.config.ts`): `@modules/*`,
`@fx/*`, `@data/*`, `@i18n/*`, `@themes/*`, `@styles/*`.

A few files are also read by `vite.config.ts`, which runs in Node without the
aliases: `routes.ts`, `fx/lib/i18n.ts`, `data/profile/shape.ts` and
`themes/themes.ts`. Their imports are relative and keep the `.ts` extension.

## Naming

- `XxxPage.tsx` — a page (registered in `routes.ts` + `routeTree.tsx`).
- `XxxPart.tsx` — a reusable component.
- `XxxLayout.tsx` — a layout (`modules/shared/BaseLayout.tsx`).
- `useXxx.ts` — a hook, in its own file (the `react-refresh` lint rule rejects
  files that export both components and non-components).
- A part used by one page lives in that page's module; used by several, in
  `modules/shared/`; usable by other projects, in `fx/components/`.

## Languages

The site is bilingual: **Romanian is the default and lives at the root**
(`/career`), English is prefixed (`/en/career`). One page component serves both
and reads its own locale from the URL through `useLocale()`:

```tsx
const { locale, s } = useLocale();                 // s = UI strings
const { site, experience } = getProfile(locale);   // content
```

`fx/lib/i18n.ts` holds the pure path helpers — `getLocale`, `localePath`,
`stripLocale`, `switchLocalePath`. `modules/shared/useLocale.ts` applies them to
the current URL and also returns `path` (no trailing slash) and `basePath` (the
path without its locale prefix, the same in every language).

**Nothing drifts, because the type system won't let it.** Translations are stored
as `Record<Locale, …>` and `Record<RoleId, …>`, so a missing language or a
missing entry is a type error — the `tsc -b` in `npm run build` is the CI gate
that catches it.

Adding a locale: add it to `locales` in `fx/lib/i18n.ts`, add `src/i18n/<code>.ts`
implementing `UiStrings`, add `src/data/profile/<code>.ts` implementing
`ProfileText`, register both in their dictionary maps, and add its sitemap tag to
`sitemapLang` in `vite.config.ts`. Every route doubles automatically; the compiler
lists whatever you still owe.

Two things stay single-language on purpose: the 404 page, because GitHub Pages
serves one `404.html` for every unmatched path (it carries both languages in its
body), and `design/og-image.html`. `/version` exists only at the root.

## Routing

`src/routes.ts` is the single list of URLs. It lists each page once, locale-free
— `path`, `page` id, whether it is in the sitemap, whether it renders `bare`
(outside the shell: the print CV, `/version`) — and expands it to one route per
locale. It has no React imports, so the build can read it too.
`src/routeTree.tsx` maps each page id to a `React.lazy` import and builds the
route objects, adding a catch-all `*` that renders the 404 page inside the shell;
`src/router.tsx` turns them into `createBrowserRouter` for the browser and
`src/prerender.tsx` into a static router for the build. Every page is its own
chunk.

Adding a page = new module directory + one entry in `pages` in `routes.ts` + one
lazy import in `routeTree.tsx`.

URLs have one form: **no trailing slash** (`/career`, `/en/career`, and `/en` for
the English home). Internal links use `<Link>` from React Router with that form;
`PageMetaPart` normalises the canonical URL to it whichever way the page was
reached. Both forms are served (see below), so a link to `/career/` still works.

Redirects: sections that once existed (`/resume` → `/career`, `/ideas`,
`/projects`, `/articles` → home) are listed once, locale-free, in `redirects` in
`routes.ts`. The build writes a small meta-refresh page for each, in every
locale. A path there must never also be a page.

## Head metadata

`modules/shared/PageMetaPart.tsx` renders, for every page: `<title>`,
description, canonical, the hreflang alternates for every locale plus
`x-default`, and `og:title` / `og:description` / `og:url` / `og:locale`. React 19
hoists them into `<head>`. With `noindex` (the print CV, the 404, `/version`) it
adds `robots: noindex` and leaves out the alternates. It also sets
`<html lang>` on client-side navigation.

Site-wide, page-independent tags (author, theme-color, icon, Open Graph image,
`og:type`, `og:site_name`, Twitter card) and the two pre-paint scripts live in
`index.html`.

## Prerendering and SEO

A plain SPA ships an empty `<div id="root">`, so crawlers and link-preview bots
that do not run JavaScript would see nothing, and GitHub Pages would answer
every deep link with its 404 page. The build closes that gap:

1. `vite build` bundles the app. The `static-site-files` plugin in
   `vite.config.ts` writes `sitemap.xml` (every page flagged `sitemap`, each with
   its language twins as `xhtml:link` alternates), copies `index.html` to
   `404.html`, and writes the redirect pages.
2. `scripts/prerender.ts` loads the app in Node through Vite, renders every
   route with React's static `prerender` and React Router's static handler, and
   writes the result into `dist/`: the page markup inside `#root`, the page's
   head tags in `<head>`, the right `<html lang>`, and preload links for the
   two fonts. Each path is written twice, `career.html` and
   `career/index.html`, so `/career` and `/career/` both answer with a 200.
   `prerender.tsx` passes `progressiveChunkSize: Infinity` — without it React
   moves any large Suspense boundary to a hidden block at the end of the body,
   and `<main>` would be empty to anything that does not run scripts.
3. In the browser, `main.tsx` hydrates the prerendered markup. `404.html` stays
   the empty shell, which renders from scratch.

**Hydration rule:** the first client render must match the prerendered HTML.
State that differs per visitor (the saved theme) goes through
`useSyncExternalStore` with a server snapshot (`useTheme.ts`), so the page
hydrates as rendered and then updates. Values that change over time are fixed
at build time instead of read at render: `__BUILD_YEAR__` (the footer and every
"N years" figure) and `__HAS_PORTRAIT__` (the hero), both defined in
`vite.config.ts` and declared in `src/env.d.ts`. Anything new that reads
`localStorage`, the window or the clock while rendering needs the same care.

`public/robots.txt` allows everything and points at `sitemap.xml`.

## Content

`src/data/profile/` splits the CV in two:

- `shape.ts` — what exists and in what order: role IDs, company names, icons,
  bullet-count flags (`pdfBullets`, `pdfItems`: how much the PDF shows), contact
  details, and the start dates the year counts come
  from (`salesStart`, `printStart`, `leadershipStart`). The same in every
  language. Its header names the document every entry comes from.
- `ro.ts` / `en.ts` — the prose, keyed by those IDs: per role a position,
  period, one-line `impact`, company lines, summary, bullets and `focus` chips.
- `index.ts` — `getProfile(locale)` merges the two; `tenure` and `yearsSince`
  turn the start dates into the figures every page shows.

A promotion inside one company is its own role (Everest has two), so each title
keeps its own dates and duties. Icons travel with the thing they describe rather
than in a parallel array, so they cannot fall out of step when the order
changes. A role's `impact` is the line a skimming reader takes away (Career page
only); its `focus` list is its areas of responsibility (chips on the Career
page, a "Focus" line on the PDF); `achievements[0]` is the "Key achievement" the
PDF prints.

**No figure is typed into a dictionary.** UI strings that need one are
templates — `'{sales} in sales'` — filled with `fill()` from `@fx/lib/fill`.
Counts go in as phrases from `s.years(n)`, because the grammar differs per
language: "26 years", but "11 ani" and "26 de ani" in Romanian.

The home page is a profile rather than a landing page, after vasilegrafu.github.io:
the current role as the heading with the tenure line under it, two paragraphs and
the CV as the main action; then the current scope as a labelled list, three
highlights, and the background and education lists generated from the profile
data, so they cannot drift from the Career page or the CV.

## Icons

Content files name icons as `'lucide:<kebab-name>'`. `fx/components/IconPart.tsx`
resolves those to `lucide-react` components from an explicit registry, so only
the icons in use are bundled. LinkedIn is drawn inline there as `'linkedin'`
(Lucide no longer ships brand icons). Adding an icon = one import + one registry
line.

## Styling ladder

1. **Tokens** (`src/themes/*.css`) — a theme is ~24 `--t-*` values; the token
   contract is documented in `themes/index.css`. `@theme inline` in
   `global.css` exposes them as utilities (`bg-bg`, `text-ink`, `text-accent`…).
   Never write a raw palette color (`slate-600`, `indigo-500`) in a component.
2. **Recipes** (`global.css` `@layer components`) — named classes for repeated
   patterns: `.title-*`, `.btn*`, `.card`, `.tag`, `.badge`, `.chip`,
   `.nav-pill`, `.menu-item`, `.pager-link`, `.icon-tile`, `.tip`, `.lede`, `.figure` (serif numeral),
   `.rule` (kicker on a hairline), `.band` (the accent panel), `.portrait`…
   Extract a recipe only when a pattern repeats or has a clear name.
3. **Inline utilities** — everything else, directly in the markup. Conditional
   classes go through `cx()` from `@fx/lib/cx`.
4. **`style=` attribute** — only for data-driven values Tailwind cannot know
   (e.g. `SegmentBarPart` widths, theme swatches, the masthead's slant).
5. **Component stylesheets — only one.** `modules/resume-print/resume-print.css`
   is deliberately theme-independent print CSS. Every rule in it is scoped
   under `.resume-print`: in a single-page app a stylesheet stays loaded after
   you navigate away, so an unscoped rule would restyle the rest of the site.

## Design voice

Warm editorial: paper grounds, one strong accent, aged-gold kickers as the
section device, a serif display face (Fraunces) over Inter, and hairlines
instead of boxes wherever a box is not doing work. Numerals are set in the
serif (`.figure`); the only filled accent surface is the closing `.band`.

The hero is built around a portrait (`fx/components/PortraitPart.tsx`).
`vite.config.ts` checks for `public/portrait.jpg` at build time
(`__HAS_PORTRAIT__`) and `IndexPage` passes it in; without the file, the frame
holds the space with initials.

## Themes

Three themes, one family: `cream` (the default and the brand), `forest` and
`marine` (alternate accent hues on the same paper). Every theme must pass
`npm run contrast` — a WCAG AA check over the text-bearing token pairs in
`src/themes/*.css`. The masthead is drawn in the same tokens, so it re-skins
with the rest of the site.

Adding a theme: create `src/themes/<name>.css` implementing the token
contract, import it in `themes/index.css`, add an entry in `themes.ts`, and add
its label to every `src/i18n/*.ts` (the `ThemeId` union makes that a type error
if you forget). It then appears in the header dropdown automatically. Selection
persists in `localStorage` (`useTheme`) and is applied pre-paint by the first
inline script in `index.html`; without a selection, cream is the default.
Removing a theme is safe: the build injects the registered ids into that script
(the `theme-ids` plugin in `vite.config.ts`), and it drops a stored id that is
no longer registered, so anyone who had picked it lands on cream rather than on
no theme at all.

`modules/shared/nav.ts` is the single list of pages, and four parts read it:
the desktop pills, the phone dropdown, the footer, and `PagerPart` — a
phone-only prev/next strip under the menu, so the site can be walked in order
without opening the dropdown each time. The pager finds its own position with
`isActive`, which means a page outside that list (the 404) simply renders no
pager, and the ends of the sequence stop rather than wrap. The phone dropdown
belongs to the page it was opened on, so any navigation closes it.

The language dropdown works differently on purpose: its items are real links, so
both trees stay crawlable. A chosen language is remembered and honoured only for
a later visit to the bare root (the second inline script in `index.html`) — deep
links always render the language they name.

## Generated files

`public/cv-ro.pdf` and `public/cv-en.pdf` are printed from the `/resume-print`
pages, and `public/og.png` from `design/og-image.html`. `public/favicon.svg` is
hand-written. The masthead banner above the navigation is `modules/shared/MastheadPart.tsx`,
composed from a right-anchored accent panel, an SVG bar mark and live HTML text, all in theme
tokens — the band's height and its type sizes are set per breakpoint rather than scaling with
the viewport, so the proportions hold at every width. `public/portrait.jpg` is *not* generated — it is the one asset
supplied by hand, and it is optional until it exists. None of them are rebuilt
by `npm run build`, so they go stale silently. Regenerate the CVs with
`npm run build && npm run cv`; see `SETUP.md` for the OG card.
