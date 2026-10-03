// Sticky site header: nav pills (desktop) / hamburger (mobile) on the left,
// social links, language and theme toggles on the right, mobile dropdown panel
// below, and the phone-only pager under it all.
import { useState } from 'react';
import MenuButtonPart from '@fx/components/MenuButtonPart';
import LanguageMenuPart from './LanguageMenuPart';
import MobileMenuPart from './MobileMenuPart';
import NavMenuPart from './NavMenuPart';
import PagerPart from './PagerPart';
import SocialLinksPart from './SocialLinksPart';
import ThemeMenuPart from './ThemeMenuPart';
import { useLocale } from './useLocale';

const MOBILE_MENU_ID = 'mobile-menu';

export default function HeaderPart() {
  const { s, path } = useLocale();
  // The phone menu is open for the page it was opened on, so any navigation —
  // a menu link, the pager, the back button — closes it without an effect.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const menuOpen = openOn === path;

  return (
    // The menu is banded, not merely bordered: an accent rule across the full
    // width above it, a ground darker than the page, and a double hairline
    // under it. It reads as its own strip whether it sits below the masthead
    // or is stuck to the top of the window.
    <header className="sticky top-0 z-10">
      <div className="bg-accent-solid h-1 w-full"></div>
      <div className="border-line-strong bg-chip/95 border-b shadow-[0_3px_0_-1px_var(--t-line)] backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-3 sm:px-6 lg:px-8">
          <MenuButtonPart
            open={menuOpen}
            onToggle={() => setOpenOn(menuOpen ? null : path)}
            openLabel={s.header.openMenu}
            closeLabel={s.header.closeMenu}
            controls={MOBILE_MENU_ID}
          />
          <NavMenuPart />
          <div className="flex items-center gap-x-3 sm:gap-x-5">
            <SocialLinksPart />
            <div className="flex items-center gap-x-2">
              <LanguageMenuPart />
              <ThemeMenuPart />
            </div>
          </div>
        </div>
        <MobileMenuPart id={MOBILE_MENU_ID} open={menuOpen} />
      </div>
      <PagerPart />
    </header>
  );
}
