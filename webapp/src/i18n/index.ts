// UI string lookup. Pages do:
//   const locale = getLocale(Astro.url.pathname);
//   const s = t(locale);
import type { Locale } from '@fx/lib/i18n';
import type { UiStrings } from './types';
import { ro } from './ro';
import { en } from './en';

const dictionaries: Record<Locale, UiStrings> = { ro, en };

export const t = (locale: Locale): UiStrings => dictionaries[locale];

export type { UiStrings } from './types';
