// Central route manifest — plain data, no React. routeTree.tsx turns it into
// route objects; the build reads it for sitemap.xml, the redirect pages and
// prerendering. Adding a page = new module directory + one entry in `pages`
// + one lazy import in routeTree.tsx.
// (Imports keep their extension so vite.config.ts can load this file too.)
//
// Every page is emitted once per locale: Romanian at the root (/career) and
// English under a prefix (/en/career). Both routes render the same page
// component, which reads its locale from the URL (useLocale).
import { localePath, locales, type Locale } from './fx/lib/i18n.ts';

export type PageId =
  'index' | 'career' | 'skills' | 'contact' | 'resume-print' | 'version' | 'not-found';

interface PageDef {
  /** Locale-free path, no trailing slash. */
  path: string;
  page: PageId;
  /** Listed in sitemap.xml, with its other-language twins as alternates. */
  sitemap: boolean;
  /** Rendered without the site shell (masthead, header, footer). */
  bare?: boolean;
  /** Locales this page is emitted for. Defaults to all of them. */
  locales?: readonly Locale[];
}

export interface RouteDef {
  /** The URL, locale prefix included. */
  path: string;
  /** The same page with the locale prefix removed — shared by its twins. */
  basePath: string;
  locale: Locale;
  page: PageId;
  sitemap: boolean;
  bare?: boolean;
}

const pages: PageDef[] = [
  { path: '/', page: 'index', sitemap: true },
  { path: '/career', page: 'career', sitemap: true },
  { path: '/skills', page: 'skills', sitemap: true },
  { path: '/contact', page: 'contact', sitemap: true },
  { path: '/resume-print', page: 'resume-print', sitemap: false, bare: true },
  // Language-neutral: the contents of webapp/version.json.
  { path: '/version', page: 'version', sitemap: false, bare: true, locales: ['ro'] },
];

/** Every real page, once per locale. The 404 is not here: it has no URL of its own. */
export const routes: RouteDef[] = pages.flatMap((p) =>
  (p.locales ?? locales).map((locale) => ({
    path: localePath(locale, p.path),
    basePath: p.path,
    locale,
    page: p.page,
    sitemap: p.sitemap,
    bare: p.bare,
  })),
);

// Sections that once existed, and where their URLs now lead. The build writes
// a small redirect page for each, in every locale (vite.config.ts). A path here
// must never also be a page above.
const moved: Record<string, string> = {
  '/resume': '/career',
  '/ideas': '/',
  '/projects': '/',
  '/articles': '/',
};

export const redirects: Array<{ from: string; to: string }> = locales.flatMap((locale) =>
  Object.entries(moved).map(([from, to]) => ({
    from: localePath(locale, from),
    to: localePath(locale, to),
  })),
);
