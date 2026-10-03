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
//   job descriptions for both of her roles there;
// - RH Printing (2003–2012) and the journalism degree: her LinkedIn profile
//   (linkedin.com/in/simona-deliu-413a5b2b). The RH Printing prose is still
//   drafted and awaits her wording — see SETUP.md §7.
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
  | 'sales-leadership'
  | 'key-accounts'
  | 'negotiation'
  | 'pipeline'
  | 'tools'
  | 'business'
  | 'personal';
export type AchievementId = 'promotion';
export type EducationId = 'journalism' | 'marketing';
export type ExtraId = 'languages' | 'licence';

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
  /** How many bullets the resume PDF shows. Omit to show all. */
  pdfBullets?: number;
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
  /** "Lead-in: detail" form; ordered most resume-worthy first. */
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
    pdfBullets: 4,
  },
  { id: 'everest-rep', company: 'Tipografia Everest', icon: 'lucide:briefcase', pdfBullets: 4 },
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
}

export interface SkillText {
  group: string;
  /** One-line intro, Skills page only. */
  blurb: string;
  items: string[];
}

export const skillShapes: SkillShape[] = [
  { id: 'sales-leadership', icon: 'lucide:users' },
  { id: 'key-accounts', icon: 'lucide:handshake' },
  { id: 'negotiation', icon: 'lucide:file-signature' },
  { id: 'pipeline', icon: 'lucide:chart-line' },
  { id: 'business', icon: 'lucide:calculator' },
  { id: 'tools', icon: 'lucide:clipboard-list' },
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
