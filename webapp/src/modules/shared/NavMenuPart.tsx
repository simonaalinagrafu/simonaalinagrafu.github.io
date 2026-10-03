// Desktop pill navigation.
import { Link } from 'react-router';
import IconPart from '@fx/components/IconPart';
import { cx } from '@fx/lib/cx';
import { localePath } from '@fx/lib/i18n';
import { isActive } from '@fx/lib/routing';
import { navItems } from './nav';
import { useLocale } from './useLocale';

export default function NavMenuPart() {
  const { locale, s, basePath } = useLocale();
  return (
    <nav className="hidden flex-wrap gap-1 text-[15px] sm:flex">
      {navItems.map((item) => {
        // Decided on the locale-free path, so /en/career highlights the same
        // item /career does.
        const active = isActive(item.href, basePath);
        return (
          <Link
            key={item.id}
            to={localePath(locale, item.href)}
            aria-current={active ? 'page' : undefined}
            className={cx('nav-pill', active && 'nav-pill-active')}
          >
            <IconPart name={item.icon} className="h-4 w-4" />
            {s.nav[item.id]}
          </Link>
        );
      })}
    </nav>
  );
}
