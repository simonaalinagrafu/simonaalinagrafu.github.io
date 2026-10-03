// Locale primitives — pure path functions, no dictionaries and no site content,
// so this stays inside fx/'s rule of importing nothing above it.
//
// Romanian is the default and lives at the root (/career); every other locale
// is prefixed (/en/career).

export const locales = ['ro', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'ro';

/** Locales that carry a URL prefix — everything except the default. */
const prefixed = locales.filter((l) => l !== defaultLocale);

/** The locale a pathname belongs to. '/en/career' → 'en'; '/career' → 'ro'. */
export const getLocale = (pathname: string): Locale =>
  prefixed.find((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)) ?? defaultLocale;

/** Drop the locale prefix. '/en/career' → '/career'; '/en' → '/'. */
export const stripLocale = (pathname: string): string => {
  const locale = getLocale(pathname);
  if (locale === defaultLocale) return pathname;
  return pathname.slice(locale.length + 1) || '/';
};

/**
 * Put a locale-free path into a locale. Preserves the caller's trailing-slash
 * form, because route patterns and hrefs differ on it: patterns are written
 * '/career', nav hrefs '/career/'.
 */
export const localePath = (locale: Locale, path: string): string => {
  if (locale === defaultLocale) return path;
  return path === '/' ? `/${locale}/` : `/${locale}${path}`;
};

/** The current page in another language — what the language dropdown links to. */
export const switchLocalePath = (pathname: string, to: Locale): string =>
  localePath(to, stripLocale(pathname));
