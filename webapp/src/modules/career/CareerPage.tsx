import IconPart from '@fx/components/IconPart';
import SegmentBarPart from '@fx/components/SegmentBarPart';
import StatTilePart from '@fx/components/StatTilePart';
import { getProfile, siteFacts, tenure } from '@data/profile';
import { cvHref } from '@modules/shared/cv';
import PageMetaPart from '@modules/shared/PageMetaPart';
import { useLocale } from '@modules/shared/useLocale';
import RoleItemPart from './RoleItemPart';

export default function CareerPage() {
  const { locale, s } = useLocale();
  const { experience, education } = getProfile(locale);

  // Every figure is derived from a start date in data/profile/shape.ts and
  // counted to the build year, so the tiles age on their own and agree with
  // the home page and the CV.
  const stats = [
    { value: `${tenure.sales}`, label: s.career.stats.sales },
    { value: `${tenure.print}`, label: s.career.stats.print },
    { value: `${tenure.leadership}`, label: s.career.stats.leadership },
  ];

  // Company eras for the ribbon; widths are proportional to duration. Company
  // names and year ranges are the same in every language.
  const eras = [
    { label: 'Euromobex', note: '’97–’99', weight: 2 },
    { label: 'Delta', note: '’99–’00', weight: 1.2 },
    { label: 'Neweuropetrolgaz', note: '’00–’01', weight: 0.7 },
    { label: 'Rodata', note: '’01–’02', weight: 1.7 },
    { label: 'RH Printing', note: '’03–’12', weight: 8.8 },
    { label: 'Tipografia Everest', note: `’12–${s.career.now}`, weight: 14.6, highlight: true },
  ];

  return (
    <>
      <PageMetaPart
        title={`${s.career.metaTitle} — ${siteFacts.name}`}
        description={s.career.metaDescription}
      />

      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="kicker">{s.career.kicker}</p>
          <h1 className="title-page mt-2">{s.career.heading}</h1>
          <p className="lede">{s.career.lede}</p>
        </div>
        <a
          href={cvHref(locale)}
          download={`${s.career.downloadFile}.pdf`}
          className="btn btn-primary"
        >
          <IconPart name="lucide:download" className="h-3.5 w-3.5" />
          {s.career.download}
        </a>
      </div>

      {/* Figures on a hairline strip, the same device as the home page. */}
      <div className="border-line mt-10 grid grid-cols-3 gap-6 border-y py-7">
        {stats.map((stat) => (
          <StatTilePart key={stat.label} value={stat.value} label={stat.label} bare />
        ))}
      </div>

      <SegmentBarPart segments={eras} ariaLabel={s.career.timeline} />

      <ol className="border-line relative mt-12 space-y-14 border-s">
        {experience.map((role) => (
          <RoleItemPart key={role.id} role={role} />
        ))}
      </ol>

      <p className="rule mt-16">
        <span className="kicker">{s.career.education}</span>
      </p>
      <ul className="mt-6 space-y-5">
        {education.map((entry) => (
          <li key={entry.id} className="flex gap-4">
            <IconPart name="lucide:graduation-cap" className="text-label mt-1 h-5 w-5 shrink-0" />
            <div>
              <p className="font-display text-ink text-lg font-semibold">{entry.degree}</p>
              <p className="text-faint mt-0.5 text-sm">
                {entry.school}
                {entry.period && ` · ${entry.period}`}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
