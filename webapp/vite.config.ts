import { copyFileSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, URL } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, type Plugin } from 'vite';
import type { Locale } from './src/fx/lib/i18n.ts';
import { siteFacts } from './src/data/profile/shape.ts';
import { redirects, routes } from './src/routes.ts';
import { themes } from './src/themes/themes.ts';

const src = (dir: string) => fileURLToPath(new URL(`./src/${dir}`, import.meta.url));

const escapeXml = (s: string) =>
  s.replace(
    /[<>&'"]/g,
    (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[c]!,
  );

/** Region-qualified tags for the sitemap's alternates (the page head uses the bare language). */
const sitemapLang: Record<Locale, string> = { ro: 'ro-RO', en: 'en-US' };

/** Every page flagged for the sitemap, each listing all its language twins as alternates. */
function sitemapXml(): string {
  const listed = routes.filter((r) => r.sitemap);
  const href = (path: string) => escapeXml(new URL(path, siteFacts.url).href);
  const entries = listed.map((r) => {
    const twins = listed
      .filter((t) => t.basePath === r.basePath)
      .map(
        (t) =>
          `<xhtml:link rel="alternate" hreflang="${sitemapLang[t.locale]}" href="${href(t.path)}"/>`,
      );
    return `  <url><loc>${href(r.path)}</loc>${twins.join('')}</url>`;
  });
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...entries,
    '</urlset>',
    '',
  ].join('\n');
}

/** A static page that forwards to `to` — what a moved URL answers with. */
function redirectHtml(from: string, to: string): string {
  const target = escapeXml(new URL(to, siteFacts.url).href);
  return [
    '<!doctype html>',
    `<title>Redirecting to: ${escapeXml(to)}</title>`,
    `<meta http-equiv="refresh" content="0;url=${escapeXml(to)}">`,
    '<meta name="robots" content="noindex">',
    `<link rel="canonical" href="${target}">`,
    `<body><a href="${escapeXml(to)}">Redirecting from <code>${escapeXml(from)}</code> to <code>${escapeXml(to)}</code></a></body>`,
    '',
  ].join('\n');
}

// Static-site files a SPA on GitHub Pages still needs: sitemap.xml from the
// route manifest, 404.html as a copy of index.html so deep links load the app
// and the router takes over, and a redirect page for every moved URL. Every
// real page is then prerendered over this by scripts/prerender.ts.
function staticSiteFiles(): Plugin {
  return {
    name: 'static-site-files',
    apply: 'build',
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemapXml() });
    },
    writeBundle(options) {
      const dir = options.dir ?? 'dist';
      copyFileSync(join(dir, 'index.html'), join(dir, '404.html'));
      // Both forms, like the prerendered pages: /resume and /resume/ answer directly.
      for (const { from, to } of redirects) {
        const rel = from.replace(/^\//, '');
        for (const file of [join(dir, `${rel}.html`), join(dir, rel, 'index.html')]) {
          mkdirSync(dirname(file), { recursive: true });
          writeFileSync(file, redirectHtml(from, to));
        }
      }
    },
  };
}

// The pre-paint theme script in index.html drops a stored theme that is no
// longer registered; it learns the registered ids from here.
function themeIds(): Plugin {
  return {
    name: 'theme-ids',
    transformIndexHtml: (html) =>
      html.replace('__THEME_IDS__', JSON.stringify(themes.map((t) => t.id))),
  };
}

// https://vite.dev/config/
export default defineConfig({
  define: {
    // Fixed at build time so the prerendered HTML and the page that hydrates it
    // agree on the year. Reading the clock at render would let the two
    // disagree across a New Year.
    __BUILD_YEAR__: new Date().getFullYear(),
    // The home hero is built around public/portrait.jpg once it exists; until
    // then the frame holds the space with initials.
    __HAS_PORTRAIT__: existsSync(fileURLToPath(new URL('./public/portrait.jpg', import.meta.url))),
  },
  plugins: [react(), tailwindcss(), staticSiteFiles(), themeIds()],
  resolve: {
    // Mirrors the "paths" in tsconfig.app.json.
    alias: {
      '@modules': src('modules'),
      '@fx': src('fx'),
      '@data': src('data'),
      '@themes': src('themes'),
      '@i18n': src('i18n'),
      '@styles': src('styles'),
    },
  },
});
