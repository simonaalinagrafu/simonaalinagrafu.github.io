// Phone-only page pager, under the menu row: walk the site in nav order with
// one tap instead of opening the dropdown every time. The dots say how many
// pages there are and which one this is — something the arrows alone cannot.
//
// It is deliberately not styled like the menu above it: a lighter ground, an
// accent hairline between the two, and controls spread edge to edge rather
// than a row of pills.
//
// Each page resolves its own neighbours from the nav list. Off the four nav
// pages (the 404) there is no position in the sequence, so nothing renders.
// The ends stop rather than wrap: at Contact there is no next page, and the
// arrow says so by going quiet.
import { Link } from 'react-router';
import IconPart from '@fx/components/IconPart';
import { cx } from '@fx/lib/cx';
import { localePath } from '@fx/lib/i18n';
import { isActive } from '@fx/lib/routing';
import { navItems } from './nav';
import { useLocale } from './useLocale';

export default function PagerPart() {
  const { locale, s, basePath } = useLocale();

  const index = navItems.findIndex((item) => isActive(item.href, basePath));
  if (index === -1) return null;
  const prev = index > 0 ? navItems[index - 1] : undefined;
  const next = index < navItems.length - 1 ? navItems[index + 1] : undefined;

  return (
    <nav
      aria-label={s.header.pager}
      className="border-accent-line border-line-strong bg-surface border-t border-b sm:hidden"
    >
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-2">
        {prev ? (
          <Link
            to={localePath(locale, prev.href)}
            aria-label={`${s.header.prevPage}: ${s.nav[prev.id]}`}
            className="pager-link"
          >
            <IconPart name="lucide:chevron-left" className="h-4 w-4 shrink-0" />
            <span className="truncate">{s.nav[prev.id]}</span>
          </Link>
        ) : (
          <span className="pager-link pager-link-off" aria-hidden="true">
            <IconPart name="lucide:chevron-left" className="h-4 w-4 shrink-0" />
          </span>
        )}

        <span className="flex shrink-0 items-center gap-1.5" aria-hidden="true">
          {navItems.map((item, i) => (
            <span
              key={item.id}
              className={cx(
                'h-1.5 w-1.5 rounded-full',
                i === index ? 'bg-accent' : 'bg-line-strong',
              )}
            />
          ))}
        </span>

        {next ? (
          <Link
            to={localePath(locale, next.href)}
            aria-label={`${s.header.nextPage}: ${s.nav[next.id]}`}
            className="pager-link justify-end"
          >
            <span className="truncate">{s.nav[next.id]}</span>
            <IconPart name="lucide:chevron-right" className="h-4 w-4 shrink-0" />
          </Link>
        ) : (
          <span className="pager-link pager-link-off justify-end" aria-hidden="true">
            <IconPart name="lucide:chevron-right" className="h-4 w-4 shrink-0" />
          </span>
        )}
      </div>
    </nav>
  );
}
