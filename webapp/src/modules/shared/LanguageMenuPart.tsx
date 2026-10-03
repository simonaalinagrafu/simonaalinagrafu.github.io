// Language dropdown. Unlike the theme menu, the items are real links: a
// language is a URL here, so both trees stay crawlable and each item is an
// <a href> to the same page in the other language. Clicking also records the
// choice, which index.html's head script honours for a later visit to the
// bare root.
import { Link } from 'react-router';
import IconPart from '@fx/components/IconPart';
import { cx } from '@fx/lib/cx';
import { locales, switchLocalePath } from '@fx/lib/i18n';
import { t } from '@i18n/index';
import { useDropdown } from './useDropdown';
import { useLocale } from './useLocale';

export default function LanguageMenuPart() {
  const { locale, s, path } = useLocale();
  const { open, rootRef, toggle, close } = useDropdown();

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        aria-label={s.header.changeLanguage}
        aria-haspopup="menu"
        aria-expanded={open}
        data-tip={s.header.changeLanguageTip}
        onClick={toggle}
        className="tip tip-end border-line-strong text-muted hover:border-accent hover:text-accent inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors"
      >
        <IconPart name="lucide:languages" className="h-4 w-4" />
        <span>{s.localeShort}</span>
        <IconPart
          name="lucide:chevron-down"
          className={cx('h-3.5 w-3.5 transition-transform', open && 'rotate-180')}
        />
      </button>

      {open && (
        <div
          role="menu"
          className="card bg-bg absolute top-full right-0 z-20 mt-2 w-44 p-1 shadow-lg"
        >
          {locales.map((l) => {
            const active = l === locale;
            return (
              <Link
                key={l}
                to={switchLocalePath(path, l)}
                role="menuitemradio"
                aria-checked={active}
                hrefLang={l}
                onClick={() => {
                  // Remember the choice; the link itself does the navigating.
                  try {
                    localStorage.setItem('locale', l);
                  } catch {
                    // Storage unavailable: the switch still happens, just not remembered.
                  }
                  close();
                }}
                className={cx('menu-item text-sm', active && 'menu-item-active')}
              >
                <span className="grow text-start">{t(l).localeName}</span>
                {active && <IconPart name="lucide:check" className="text-accent h-4 w-4" />}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
