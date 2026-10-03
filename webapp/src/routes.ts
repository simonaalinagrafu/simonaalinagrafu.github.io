// Central route manifest — the single place where URLs map to page modules.
// Consumed by the `central-routes` integration in astro.config.mjs.
//
// Every page is emitted once per locale: Romanian at the root (/career) and
// English under a prefix (/en/career). Both patterns point at the same page
// component, which reads its locale from Astro.url.pathname.
import { locales, localePath, type Locale } from './fx/lib/i18n';

export interface RouteDef {
  pattern: string;
  entrypoint: string;
}

interface PageDef {
  path: string;
  entrypoint: string;
  /** Locales this page is emitted for. Defaults to all of them. */
  locales?: readonly Locale[];
}

const pages: PageDef[] = [
  { path: '/', entrypoint: './src/modules/index/IndexPage.astro' },
  { path: '/career', entrypoint: './src/modules/career/CareerPage.astro' },
  { path: '/skills', entrypoint: './src/modules/skills/SkillsPage.astro' },
  { path: '/contact', entrypoint: './src/modules/contact/ContactPage.astro' },
  { path: '/resume-print', entrypoint: './src/modules/resume-print/ResumePrintPage.astro' },
  // GitHub Pages serves one /404.html for every unmatched path, so this page
  // cannot be per-locale — it carries both languages instead.
  { path: '/404', entrypoint: './src/modules/404/NotFoundPage.astro', locales: ['ro'] },
];

/** Patterns carry no trailing slash; only the root is bare. */
const toPattern = (path: string) => (path !== '/' && path.endsWith('/') ? path.slice(0, -1) : path);

export const routes: RouteDef[] = pages.flatMap((page) =>
  (page.locales ?? locales).map((locale) => ({
    pattern: toPattern(localePath(locale, page.path)),
    entrypoint: page.entrypoint,
  })),
);
