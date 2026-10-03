// Theme dropdown: lists every registered theme (src/themes/themes.ts) and
// shows the active one on the button. Cream is the default; the choice is
// stored in localStorage (useTheme) and applied before first paint by the
// inline script in index.html.
import IconPart from '@fx/components/IconPart';
import { cx } from '@fx/lib/cx';
import { themes } from '@themes/themes';
import { useDropdown } from './useDropdown';
import { useLocale } from './useLocale';
import { useTheme } from './useTheme';

export default function ThemeMenuPart() {
  const { s } = useLocale();
  const { theme, setTheme } = useTheme();
  const { open, rootRef, toggle, close } = useDropdown();

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        aria-label={s.header.changeTheme}
        aria-haspopup="menu"
        aria-expanded={open}
        data-tip={s.header.changeThemeTip}
        onClick={toggle}
        className="tip tip-end border-line-strong text-muted hover:border-accent hover:text-accent inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors"
      >
        <IconPart name="lucide:palette" className="h-4 w-4" />
        {/* The name shows only where there is room: with three contact icons
            beside it, the header would otherwise wrap onto a second line. */}
        <span className="hidden lg:inline">{s.themes[theme]}</span>
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
          {themes.map((item) => {
            const active = item.id === theme;
            return (
              <button
                key={item.id}
                type="button"
                role="menuitemradio"
                aria-checked={active}
                onClick={() => {
                  setTheme(item.id);
                  close();
                }}
                className="menu-item text-sm"
              >
                <span
                  className="border-line-strong h-3.5 w-3.5 rounded-full border"
                  style={{ background: item.swatch }}
                  aria-hidden="true"
                />
                <span className="grow text-start">{s.themes[item.id]}</span>
                {active && <IconPart name="lucide:check" className="text-accent h-4 w-4" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
