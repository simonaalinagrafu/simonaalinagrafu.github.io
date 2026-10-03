// Portrait frame for the hero: a 4:5 photo with the paper offset shadow.
import { cx } from '../lib/cx';

interface Props {
  src: string;
  alt: string;
  className?: string;
}

export default function PortraitPart({ src, alt, className }: Props) {
  return (
    <div className={cx('portrait', className)}>
      <img
        src={src}
        alt={alt}
        width="900"
        height="1125"
        loading="eager"
        decoding="async"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
