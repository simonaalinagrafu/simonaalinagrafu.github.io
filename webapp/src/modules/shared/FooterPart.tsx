import { Link } from 'react-router';
import { siteFacts } from '@data/profile';
import { localePath } from '@fx/lib/i18n';
import { navItems } from './nav';
import { useLocale } from './useLocale';

const telHref = `tel:${siteFacts.phone.replace(/\s/g, '')}`;

export default function FooterPart() {
  const { locale, s } = useLocale();
  return (
    <footer className="border-line border-t">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="font-display text-ink text-lg font-semibold">{siteFacts.name}</p>
            <p className="text-faint mt-1 max-w-xs text-sm">{s.footer.blurb}</p>
          </div>
          <nav className="text-muted flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {navItems.map((item) => (
              <Link key={item.id} to={localePath(locale, item.href)} className="hover:text-accent">
                {s.nav[item.id]}
              </Link>
            ))}
          </nav>
        </div>
        <p className="text-faint mt-8 text-sm">
          © {__BUILD_YEAR__} {siteFacts.name} ·{' '}
          <a href={`mailto:${siteFacts.email}`} className="hover:text-accent">
            {siteFacts.email}
          </a>{' '}
          ·{' '}
          <a href={telHref} className="hover:text-accent">
            {siteFacts.phone}
          </a>{' '}
          ·{' '}
          <a href={siteFacts.linkedin} className="hover:text-accent">
            {s.header.linkedin}
          </a>
        </p>
      </div>
    </footer>
  );
}
