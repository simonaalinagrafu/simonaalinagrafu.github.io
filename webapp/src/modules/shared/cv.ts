// The downloadable CV for a locale: public/cv-ro.pdf, public/cv-en.pdf, printed
// from the /resume-print pages by `npm run cv`.
import type { Locale } from '@fx/lib/i18n';

export const cvHref = (locale: Locale) => `/cv-${locale}.pdf`;
