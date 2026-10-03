// The locale-invariant spine of the profile: what exists, in what order, and
// the facts that are the same in every language (company names, icons, dates
// the year counts start from, contact details).
//
// Translated prose lives in ro.ts / en.ts, keyed by the IDs below. Because the
// text maps are typed `Record<RoleId, RoleText>`, a locale that forgets an
// entry is a TYPE ERROR — the type check in `npm run build` (a CI gate) catches
// drift between the two languages before it can ship.
//
// SOURCES. Everything here traces to a document, transcribed in the private
// folder simonaalinagrafu.github.io__data_source/ beside this repository:
// - 1997–2002 (Euromobex, Delta Distribution, Neweuropetrolgaz, Rodata): her
//   own CVs from 2003, in Romanian and English;
// - Tipografia Everest: her employment contract addendum of 21.04.2015 and the
//   job descriptions for both of her roles there, plus two duties (reporting
//   cadence, marketing) from her own LinkedIn "About";
// - RH Printing (2003–2012) and the journalism degree: her LinkedIn profile
//   (linkedin.com/in/simona-deliu-413a5b2b) — title and dates only. No document
//   covers the RH Printing years, so its text says no more than the title and
//   the company imply — see SETUP.md §7.
// - Company descriptions: her CVs and the companies' own sites, checked
//   October 2026. Press claims are left out.
// No figures are invented: counts are derived from the dates below.

export type RoleId =
  | 'everest-head'
  | 'everest-rep'
  | 'rh-printing'
  | 'rodata'
  | 'neweuropetrolgaz'
  | 'delta'
  | 'euromobex';
export type SkillId =
  | 'sales-office'
  | 'client-portfolio'
  | 'offers-contracts'
  | 'new-business'
  | 'planning-reporting'
  | 'print-packaging'
  | 'marketing'
  | 'finance-trade'
  | 'personal';
export type AchievementId = 'promotion';
export type EducationId = 'journalism' | 'marketing';
export type ExtraId = 'languages' | 'office' | 'licence';

/** Facts that never change with language. */
export const siteFacts = {
  name: 'Simona Alina Grafu',
  email: 'simonaalinagrafu@gmail.com',
  phone: '+40 726 704 058',
  linkedin: 'https://www.linkedin.com/in/simona-deliu-413a5b2b/',
  url: 'https://simonaalinagrafu.github.io',
};

/**
 * The years every tenure figure counts from, so the home page, the Career
 * page and the CV cannot disagree or go stale (see `yearsSince` in index.ts):
 * - sales: August 2000, the sales & marketing role at Neweuropetrolgaz — the
 *   first with offers, contracts and clients of her own;
 * - print: April 2001, Rodata — printing and packaging ever since;
 * - leadership: April 2015, head of the sales office at Tipografia Everest.
 */
export const salesStart = 2000;
export const printStart = 2001;
export const leadershipStart = 2015;

export interface SiteText {
  /** Headline role line under the name. */
  title: string;
  /** Two-segment form of `title`, for the masthead where space is tight. */
  titleShort: string;
  /** Short form — meta/OG description. Keep near 160 chars. */
  tagline: string;
  /** Long form — the summary at the top of the CV. */
  intro: string;
  location: string;
}

// --- Experience -------------------------------------------------------------

export interface RoleShape {
  id: RoleId;
  company: string;
  /** Lucide icon for the Career timeline and the home page's Background list.
      Lives here so it can never fall out of step with the role, the way a
      positional array can. */
  icon: string;
  /** How many leading bullets describe the scope of the role (the people
      coordinated) rather than the work itself — the Career page emphasises those. */
  leadBullets?: number;
}

export interface RoleText {
  position: string;
  period: string;
  location: string;
  /**
   * The one line a skimming reader should take away — the scope of the role.
   * Career page only; the PDF stays as it is.
   */
  impact?: string;
  /** What the company is. Career page only — the PDF uses `aboutShort`. */
  about?: string;
  /** One line of company context for the resume, where `about` is too long. */
  aboutShort?: string;
  /** What was done there. Some roles are carried by their bullets alone. */
  summary?: string;
  /** "Lead-in: detail" form; ordered most important first. */
  bullets: string[];
  /** Areas of responsibility — chips under the role, and a "Focus" line on the PDF. */
  focus?: string[];
}

/**
 * Ordered most recent first — this is the Career page and PDF order. A
 * promotion inside one company is its own entry, so each title keeps its own
 * dates and duties.
 */
export const roleShapes: RoleShape[] = [
  {
    id: 'everest-head',
    company: 'Tipografia Everest',
    icon: 'lucide:users',
    leadBullets: 3,
  },
  { id: 'everest-rep', company: 'Tipografia Everest', icon: 'lucide:briefcase' },
  { id: 'rh-printing', company: 'RH Printing', icon: 'lucide:printer' },
  { id: 'rodata', company: 'Rodata', icon: 'lucide:handshake' },
  { id: 'neweuropetrolgaz', company: 'Neweuropetrolgaz', icon: 'lucide:chart-line' },
  { id: 'delta', company: 'Delta Distribution', icon: 'lucide:megaphone' },
  { id: 'euromobex', company: 'Euromobex', icon: 'lucide:calculator' },
];

// --- Skills -----------------------------------------------------------------

export interface SkillShape {
  id: SkillId;
  /** Lucide icon, used on the Skills page. The PDF ignores it. */
  icon: string;
  /**
   * The roles this group was practised in — its evidence. The Skills page
   * derives "Since <year> · <companies>" from them, so a skill is never
   * claimed without a role behind it. Omitted for personal strengths.
   */
  roles?: RoleId[];
}

export interface SkillText {
  group: string;
  /** One-line intro, Skills page only. */
  blurb: string;
  items: string[];
}

/**
 * Each group is fed by what she did: `roles` names the jobs whose documented
 * duties contain it (see the sources at the top of this file). RH Printing has
 * no document behind it, so it counts only where the title and the company
 * leave no doubt — the client portfolio and the print itself.
 */
export const skillShapes: SkillShape[] = [
  { id: 'sales-office', icon: 'lucide:users', roles: ['everest-head'] },
  {
    id: 'client-portfolio',
    icon: 'lucide:handshake',
    roles: ['rodata', 'rh-printing', 'everest-rep', 'everest-head'],
  },
  {
    id: 'offers-contracts',
    icon: 'lucide:file-signature',
    roles: ['neweuropetrolgaz', 'rodata', 'everest-rep', 'everest-head'],
  },
  {
    id: 'new-business',
    icon: 'lucide:target',
    roles: ['everest-rep', 'everest-head'],
  },
  {
    id: 'planning-reporting',
    icon: 'lucide:chart-line',
    roles: ['neweuropetrolgaz', 'rodata', 'everest-rep', 'everest-head'],
  },
  {
    id: 'print-packaging',
    icon: 'lucide:printer',
    roles: ['rodata', 'rh-printing', 'everest-rep', 'everest-head'],
  },
  {
    id: 'marketing',
    icon: 'lucide:megaphone',
    roles: ['delta', 'neweuropetrolgaz', 'everest-head'],
  },
  {
    id: 'finance-trade',
    icon: 'lucide:calculator',
    roles: ['euromobex', 'neweuropetrolgaz', 'everest-rep', 'everest-head'],
  },
  { id: 'personal', icon: 'lucide:user-round' },
];

// --- Education --------------------------------------------------------------

export interface EducationShape {
  id: EducationId;
  /** Years only — no words, so it needs no translation. */
  period: string;
}

export interface EducationText {
  school: string;
  degree: string;
}

export const educationShapes: EducationShape[] = [
  { id: 'journalism', period: '2010 – 2012' },
  { id: 'marketing', period: '1993 – 1997' },
];

// --- Achievements -----------------------------------------------------------

export interface AchievementShape {
  id: AchievementId;
}

export interface AchievementText {
  title: string;
  role: string;
  description: string;
}

/** The first entry is the "Key achievement" printed on the resume PDF. */
export const achievementShapes: AchievementShape[] = [{ id: 'promotion' }];

// --- Other facts ------------------------------------------------------------

export interface ExtraShape {
  id: ExtraId;
  /** Lucide icon for the chip on the Skills page. The PDF ignores it. */
  icon: string;
}

/** The closing facts — the "Other" line of the CV and the chips under Skills. */
export const extraShapes: ExtraShape[] = [
  { id: 'languages', icon: 'lucide:languages' },
  { id: 'office', icon: 'lucide:monitor' },
  { id: 'licence', icon: 'lucide:car' },
];

// --- The per-locale contract ------------------------------------------------

export interface ProfileText {
  site: SiteText;
  extras: Record<ExtraId, string>;
  roles: Record<RoleId, RoleText>;
  skills: Record<SkillId, SkillText>;
  education: Record<EducationId, EducationText>;
  achievements: Record<AchievementId, AchievementText>;
}
