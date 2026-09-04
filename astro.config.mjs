import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import { routes } from './src/routes';

// Registers every route from the central manifest (src/routes.ts),
// replacing Astro's file-based src/pages routing.
const centralRoutes = () => ({
  name: 'central-routes',
  hooks: {
    'astro:config:setup': ({ injectRoute }) => {
      for (const route of routes) injectRoute(route);
    },
  },
});

export default defineConfig({
  site: 'https://simonaalinagrafu.github.io',
  redirects: {
    '/resume': '/career',
    '/ideas': '/',
    '/projects': '/',
    '/en/resume': '/en/career',
    '/en/ideas': '/en',
    '/en/projects': '/en',
  },
  integrations: [
    centralRoutes(),
    icon(),
    sitemap({
      // Groups /career/ with /en/career/ and emits hreflang alternates.
      // Passing i18n is also what makes status-code pages locale-aware, so
      // /en/404/ stays out of the sitemap.
      i18n: {
        defaultLocale: 'ro',
        locales: { ro: 'ro-RO', en: 'en-US' },
      },
      filter: (page) => !page.includes('/resume-print/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
