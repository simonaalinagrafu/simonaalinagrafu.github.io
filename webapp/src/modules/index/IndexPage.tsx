import { Link } from 'react-router';
import IconPart from '@fx/components/IconPart';
import PortraitPart from '@fx/components/PortraitPart';
import StatTilePart from '@fx/components/StatTilePart';
import StepListPart from '@fx/components/StepListPart';
import { localePath } from '@fx/lib/i18n';
import { getProfile, siteFacts } from '@data/profile';
import type { DoingId, PrincipleId, ProcessId, StatId, ValueId } from '@i18n/types';
import PageMetaPart from '@modules/shared/PageMetaPart';
import { useLocale } from '@modules/shared/useLocale';

// The hero is built around a portrait. Drop public/portrait.jpg in and rebuild;
// until then the frame holds the space with initials (see vite.config.ts).
const monogram = siteFacts.name
  .split(' ')
  .map((word) => word[0])
  .join('');

// Display order and icons live here; the words live in the i18n dictionaries,
// keyed by the same ids — so neither can drift out of step with the other.

// Reach and practice: the one real figure (20+ years), then the shape of the
// work. Nothing here is a number that could be wrong.
const statOrder: StatId[] = ['years', 'b2b', 'team', 'accounts', 'stages', 'relationships'];

const doingIcons: Record<DoingId, string> = {
  team: 'lucide:users',
  accounts: 'lucide:handshake',
  pipeline: 'lucide:chart-line',
  negotiation: 'lucide:file-signature',
};
const doingOrder: DoingId[] = ['team', 'accounts', 'pipeline', 'negotiation'];

// The four-step way of working — the section that makes this a sales site.
const processOrder: ProcessId[] = ['listen', 'propose', 'negotiate', 'deliver'];

// Written from the employer's point of view rather than mine — one line each,
// stating a benefit rather than restating a fact the tiles above already carry.
const valueIcons: Record<ValueId, string> = {
  revenue: 'lucide:trending-up',
  retention: 'lucide:heart-handshake',
  team: 'lucide:sprout',
  pipeline: 'lucide:gauge',
  relationships: 'lucide:handshake',
  process: 'lucide:clipboard-list',
};
const valueOrder: ValueId[] = [
  'revenue',
  'retention',
  'team',
  'pipeline',
  'relationships',
  'process',
];

// What keeps me in this work, as opposed to what I am paid to do.
const principleIcons: Record<PrincipleId, string> = {
  trust: 'lucide:heart-handshake',
  listen: 'lucide:compass',
  team: 'lucide:users',
  results: 'lucide:target',
};
const principleOrder: PrincipleId[] = ['trust', 'listen', 'team', 'results'];

export default function IndexPage() {
  const { locale, s } = useLocale();
  const { site, experience } = getProfile(locale);
  const current = experience[0];

  return (
    <>
      <PageMetaPart title={`${siteFacts.name} — ${s.home.metaTitle}`} description={site.tagline} />

      {/* Hero: greeting, headline and one paragraph on the left, the portrait on
          the right. It opens the page directly under the menu, so it carries no
          top padding of its own. Contact is the primary action — this is a sales
          site. */}
      <section className="pb-6 sm:pb-10">
        {/* The portrait column is sized to the portrait and pushed to the right
            edge, so the text column takes the slack instead of it turning into a
            gap in the middle. */}
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div>
            {/* The name and the role line are the masthead's job on every page,
                so the hero says neither: the greeting is first-name only and the
                h1 states the work. Nothing on this page is said twice. */}
            <p className="text-accent font-medium">{s.home.greeting}</p>
            <h1 className="title-hero mt-2 max-w-3xl">{s.home.headline}</h1>
            <p className="text-muted mt-6 max-w-2xl text-lg leading-relaxed">{site.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to={localePath(locale, '/contact')} className="btn btn-primary">
                {s.home.ctaContact}
              </Link>
              <Link to={localePath(locale, '/career')} className="btn btn-ghost">
                {s.home.ctaCareer}
              </Link>
            </div>
          </div>
          <div className="mx-auto w-full max-w-52 sm:max-w-64 lg:mr-0 lg:ml-auto lg:w-72">
            <PortraitPart
              src={__HAS_PORTRAIT__ ? '/portrait.jpg' : undefined}
              alt={siteFacts.name}
              initials={monogram}
            />
          </div>
        </div>
      </section>

      <section className="py-8">
        <p className="rule">
          <span className="kicker">{s.home.kickerReach}</span>
        </p>
        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 sm:gap-x-10">
          {statOrder.map((id) => (
            <StatTilePart
              key={id}
              value={s.home.stats[id].value}
              label={s.home.stats[id].label}
              bare
            />
          ))}
        </div>
      </section>

      <section className="py-8">
        <p className="rule">
          <span className="kicker">{s.home.kickerDoing}</span>
        </p>
        {/* A list on hairlines rather than a card grid. */}
        <div className="mt-6 grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {doingOrder.map((id) => (
            <div key={id} className="border-line border-t pt-6">
              <div>
                <div className="flex items-center gap-2.5">
                  <IconPart name={doingIcons[id]} className="text-label h-4.5 w-4.5" />
                  <h2 className="title-item">{s.home.doing[id].title}</h2>
                </div>
                <p className="text-muted mt-2 text-sm leading-relaxed">
                  {s.home.doing[id].body.replace('{company}', current.company)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-8">
        <p className="rule">
          <span className="kicker">{s.home.kickerProcess}</span>
        </p>
        <h2 className="title-section mt-4">{s.home.headingProcess}</h2>
        <div className="mt-8">
          <StepListPart steps={processOrder.map((id) => s.home.process[id])} />
        </div>
      </section>

      <section className="py-8">
        <p className="rule">
          <span className="kicker">{s.home.kickerWorking}</span>
        </p>
        <h2 className="title-section mt-4">{s.home.headingWorking}</h2>
        {/* The only panel on a page of rules and lists — that shape is enough to
            mark the zone, so the colour stays out of it. */}
        <div className="bg-tint border-line mt-6 grid gap-8 rounded-2xl border p-8 sm:grid-cols-2 lg:grid-cols-3">
          {valueOrder.map((id) => (
            <div key={id}>
              <div className="icon-tile">
                <IconPart name={valueIcons[id]} className="h-4 w-4" />
              </div>
              <h3 className="font-display text-ink mt-4 text-lg font-semibold">
                {s.home.value[id].title}
              </h3>
              <p className="text-muted mt-1.5 text-sm leading-relaxed">{s.home.value[id].body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-8">
        <p className="rule">
          <span className="kicker">{s.home.kickerPrinciples}</span>
        </p>
        <h2 className="title-section mt-4">{s.home.headingPrinciples}</h2>
        <div className="mt-8 grid gap-x-12 gap-y-9 sm:grid-cols-2">
          {principleOrder.map((id) => (
            <div key={id} className="flex gap-4">
              <IconPart name={principleIcons[id]} className="text-label mt-1 h-5 w-5 shrink-0" />
              <div>
                <h3 className="font-display text-ink text-lg font-semibold">
                  {s.home.principles[id].title}
                </h3>
                <p className="text-muted mt-1.5 text-sm leading-relaxed">
                  {s.home.principles[id].body}
                </p>
              </div>
            </div>
          ))}
        </div>
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
