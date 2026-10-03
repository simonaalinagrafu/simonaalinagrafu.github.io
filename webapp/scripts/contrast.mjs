// WCAG contrast check for every theme in src/themes/.
//
//   node scripts/contrast.mjs
//
// Parses the --t-* tokens out of each theme file and checks the pairs that
// carry text against the AA ratio for normal text (4.5:1). Exits non-zero if
// any pair in any theme fails, and prints the ratio for every pair so a near
// miss is visible too.
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const dir = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'themes');

// [foreground, background, minimum ratio]
const PAIRS = [
  ['ink', 'bg', 4.5],
  ['muted', 'bg', 4.5],
  ['faint', 'bg', 4.5],
  ['accent', 'bg', 4.5],
  ['label', 'bg', 4.5],
  ['ink', 'surface', 4.5],
  ['muted', 'surface', 4.5],
  ['muted', 'chip', 4.5],
  ['accent-ink', 'accent-solid', 4.5],
  ['accent-ink', 'accent-hover', 4.5],
  ['accent-strong', 'accent-soft', 4.5],
  ['label-strong', 'label-soft', 4.5],
  ['accent', 'label-soft', 4.5],
];

const hex = (s) => {
  const m = s.match(/#([0-9a-f]{6})/i);
  if (!m) return null;
  const n = parseInt(m[1], 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};
const lum = ([r, g, b]) => {
  const f = (c) => {
    c /= 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
};
const ratio = (a, b) => {
  const [l1, l2] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
};

let failed = 0;
for (const file of readdirSync(dir).filter((f) => f.endsWith('.css') && f !== 'index.css')) {
  const css = readFileSync(join(dir, file), 'utf8');
  const tokens = {};
  for (const [, name, value] of css.matchAll(/--t-([a-z-]+):\s*([^;]+);/g)) tokens[name] = value.trim();

  console.log(`\n${file}`);
  for (const [fg, bg, min] of PAIRS) {
    const a = hex(tokens[fg] ?? ''), b = hex(tokens[bg] ?? '');
    if (!a || !b) {
      console.log(`  skip  ${fg} on ${bg} (not a plain hex)`);
      continue;
    }
    const r = ratio(a, b);
    const ok = r >= min;
    if (!ok) failed++;
    console.log(`  ${ok ? 'ok  ' : 'FAIL'}  ${r.toFixed(2).padStart(5)}  ${fg} on ${bg}`);
  }
}
console.log(failed ? `\n${failed} pair(s) below AA.` : '\nAll pairs pass AA.');
process.exit(failed ? 1 : 0);
