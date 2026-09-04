// Article registry — the single list of all articles and their metadata.
// Each article lives in content/<id>/, with one body per locale:
// ArticlePart.ro.astro and ArticlePart.en.astro (plus any local components,
// scripts, or media its directory needs).
//
// Both languages are required. `Record<Locale, …>` makes a missing title a
// type error, and ArticlePage throws at build time if a body is missing.
import type { Locale } from '@fx/lib/i18n';

export interface ArticleText {
  title: string;
  description: string;
}

export interface ArticleEntry {
  id: string;
  pubDate: Date;
  tags: string[];
  text: Record<Locale, ArticleText>;
}

/** One article, resolved for a locale — what pages and the feed consume. */
export interface Article extends ArticleText {
  id: string;
  pubDate: Date;
  tags: string[];
}

export const articles: ArticleEntry[] = [
  {
    id: 'why-i-built-this-site',
    pubDate: new Date('2026-08-31'),
    tags: ['meta'],
    text: {
      en: {
        title: 'Why I built this site',
        description:
          'A home for what I’ve learned in 20 years of software — engineering leadership, architecture, and the AI systems I’m building now.',
      },
      ro: {
        title: 'De ce am construit acest site',
        description:
          'Un loc pentru ce am învățat în 20 de ani de software — leadership în inginerie, arhitectură și sistemele AI pe care le construiesc acum.',
      },
    },
  },
];

export const getArticles = (locale: Locale): Article[] =>
  articles.map(({ id, pubDate, tags, text }) => ({ id, pubDate, tags, ...text[locale] }));

export const articlesByDate = (locale: Locale): Article[] =>
  getArticles(locale).sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());
