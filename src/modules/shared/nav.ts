// Navigation structure. Labels live in the i18n dictionaries, keyed by `id`;
// hrefs here are locale-free and get prefixed at render by localePath().
import type { NavId } from '@i18n/types';

export interface NavItem {
  id: NavId;
  href: string;
  icon: string;
}

export const navItems: NavItem[] = [
  { id: 'home', href: '/', icon: 'lucide:user' },
  { id: 'career', href: '/career/', icon: 'lucide:briefcase' },
  { id: 'skills', href: '/skills/', icon: 'lucide:wrench' },
  { id: 'articles', href: '/articles/', icon: 'lucide:file-text' },
  { id: 'contact', href: '/contact/', icon: 'lucide:at-sign' },
];
