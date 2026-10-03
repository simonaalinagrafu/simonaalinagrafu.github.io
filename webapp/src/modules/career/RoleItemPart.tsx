// One entry on the Career timeline: era icon, years in gold small caps, the
// one-line impact, company context, role summary, a numbered list of what I
// did, and focus-area chips.
// The icon travels with the role (data/profile/shape.ts) rather than through a
// positional array, so the two cannot fall out of step.
import IconPart from '@fx/components/IconPart';
import { cx } from '@fx/lib/cx';
import { yearsOnly } from '@fx/lib/yearsOnly';
import type { Role } from '@data/profile';

interface Props {
  role: Role;
}

export default function RoleItemPart({ role }: Props) {
  return (
    <li className="ms-6">
      <span className="border-accent-line bg-bg text-accent absolute -start-3.5 mt-1 flex h-7 w-7 items-center justify-center rounded-full border">
        <IconPart name={role.icon} className="h-3.5 w-3.5" />
      </span>
      <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
        {/* Years only: orientation, not verification. The CV keeps the months. */}
        <span className="badge tabular-nums">{yearsOnly(role.period)}</span>
        <span className="text-faint">{role.location}</span>
      </p>
      <h2 className="title-item mt-2">
        {role.position} <span className="text-faint font-normal">·</span> {role.company}
      </h2>
      {/* The takeaway for a skimming reader, before the company context. */}
      {role.impact && (
        <p className="text-ink mt-3 flex gap-2.5 leading-relaxed font-medium">
          <IconPart name="lucide:target" className="text-accent mt-1 h-4 w-4 shrink-0" />
          <span>{role.impact}</span>
        </p>
      )}
      {/* Company context: the long form where there is one, else the CV's one-liner. */}
      {(role.about ?? role.aboutShort) && (
        <p className="text-faint border-line-strong mt-3 border-s-2 ps-3.5 text-sm leading-relaxed">
          {role.about ?? role.aboutShort}
        </p>
      )}
      {role.summary && <p className="text-muted mt-3 leading-relaxed">{role.summary}</p>}
      <div className="mt-5 grid gap-x-10 gap-y-5 sm:grid-cols-2">
        {role.bullets.map((b, i) => {
          const idx = b.indexOf(': ');
          const title = idx > 0 ? b.slice(0, idx) : null;
          const rest = idx > 0 ? b.slice(idx + 2) : b;
          const body = title ? rest.charAt(0).toUpperCase() + rest.slice(1) : rest;
          // Leading bullets name the scope of the role rather than the work, so
          // their numeral takes the accent colour to set them apart.
          const lead = i < (role.leadBullets ?? 0);
          return (
            <div key={b} className="flex gap-3">
              <span
                className={cx(
                  'font-display pt-px text-sm font-semibold tabular-nums',
                  lead ? 'text-accent' : 'text-label',
                )}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                {title && <p className="text-ink text-base font-semibold">{title}</p>}
                <p className={cx('text-muted text-[15px] leading-relaxed', title && 'mt-0.5')}>
                  {body}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {role.focus && (
        <div className="mt-4 flex flex-wrap gap-2">
          {role.focus.map((area) => (
            <span key={area} className="tag">
              {area}
            </span>
          ))}
        </div>
      )}
    </li>
  );
}
