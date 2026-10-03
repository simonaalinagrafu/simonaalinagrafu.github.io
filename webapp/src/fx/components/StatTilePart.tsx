// Big serif numeral over a small label. Two forms: a bordered card (the
// Career "at a glance" row) or `bare`, with no chrome at all, for a stat strip
// that sits directly on the page between hairlines.
import { cx } from '../lib/cx';

interface Props {
  value: string;
  label: string;
  /** Drop the card border and padding. */
  bare?: boolean;
}

export default function StatTilePart({ value, label, bare = false }: Props) {
  return (
    <div className={cx('text-center', bare ? 'px-2' : 'card p-4')}>
      <p className="figure text-3xl sm:text-4xl">{value}</p>
      <p className="text-faint mt-1 text-xs">{label}</p>
    </div>
  );
}
