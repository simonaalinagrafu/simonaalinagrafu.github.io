// Theme registry — the list the theme dropdown offers. Adding a theme means
// creating its .css file (see index.css for the token contract), importing it
// there, adding an entry here, and adding its label to both i18n dictionaries
// (the ThemeId union makes that last step a type error if you forget).
import type { ThemeId } from '@i18n/types';

export interface ThemeDef {
  id: ThemeId;
  /** Swatch color shown next to the theme name in the dropdown. */
  swatch: string;
}

export const themes: ThemeDef[] = [
  { id: 'cream', swatch: '#7a1f2b' },
  { id: 'night', swatch: '#17130f' },
  { id: 'forest', swatch: '#1f4d3a' },
  { id: 'marine', swatch: '#1c3557' },
];
