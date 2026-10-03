// Dropdown nav panel shown below the header on mobile; opened by MenuButtonPart.
import { Link } from 'react-router';
import IconPart from '@fx/components/IconPart';
import { cx } from '@fx/lib/cx';
import { localePath } from '@fx/lib/i18n';
import { isActive } from '@fx/lib/routing';
import { navItems } from './nav';
import { useLocale } from './useLocale';

interface Props {
  id: string;
  open: boolean;
}

export default function MobileMenuPart({ id, open }: Props) {
  const { locale, s, basePath } = useLocale();
  if (!open) return null;
  return (
    <div id={id} className="border-line border-t sm:hidden">
      <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 text-sm sm:px-6 lg:px-8">
        {navItems.map((item) => {
          const active = isActive(item.href, basePath);
          return (
            <Link
              key={item.id}
              to={localePath(locale, item.href)}
              aria-current={active ? 'page' : undefined}
              className={cx('menu-item', active && 'menu-item-active')}
            >
              <IconPart name={item.icon} className="h-4.5 w-4.5" />
              {s.nav[item.id]}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
