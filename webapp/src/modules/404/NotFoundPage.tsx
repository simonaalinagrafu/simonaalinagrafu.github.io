// GitHub Pages serves one 404.html for every unmatched path in either
// language, so this page is not locale-specific — it carries both.
import { Link } from 'react-router';
import { siteFacts } from '@data/profile';
import { localePath } from '@fx/lib/i18n';
import { t } from '@i18n/index';
import PageMetaPart from '@modules/shared/PageMetaPart';

const ro = t('ro');
const en = t('en');

export default function NotFoundPage() {
  return (
    <>
      <PageMetaPart title={`${ro.notFound.metaTitle} — ${siteFacts.name}`} noindex />
      <div className="py-20 text-center">
        <p className="figure text-7xl">404</p>
        <p className="text-ink mt-6 text-lg">{ro.notFound.message}</p>
        <p className="text-faint mt-1 text-sm">{en.notFound.message}</p>
        <p className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <Link to={localePath('ro', '/')} className="link-accent">
            {ro.notFound.back}
          </Link>
          <span className="text-faint" aria-hidden="true">
            ·
          </span>
          <Link to={localePath('en', '/')} className="link-accent">
            {en.notFound.back}
          </Link>
        </p>
      </div>
    </>
  );
}
