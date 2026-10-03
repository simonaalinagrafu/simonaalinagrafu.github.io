import IconPart from '@fx/components/IconPart';
import { getProfile, siteFacts } from '@data/profile';
import PageMetaPart from '@modules/shared/PageMetaPart';
import { useLocale } from '@modules/shared/useLocale';

export default function SkillsPage() {
  const { locale, s } = useLocale();
  const { skills, extras } = getProfile(locale);

  return (
    <>
      <PageMetaPart
        title={`${s.skills.metaTitle} — ${siteFacts.name}`}
        description={s.skills.metaDescription}
      />

      <p className="kicker">{s.skills.kicker}</p>
      <h1 className="title-page mt-2">{s.skills.heading}</h1>
      <p className="lede">{s.skills.lede}</p>

      {/* An editorial list on hairlines rather than a card grid: each group is a
          heading with its own rule, not a box. */}
      <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
        {skills.map((cat) => (
          <section key={cat.id} className="border-line border-t pt-6">
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
          </section>
        ))}
      </div>

      {/* The same closing facts the CV prints (licence, languages…), so the two
          pages can never disagree. */}
      {extras.length > 0 && (
        <section className="mt-14">
          <p className="rule">
            <span className="kicker">{s.resume.other}</span>
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {extras.map((item) => (
              <li key={item} className="chip text-sm">
                <IconPart name="lucide:car" className="text-label h-4 w-4" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
