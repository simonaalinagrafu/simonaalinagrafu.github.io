// Icon by name. Names keep the `lucide:<kebab-name>` form used throughout the
// content files (shape.ts, nav.ts), resolved here to lucide-react components.
// Only the icons the site uses are registered, so the bundle stays tree-shaken.
// LinkedIn is no longer shipped by Lucide; it is drawn inline here as the
// filled logo the site has always used.
import type { ComponentType, SVGProps } from 'react';
import {
  AtSign,
  Banknote,
  Briefcase,
  Calculator,
  Car,
  ChartLine,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Clock,
  Compass,
  Download,
  FileSignature,
  FileText,
  Gauge,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Languages,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  MessagesSquare,
  Monitor,
  Palette,
  Phone,
  PhoneCall,
  Printer,
  Search,
  Sprout,
  Target,
  TrendingUp,
  User,
  UserRound,
  Users,
  Wrench,
  X,
} from 'lucide-react';

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

function Linkedin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const registry: Record<string, IconComponent> = {
  'lucide:at-sign': AtSign,
  'lucide:banknote': Banknote,
  'lucide:briefcase': Briefcase,
  'lucide:calculator': Calculator,
  'lucide:car': Car,
  'lucide:chart-line': ChartLine,
  'lucide:check': Check,
  'lucide:chevron-down': ChevronDown,
  'lucide:chevron-left': ChevronLeft,
  'lucide:chevron-right': ChevronRight,
  'lucide:clipboard-list': ClipboardList,
  'lucide:clock': Clock,
  'lucide:compass': Compass,
  'lucide:download': Download,
  'lucide:file-signature': FileSignature,
  'lucide:file-text': FileText,
  'lucide:gauge': Gauge,
  'lucide:graduation-cap': GraduationCap,
  'lucide:handshake': Handshake,
  'lucide:heart-handshake': HeartHandshake,
  'lucide:languages': Languages,
  'lucide:mail': Mail,
  'lucide:map-pin': MapPin,
  'lucide:megaphone': Megaphone,
  'lucide:menu': Menu,
  'lucide:messages-square': MessagesSquare,
  'lucide:monitor': Monitor,
  'lucide:palette': Palette,
  'lucide:phone': Phone,
  'lucide:phone-call': PhoneCall,
  'lucide:printer': Printer,
  'lucide:search': Search,
  'lucide:sprout': Sprout,
  'lucide:target': Target,
  'lucide:trending-up': TrendingUp,
  'lucide:user': User,
  'lucide:user-round': UserRound,
  'lucide:users': Users,
  'lucide:wrench': Wrench,
  'lucide:x': X,
  linkedin: Linkedin,
};

interface Props extends SVGProps<SVGSVGElement> {
  name: string;
}

export default function IconPart({ name, ...rest }: Props) {
  const Icon = registry[name];
  if (!Icon) {
    if (import.meta.env.DEV) console.warn(`IconPart: unknown icon "${name}"`);
    return null;
  }
  return <Icon aria-hidden="true" {...rest} />;
}
