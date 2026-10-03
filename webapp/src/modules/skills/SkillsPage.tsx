// Skills, fed by the work itself: every group names the roles it was practised
// in, so nothing here is claimed without a job behind it. Three views of the
// same profile data — what is in use today, the skills by area with their
// evidence, and what each role added — then the closing facts the CV prints.
import { Link } from 'react-router';
import IconPart from '@fx/components/IconPart';
import { cx } from '@fx/lib/cx';
import { fill } from '@fx/lib/fill';
import { localePath } from '@fx/lib/i18n';
import { startYear, yearsOnly } from '@fx/lib/yearsOnly';
import { getProfile, siteFacts, type Role, type SkillCategory } from '@data/profile';
import PageMetaPart from '@modules/shared/PageMetaPart';
import { useLocale } from '@modules/shared/useLocale';

/**
 * Where a skill group comes from: the first year it was practised and the
 * companies, oldest first. Derived from the roles the group names, so it
 * cannot disagree with the Career page.
 */
function evidence(cat: SkillCategory, experience: Role[]) {
  // `experience` is newest first; evidence reads oldest first.
  const roles = experience.filter((r) => cat.roles?.includes(r.id)).reverse();
  if (roles.length === 0) return null;
  return {
    year: Math.min(...roles.map((r) => startYear(r.period))),
    companies: [...new Set(roles.map((r) => r.company))],
  };
}

export default function SkillsPage() {
  const { locale, s } = useLocale();
  const { skills, extras, experience } = getProfile(locale);
  const current = experience[0];

  return (
    <>
      <PageMetaPart
        title={`${s.skills.metaTitle} — ${siteFacts.name}`}
        description={s.skills.metaDescription}
      />

      <p className="kicker">{s.skills.kicker}</p>
      <h1 className="title-page mt-2">{s.skills.heading}</h1>
      <p className="lede">{s.skills.lede}</p>

      {/* The current role's areas, straight from the profile data — the same
          chips the Career page shows under it. */}
      {current.focus && (
        <section className="border-line mt-10 border-y py-7">
          <p className="kicker">{s.skills.kickerDaily}</p>
          <p className="text-muted mt-2">
            {fill(s.skills.dailyLede, { position: current.position, company: current.company })}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {current.focus.map((area) => (
              <li key={area} className="chip text-sm">
                <IconPart name="lucide:check" className="text-accent h-4 w-4 shrink-0" />
                {area}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* An editorial list on hairlines rather than a card grid: each group is a
          heading with its own rule, not a box. */}
      <section className="mt-12">
        <p className="rule">
          <span className="kicker">{s.skills.kickerAreas}</span>
        </p>
        <div className="mt-8 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {skills.map((cat) => {
            const proof = evidence(cat, experience);
            return (
              <section key={cat.id} className="border-line flex flex-col border-t pt-6">
                <div className="flex items-center gap-3">
                  <div className="icon-tile">
                    <IconPart name={cat.icon} className="h-4 w-4" />
                  </div>
                  <h2 className="title-item">{cat.group}</h2>
                </div>
                <p className="text-muted mt-3 text-sm leading-relaxed">{cat.blurb}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <li key={item} className="chip text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
                {/* The evidence: since when, and where. */}
                {proof && (
                  <p className="mt-auto flex flex-wrap items-baseline gap-x-3 gap-y-1 pt-5 text-sm">
                    <span className="badge tabular-nums">
                      {fill(s.skills.since, { year: proof.year })}
                    </span>
                    <span className="text-faint">{proof.companies.join(' · ')}</span>
                  </p>
                )}
              </section>
            );
          })}
        </div>
      </section>

      {/* One row per role, newest first — the same order as the Career page
          and the home page's Background, read here as what each role added. */}
      <section className="mt-16">
        <p className="rule">
          <span className="kicker">{s.skills.kickerOverTime}</span>
        </p>
        <h2 className="title-section mt-4">{s.skills.headingOverTime}</h2>
        <ol className="border-line relative mt-8 space-y-8 border-s">
          {experience.map((role, i) => (
            <li key={role.id} className="relative ps-6">
              <span
                className={cx(
                  'absolute -start-[5px] top-1.5 h-2.5 w-2.5 rounded-full',
                  i === 0 ? 'bg-accent-solid' : 'bg-line-strong',
                )}
                aria-hidden="true"
              />
              <p className="badge tabular-nums">{yearsOnly(role.period)}</p>
              <h3 className="text-ink mt-1 font-medium">
                {role.position} <span className="text-faint font-normal">·</span> {role.company}
              </h3>
              {role.focus && (
                <ul className="mt-3 flex flex-wrap gap-2">
                  {role.focus.map((area) => (
                    <li key={area} className="tag">
                      {area}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* The same closing facts the CV prints (language, software, licence), so
          the two pages can never disagree. */}
      {extras.length > 0 && (
        <section className="mt-14">
          <p className="rule">
            <span className="kicker">{s.resume.other}</span>
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {extras.map((extra) => (
              <li key={extra.id} className="chip text-sm">
                <IconPart name={extra.icon} className="text-label h-4 w-4" />
                {extra.text}
              </li>
            ))}
          </ul>
        </section>
      )}

      <p className="text-muted mt-10">
        {s.skills.careerLink.before}
        <Link to={localePath(locale, '/career')} className="link-accent">
          {s.skills.careerLink.link}
        </Link>
        {s.skills.careerLink.after}
      </p>
    </>
  );
}
