// Phone / Mail / LinkedIn icon links shown in the header. The phone link is a
// tel: URL, so on a phone one tap starts the call.
import IconPart from '@fx/components/IconPart';
import { siteFacts } from '@data/profile';
import { useLocale } from './useLocale';

const telHref = `tel:${siteFacts.phone.replace(/\s/g, '')}`;

export default function SocialLinksPart() {
  const { s } = useLocale();
  return (
    <div className="text-faint flex items-center gap-2.5 sm:gap-3">
      <a
        href={telHref}
        aria-label={`${s.header.phone}: ${siteFacts.phone}`}
        data-tip={siteFacts.phone}
        className="tip hover:text-accent"
      >
        <IconPart name="lucide:phone" className="h-4.5 w-4.5" />
      </a>
      <a
        href={`mailto:${siteFacts.email}`}
        aria-label={s.header.email}
        data-tip={s.header.emailTip}
        className="tip hover:text-accent"
      >
        <IconPart name="lucide:mail" className="h-4.5 w-4.5" />
      </a>
      <a
        href={siteFacts.linkedin}
        aria-label={s.header.linkedin}
        data-tip={s.header.linkedinTip}
        className="tip hover:text-accent"
      >
        <IconPart name="linkedin" className="h-4.5 w-4.5" />
      </a>
    </div>
  );
}
