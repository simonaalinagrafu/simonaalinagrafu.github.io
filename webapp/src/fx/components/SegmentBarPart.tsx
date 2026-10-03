// Generic horizontal segment bar: each segment's width is proportional to its
// weight; one segment can be highlighted with the solid accent. Segments never
// break their label, so the bar wraps onto more lines until the screen is wide
// enough to hold them all in one.
import { cx } from '../lib/cx';

export interface Segment {
  label: string;
  note?: string;
  weight: number;
  highlight?: boolean;
}

interface Props {
  segments: Segment[];
  ariaLabel?: string;
}

export default function SegmentBarPart({ segments, ariaLabel }: Props) {
  return (
    <div className="mt-6 flex flex-wrap gap-1.5 lg:flex-nowrap" aria-label={ariaLabel}>
      {segments.map((s) => (
        <div
          key={s.label}
          className={cx(
            'rounded-md px-2.5 py-1.5 text-center text-xs whitespace-nowrap',
            s.highlight ? 'bg-accent-solid text-accent-ink font-medium' : 'bg-chip text-muted',
          )}
          style={{ flexGrow: s.weight, flexBasis: 0, minWidth: 'fit-content' }}
        >
          {s.label}{' '}
          {s.note && (
            <span className={s.highlight ? 'text-accent-ink/80' : 'text-faint'}>{s.note}</span>
          )}
        </div>
      ))}
    </div>
  );
}
