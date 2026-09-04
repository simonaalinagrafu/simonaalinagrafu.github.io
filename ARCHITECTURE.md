# Architecture

## Layers

```
src/
├─ modules/            application layer
│  ├─ shared/          cross-module parts, BaseLayout, nav data
│  ├─ index/ career/ skills/ contact/ resume-print/ 404/
│  └─ …                one directory per page
├─ data/profile/       content layer — the site's facts, per locale
├─ i18n/               UI strings and page copy, per locale
├─ fx/                 framework layer — portable to any project
│  ├─ components/      fully prop/slot-driven parts (no site content)
│  └─ lib/             pure functions (routing, locale paths)
├─ styles/global.css   design system (token mapping + Tailwind recipes)
├─ themes/             design tokens — one CSS file per look + themes.ts registry
├─ routes.ts           central route manifest (URL → page module)
└─ icons/              custom SVG icons for astro-icon (Lucide comes from npm)
```

**Dependency rule: imports point downward only.**
Modules may use `shared`, `@fx`, `@data`, `@i18n`, `@themes`, and design classes.
`fx/` may import **nothing** above it — no profile data, no nav, no dictionaries,
no theme files (theme tokens reach it only as CSS variables at runtime). A part
in `fx/` that needs a word takes it as a prop.

Path aliases (tsconfig): `@modules/*`, `@fx/*`, `@data/*`, `@i18n/*`, `@themes/*`,
`@styles/*`.

## Naming

- `XxxPage.astro` — a page (registered in `src/routes.ts`).
- `XxxPart.astro` — a reusable component.
- `XxxLayout.astro` — a layout (`modules/shared/BaseLayout.astro`).
- A part used by one page lives in that page's module; used by several, in
  `modules/shared/`; usable by other projects, in `fx/components/`.

## Languages

The site is bilingual: **Romanian is the default and lives at the root**
(`/career`), English is prefixed (`/en/career`). One page component serves both
and reads its own locale from the URL:

```astro
const locale = getLocale(Astro.url.pathname);
const s = t(locale);                    // UI strings
const { site, experience } = getProfile(locale);   // content
```

`fx/lib/i18n.ts` holds the pure path helpers — `getLocale`, `localePath`,
`stripLocale`, `switchLocalePath`. Astro's built-in `i18n` config is deliberately
**not** used: with `prefixDefaultLocale: false` it generates no routes anyway,
and it would force trailing slashes onto every href.

**Nothing drifts, because the type system won't let it.** Translations are stored
as `Record<Locale, …>` and `Record<RoleId, …>`, so a missing language or a
missing entry is a type error — `npm run check` is the CI gate that catches it.

Adding a locale: add it to `locales` in `fx/lib/i18n.ts`, add `src/i18n/<code>.ts`
implementing `UiStrings`, add `src/data/profile/<code>.ts` implementing
`ProfileText`, and register it in the two dictionary maps. Every page doubles
automatically; the compiler lists whatever you still owe.

Two things stay single-language on purpose: `/404`, because GitHub Pages serves
one `404.html` for every unmatched path (it carries both languages in its body),
and `design/og-image.html`.

## Routing

There is no `src/pages/`. `src/routes.ts` lists each page once, locale-free, and
emits one route per locale; the `central-routes` integration in
`astro.config.mjs` injects them. Two patterns pointing at one entrypoint is a
supported Astro shape — collision detection compares patterns, not components.

Adding a page = new module directory + one line in `routes.ts`.

Redirects are **not** locale-expanded automatically — add the `/en/…` counterpart
by hand in `astro.config.mjs`, and never inject a path that also has a redirect
(duplicate routes are an error). Removed sections (`/projects`, `/articles`,
`/ideas`) redirect to their locale's home.

## Content

`src/data/profile/` splits the CV in two:

- `shape.ts` — what exists and in what order: role IDs, company names, focus
  areas, icons, bullet-count flags, contact details. The same in every language.
  Entries that are not yet confirmed carry `placeholder: true`.
- `ro.ts` / `en.ts` — the prose, keyed by those IDs.
- `index.ts` — `getProfile(locale)` merges the two, and guards the placeholders:
  a warning locally, a hard failure under `CI` (override: `PLACEHOLDERS_OK=1`).

Icons travel with the thing they describe rather than in a parallel array, so
they cannot fall out of step when the order changes. A role's `focus` list is
its areas of responsibility (chips on the Career page, a "Focus" line on the
PDF); `achievements[0]` is the "Key achievement" the PDF prints.

## Styling ladder

1. **Tokens** (`src/themes/*.css`) — a theme is ~24 `--t-*` values; the token
   contract is documented in `themes/index.css`. `@theme inline` in
   `global.css` exposes them as utilities (`bg-bg`, `text-ink`, `text-accent`…).
   Never write a raw palette color (`slate-600`, `indigo-500`) in a component.
2. **Recipes** (`global.css` `@layer components`) — named classes for repeated
   patterns: `.title-*`, `.btn*`, `.card`, `.tag`, `.badge`, `.chip`,
   `.nav-pill`, `.menu-item`, `.icon-tile`, `.tip`, `.lede`, `.figure` (serif numeral),
   `.rule` (kicker on a hairline), `.band` (the accent panel), `.portrait`…
   Extract a recipe only when a pattern repeats or has a clear name.
3. **Inline utilities** — everything else, directly in the markup.
4. **`style=` attribute** — only for data-driven values Tailwind cannot know
   (e.g. `SegmentBarPart` widths, theme swatches).
5. **`<style>` blocks in components — never.** The one non-Tailwind stylesheet
   is `modules/resume-print/resume-print.css` (the PDF is deliberately
   theme-independent print CSS).

## Design voice

Warm editorial: paper grounds, one strong accent, aged-gold kickers as the
section device, a serif display face (Fraunces) over Inter, and hairlines
instead of boxes wherever a box is not doing work. Numerals are set in the
serif (`.figure`); the only filled accent surface is the closing `.band`.

The hero is built around a portrait (`fx/components/PortraitPart.astro`).
`IndexPage` checks for `public/portrait.jpg` at build time and passes it in;
without the file, the frame holds the space with initials.

## Themes

Four themes, one family: `cream` (the default and the brand), `night` (the
brand after dark), `forest` and `marine` (alternate accent hues on the same
paper). Every theme must pass `npm run contrast` — a WCAG AA check over the
text-bearing token pairs in `src/themes/*.css`.

Adding a theme: create `src/themes/<name>.css` implementing the token
contract, import it in `themes/index.css`, add an entry in `themes.ts`, and add
its label to every `src/i18n/*.ts` (the `ThemeId` union makes that a type error
if you forget). It then appears in the header dropdown automatically. Selection
persists in `localStorage` and is applied pre-paint in `BaseLayout`'s head
script; without a selection, cream is the default.

The language dropdown works differently on purpose: its items are real links, so
switching needs no JavaScript and both trees stay crawlable. A chosen language is
remembered and honoured only for a later visit to the bare root — deep links
always render the language they name.

## Generated files

`public/cv-ro.pdf` and `public/cv-en.pdf` are printed from the `/resume-print/`
pages, and `public/og.png` from `design/og-image.html`. `public/favicon.svg` is
hand-written. `public/portrait.jpg` is *not* generated — it is the one asset
supplied by hand, and it is optional until it exists. None of them are rebuilt
by `npm run build`, so they go stale silently. Regenerate the CVs with
`npm run build && npm run cv`; see `SETUP.md` for the OG card.
