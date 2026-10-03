// Per-page document metadata. React 19 hoists <title>, <meta> and <link>
// rendered anywhere in the tree into <head>, so every page renders one of
// these; the site-wide, page-independent tags live in index.html.
//
// It also keeps <html lang> in step with the page on client-side navigation;
// the prerenderer writes the right value into each static file.
import { useEffect } from 'react';
import { getProfile, siteFacts } from '@data/profile';
import { defaultLocale, localePath, locales } from '@fx/lib/i18n';
import { t } from '@i18n/index';
import { useLocale } from './useLocale';

interface Props {
  title: string;
  /** Defaults to the profile's tagline in the page's language. */
  description?: string;
  /** Keep search engines out (the print CV, the 404, /version). These carry
      no language alternates either: there is nothing to point them at. */
  noindex?: boolean;
}

export default function PageMetaPart({ title, description, noindex = false }: Props) {
  const { locale, s, path, basePath } = useLocale();
  const desc = description ?? getProfile(locale).site.tagline;
  const href = (p: string) => new URL(p, siteFacts.url).href;
  const url = href(path);

  useEffect(() => {
    document.documentElement.lang = s.htmlLang;
  }, [s.htmlLang]);

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={desc} />
      {noindex && <meta name="robots" content="noindex" />}
      <link rel="canonical" href={url} />
      {!noindex &&
        locales.map((l) => (
          <link
            key={l}
            rel="alternate"
            hrefLang={t(l).htmlLang}
            href={href(localePath(l, basePath))}
          />
        ))}
      {!noindex && (
        <link
          rel="alternate"
          hrefLang="x-default"
          href={href(localePath(defaultLocale, basePath))}
        />
      )}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content={s.ogLocale} />
    </>
  );
}
