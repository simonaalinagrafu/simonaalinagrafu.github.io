// Portrait frame for the hero: a 4:5 photo with the paper offset shadow. When
// no `src` is given it holds the space with initials on a warm block, so the
// page lays out identically before and after the photo arrives.
import { cx } from '../lib/cx';

interface Props {
  src?: string;
  alt: string;
  initials: string;
  className?: string;
}

export default function PortraitPart({ src, alt, initials, className }: Props) {
  return (
    <div className={cx('portrait', className)}>
      {src ? (
        <img
          src={src}
          alt={alt}
          width="900"
          height="1125"
          loading="eager"
          decoding="async"
          className="h-full w-full object-cover"
        />
      ) : (
        <div
          className="bg-label-soft flex h-full w-full items-center justify-center"
          role="img"
          aria-label={alt}
        >
          <span className="font-display text-label text-7xl font-semibold">{initials}</span>
        </div>
      )}
    </div>
  );
}
