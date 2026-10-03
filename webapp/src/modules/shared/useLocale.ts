// The current page's language, read from the URL — the React counterpart of
// getLocale(Astro.url.pathname). One page component serves every locale, so
// every part that shows words or links asks this hook which ones.
import { useLocation } from 'react-router';
import { getLocale, stripLocale } from '@fx/lib/i18n';
import { trimSlash } from '@fx/lib/routing';
import { t } from '@i18n/index';

export function useLocale() {
  const { pathname } = useLocation();
  // One form per URL whichever way it was typed: /career/ reads as /career.
  const path = trimSlash(pathname);
  const locale = getLocale(path);
  return {
    locale,
    /** UI strings in this locale. */
    s: t(locale),
    /** The current path, no trailing slash. */
    path,
    /** The current path without its locale prefix — the same in every language. */
    basePath: stripLocale(path),
  };
}
