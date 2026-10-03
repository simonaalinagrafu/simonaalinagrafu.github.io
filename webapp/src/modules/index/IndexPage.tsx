// The home page, organised as a profile rather than a landing page: who she is
// in the current role, what that role owns, three highlights, and the whole
// background and education straight from the profile data — so this page
// cannot drift from the Career page or the CV.
import { Link } from 'react-router';
import IconPart from '@fx/components/IconPart';
import PortraitPart from '@fx/components/PortraitPart';
import { cx } from '@fx/lib/cx';
import { fill } from '@fx/lib/fill';
import { localePath } from '@fx/lib/i18n';
import { yearsOnly } from '@fx/lib/yearsOnly';
import { getProfile, siteFacts, tenure } from '@data/profile';
import type { HighlightId, ScopeId } from '@i18n/types';
import { cvHref } from '@modules/shared/cv';
import PageMetaPart from '@modules/shared/PageMetaPart';
import { useLocale } from '@modules/shared/useLocale';
import SalesCyclePart from './SalesCyclePart';

// The hero's right-hand side is a portrait once public/portrait.jpg exists
// (drop it in and rebuild — see vite.config.ts); until then it is the B2B sales
// cycle, drawn by SalesCyclePart.

// Display order and icons live here; the words live in the i18n dictionaries,
// keyed by the same ids — so neither can drift out of step with the other.

// What the current role owns, as a labelled list rather than a card grid: the
// block a recruiter reads to place the role, so it stays dense and factual.
const scopeIcons: Record<ScopeId, string> = {
  team: 'lucide:users',
  clients: 'lucide:handshake',
  contracts: 'lucide:file-signature',
  plan: 'lucide:chart-line',
  coordination: 'lucide:clipboard-list',
  market: 'lucide:compass',
};
const scopeOrder: ScopeId[] = ['team', 'clients', 'contracts', 'plan', 'coordination', 'market'];

// Three things stated as facts from her documents, not as claims about her.
const highlightIcons: Record<HighlightId, string> = {
  promotion: 'lucide:trending-up',
  print: 'lucide:printer',
  foundation: 'lucide:calculator',
};
const highlightOrder: HighlightId[] = ['promotion', 'print', 'foundation'];

export default function IndexPage() {
  const { locale, s } = useLocale();
  const { site, experience, education } = getProfile(locale);
  const current = experience[0];
  const counts = {
    position: current.position,
    company: current.company,
    location: site.location,
    sales: s.years(tenure.sales),
    print: s.years(tenure.print),
    leadership: s.years(tenure.leadership),
  };

  return (
    <>
      <PageMetaPart
        title={`${siteFacts.name} — ${s.home.metaTitle}`}
        description={fill(s.home.metaDescription, counts)}
      />

      {/* Profile. The masthead above carries the name at full size, so this
          opens with the role — the first thing a recruiter needs to place her.
          It sits directly under the menu, so it carries no top padding. */}
      <section className="pb-8">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div className="max-w-3xl min-w-0">
            <p className="kicker">{s.home.kicker}</p>
            <h1 className="title-page mt-2">{fill(s.home.heading, counts)}</h1>
            <p className="text-faint mt-3 text-sm">{fill(s.home.facts, counts)}</p>
            {s.home.paragraphs.map((p, i) => (
              <p
                key={p}
                className={cx(
                  'text-muted max-w-2xl text-lg leading-relaxed',
                  i === 0 ? 'mt-6' : 'mt-4',
                )}
              >
                {p}
              </p>
            ))}
            {/* One primary action — the CV — and two quiet ones. */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={cvHref(locale)}
                download={`${s.career.downloadFile}.pdf`}
                className="btn btn-primary"
              >
                <IconPart name="lucide:download" className="h-4 w-4" />
                {s.career.download}
              </a>
              <Link to={localePath(locale, '/career')} className="btn btn-ghost">
                <IconPart name="lucide:briefcase" className="h-4 w-4" />
                {s.home.ctaCareer}
              </Link>
              <Link to={localePath(locale, '/contact')} className="btn btn-ghost">
                <IconPart name="lucide:at-sign" className="h-4 w-4" />
                {s.home.ctaContact}
              </Link>
            </div>
          </div>
          {__HAS_PORTRAIT__ ? (
            <div className="mx-auto w-full max-w-52 sm:max-w-64 lg:mr-0 lg:ml-auto lg:w-72">
              <PortraitPart src="/portrait.jpg" alt={siteFacts.name} />
            </div>
          ) : (
            // A diagram with words in it needs more room than a photo does.
            <div className="mx-auto w-full max-w-80 sm:max-w-96 lg:mr-0 lg:ml-auto lg:w-[22rem] lg:max-w-none xl:w-[26rem]">
              <SalesCyclePart />
            </div>
          )}
        </div>
      </section>

      <section className="py-8">
        <p className="rule">
          <span className="kicker">{s.home.kickerScope}</span>
        </p>
        <dl className="divide-line border-line mt-6 divide-y border-y">
          {scopeOrder.map((id) => (
            <div key={id} className="grid gap-1 py-4 sm:grid-cols-[12rem_1fr] sm:gap-6">
              <dt className="title-item flex items-center gap-2.5">
                <IconPart name={scopeIcons[id]} className="text-label h-4.5 w-4.5 shrink-0" />
                {s.home.scope[id].term}
              </dt>
              <dd className="text-muted leading-relaxed">{s.home.scope[id].detail}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="py-8">
        <p className="rule">
          <span className="kicker">{s.home.kickerHighlights}</span>
        </p>
        <ol className="mt-6 space-y-6">
          {highlightOrder.map((id) => {
            const h = s.home.highlights[id];
            return (
              <li key={id} className="border-line-strong border-s-2 ps-4">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h2 className="title-item flex items-center gap-2.5">
                    <IconPart
                      name={highlightIcons[id]}
                      className="text-label h-4.5 w-4.5 shrink-0"
                    />
                    {fill(h.title, counts)}
                  </h2>
                  <span className="text-faint text-sm">{h.context}</span>
                </div>
                <p className="text-muted mt-2 max-w-3xl leading-relaxed">{h.body}</p>
              </li>
            );
          })}
        </ol>
      </section>

      {/* Roles and degrees straight from the profile data, so these lists
          cannot drift from the Career page. */}
      <section className="py-8">
        <p className="rule">
          <span className="kicker">{s.home.kickerBackground}</span>
        </p>
        <ul className="mt-6 space-y-3">
          {experience.map((r) => (
            <li key={r.id} className="grid gap-x-6 gap-y-1 sm:grid-cols-[8rem_1fr]">
              <span className="text-faint text-sm whitespace-nowrap tabular-nums sm:mt-0.5">
                {yearsOnly(r.period)}
              </span>
              <span className="flex items-start gap-2.5">
                <IconPart name={r.icon} className="text-label mt-1 h-4 w-4 shrink-0" />
                <span>
                  <span className="text-ink font-medium">{r.position}</span>
                  <span className="text-muted"> · {r.company}</span>
                </span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="py-8">
        <p className="rule">
          <span className="kicker">{s.home.kickerEducation}</span>
        </p>
        <ul className="mt-6 space-y-3">
          {education.map((e) => (
            <li key={e.id} className="grid gap-x-6 gap-y-1 sm:grid-cols-[8rem_1fr]">
              <span className="text-faint text-sm whitespace-nowrap tabular-nums sm:mt-0.5">
                {e.period}
              </span>
              <span>
                <span className="text-ink block font-medium">{e.degree}</span>
                <span className="text-muted block">{e.school}</span>
              </span>
            </li>
          ))}
        </ul>
        <p className="text-muted mt-8">
          {s.home.careerLink.before}
          <Link to={localePath(locale, '/career')} className="link-accent">
            {s.home.careerLink.link}
          </Link>
          {s.home.careerLink.after}
        </p>
      </section>

      {/* Closing band: the one place the accent fills a whole panel. Plain
          contact facts, nothing to decode — the same three the Contact page has. */}
      <section className="py-10">
        <div className="band px-8 py-12 text-center sm:px-12 sm:py-14">
          <h2 className="font-display text-3xl font-semibold text-balance sm:text-4xl">
            {s.contact.heading}
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${siteFacts.email}`} className="btn btn-inverse">
              <IconPart name="lucide:mail" className="h-4 w-4" />
              {siteFacts.email}
            </a>
            <a href={`tel:${siteFacts.phone.replace(/\s/g, '')}`} className="btn btn-inverse">
              <IconPart name="lucide:phone" className="h-4 w-4" />
              {siteFacts.phone}
            </a>
            <a href={siteFacts.linkedin} className="btn btn-inverse">
              <IconPart name="linkedin" className="h-4 w-4" />
              {s.header.linkedin}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
