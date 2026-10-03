// The theme choice: read from localStorage, written back on change, and
// applied as data-theme on <html>. The inline script in index.html applies the
// saved value before first paint; this hook takes over from there.
//
// Exposed through useSyncExternalStore so prerendered HTML (which always says
// cream) hydrates cleanly and then switches to the stored choice.
import { useCallback, useSyncExternalStore } from 'react';
import type { ThemeId } from '@i18n/types';
import { themes } from '@themes/themes';

const STORAGE_KEY = 'theme';
const DEFAULT_THEME: ThemeId = 'cream';

const listeners = new Set<() => void>();

function readStored(): ThemeId {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return themes.find((t) => t.id === stored)?.id ?? DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener('storage', listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener('storage', listener);
  };
}

const getServerSnapshot = () => DEFAULT_THEME;

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, readStored, getServerSnapshot);

  const setTheme = useCallback((id: ThemeId) => {
    document.documentElement.setAttribute('data-theme', id);
    try {
      localStorage.setItem(STORAGE_KEY, id);
    } catch {
      // Private mode or storage disabled: the choice still applies for this visit.
    }
    listeners.forEach((l) => l());
  }, []);

  return { theme, setTheme };
}
