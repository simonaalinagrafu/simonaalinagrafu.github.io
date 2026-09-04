import rss from '@astrojs/rss';
import { siteFacts } from '@data/profile';
import { articlesByDate } from '../articles/registry';
import { getLocale, localePath } from '@fx/lib/i18n';
import { t } from '@i18n/index';

export async function GET(context) {
  const locale = getLocale(context.url.pathname);
  const s = t(locale);

  return rss({
    title: `${siteFacts.name} — ${s.articles.feedTitle}`,
    description: s.articles.metaDescription,
    // Point the channel at this language's home. Item links are absolute
    // paths, so they resolve the same either way.
    site: new URL(localePath(locale, '/'), context.site),
    customData: `<language>${s.htmlLang}</language>`,
    items: articlesByDate(locale).map((article) => ({
      title: article.title,
      description: article.description,
      pubDate: article.pubDate,
      link: localePath(locale, `/articles/${article.id}/`),
    })),
  });
}
