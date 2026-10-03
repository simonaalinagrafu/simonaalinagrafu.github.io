// Build-time rendering of one route to HTML. Loaded by scripts/prerender.ts
// through Vite's SSR module loader, so aliases, CSS imports and lazy pages all
// resolve the same way they do in the browser build.
import { StrictMode } from 'react';
import { prerender } from 'react-dom/static';
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from 'react-router';
import { siteFacts } from '@data/profile';
import { t } from '@i18n/index';
import { routeObjects } from './routeTree';
import { routes } from './routes';

/** Every page that gets its own prerendered HTML file, with its <html lang>. */
export const prerenderPages = (): Array<{ path: string; lang: string }> =>
  routes.map((r) => ({ path: r.path, lang: t(r.locale).htmlLang }));

/** Renders the app at `path` and resolves once every lazy page chunk has loaded. */
export async function render(path: string): Promise<string> {
  const handler = createStaticHandler(routeObjects);
  const context = await handler.query(new Request(new URL(path, siteFacts.url)));
  if (context instanceof Response) {
    throw new Error(`Unexpected ${context.status} response while prerendering ${path}`);
  }
  const router = createStaticRouter(handler.dataRoutes, context);
  const { prelude } = await prerender(
    <StrictMode>
      <StaticRouterProvider router={router} context={context} />
    </StrictMode>,
    // React outlines any Suspense boundary bigger than this many bytes: the
    // fallback stays in place and the content moves to a hidden block at the
    // end of <body>, put back by an inline script. Good for streaming, wrong
    // for a static file — anything reading the HTML without running scripts
    // would find <main> empty. A full page is always one piece here.
    { progressiveChunkSize: Infinity },
  );
  return new Response(prelude).text();
}
