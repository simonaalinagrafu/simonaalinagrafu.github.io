import IconPart from '@fx/components/IconPart';
import LinkCardPart from '@fx/components/LinkCardPart';
import { getProfile, siteFacts } from '@data/profile';
import PageMetaPart from '@modules/shared/PageMetaPart';
import { useLocale } from '@modules/shared/useLocale';

export default function ContactPage() {
  const { locale, s } = useLocale();
  const { site } = getProfile(locale);

  const telHref = `tel:${site.phone.replace(/\s/g, '')}`;
  const linkedinLabel = site.linkedin.replace('https://www.', '').replace(/\/$/, '');

  return (
    <>
      <PageMetaPart
        title={`${s.contact.metaTitle} — ${siteFacts.name}`}
        description={s.contact.metaDescription}
      />

      <p className="kicker">{s.contact.metaTitle}</p>
      <h1 className="title-page mt-2">{s.contact.heading}</h1>
      <p className="lede">{s.contact.lede}</p>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_20rem]">
        {/* min-w-0: a grid item will not shrink below its content otherwise,
            and the e-mail address would push the page wider than a phone. */}
        <div className="min-w-0 space-y-4">
          <LinkCardPart
            href={`mailto:${site.email}`}
            icon="lucide:mail"
            title={s.contact.email}
            subtitle={site.email}
          />
          <LinkCardPart
            href={telHref}
            icon="lucide:phone"
            title={s.contact.phone}
            subtitle={site.phone}
          />
          <LinkCardPart
            href={site.linkedin}
            icon="linkedin"
            title={s.contact.linkedin}
            subtitle={linkedinLabel}
          />
        </div>

        <aside className="card bg-tint h-fit p-6">
          <p className="rule">
            <span className="kicker">{s.contact.details}</span>
          </p>
          <ul className="text-muted mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <IconPart name="lucide:map-pin" className="text-label mt-0.5 h-4 w-4 shrink-0" />
              <span>{site.location}</span>
            </li>
            <li className="flex items-start gap-3">
              <IconPart name="lucide:clock" className="text-label mt-0.5 h-4 w-4 shrink-0" />
              <span>{s.contact.timezone}</span>
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
}
