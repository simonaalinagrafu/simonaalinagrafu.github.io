// The locale-invariant spine of the profile: what exists, in what order, and
// the facts that are the same in every language (company names, icons,
// contact details).
//
// Translated prose lives in ro.ts / en.ts, keyed by the IDs below. Because the
// text maps are typed `Record<RoleId, RoleText>`, a locale that forgets an
// entry is a TYPE ERROR — `npm run check` (the CI gate) catches drift between
// the two languages before it can ship.
//
// SOURCES. The six roles — employers, titles and dates — come from Simona's
// LinkedIn profile (linkedin.com/in/simona-deliu-413a5b2b). The prose under
// each role is drafted and awaits her own wording. Entries still marked
// `placeholder: true` are the parts nothing confirmed yet: the three
// achievements. Education is from LinkedIn too. index.ts warns about them at build time
// and refuses to build under CI, so they cannot be deployed by accident;
// bracketed text on the page marks the same thing.

export type RoleId = 'everest' | 'rh-printing' | 'rodata' | 'europetrolgaz' | 'delta' | 'euromobex';
export type SkillId =
  | 'sales-leadership'
  | 'key-accounts'
  | 'negotiation'
  | 'pipeline'
  | 'tools'
  | 'business'
  | 'personal';
export type AchievementId = 'portfolio' | 'team' | 'accounts-system';
export type EducationId = 'journalism' | 'marketing';

/** Facts that never change with language. */
export const siteFacts = {
  name: 'Simona Alina Grafu',
  email: 'simonaalinagrafu@gmail.com',
  phone: '+40 726 704 058',
  linkedin: 'https://www.linkedin.com/in/simona-deliu-413a5b2b/',
  url: 'https://simonaalinagrafu.github.io',
};

export interface SiteText {
  /** Headline role line under the name. */
  title: string;
  /** Short form — meta/OG description and the resume PDF. Keep near 160 chars. */
  tagline: string;
  /** Long form, home hero only. */
  intro: string;
  location: string;
}

// --- Experience -------------------------------------------------------------

export interface RoleShape {
  id: RoleId;
  company: string;
  /** Lucide icon for the Career timeline. Lives here so it can never fall out
      of step with the role, the way a positional array can. */
  icon: string;
  /** Areas of responsibility — shown as chips under the role and as a
      "Focus" line on the PDF. */
  focus?: string[];
  /** How many leading bullets describe the scope of the role (the teams run)
      rather than the work itself — the Career page emphasises those. */
  leadBullets?: number;
  /** How many bullets the resume PDF shows. Omit to show all. */
  pdfBullets?: number;
  /** Imagined stand-in, not yet confirmed. See the note at the top. */
  placeholder?: true;
}

export interface RoleText {
  position: string;
  period: string;
  location: string;
  /** What the company is. Career page only — the PDF uses `aboutShort`. */
  about?: string;
  /** One line of company context for the resume, where `about` is too long. */
  aboutShort?: string;
  /** What was done there. Some roles are carried by their bullets alone. */
  summary?: string;
  bullets: string[];
}

/** Ordered most recent first — this is the Career page and PDF order. */
export const roleShapes: RoleShape[] = [
  {
    id: 'everest',
    company: 'Tipografia Everest',
    icon: 'lucide:briefcase',
    leadBullets: 1,
    focus: ['B2B', 'Key accounts', 'Sales team', 'Forecasting', 'Negotiation', 'CRM'],
  },
  {
    id: 'rh-printing',
    company: 'RH Printing',
    icon: 'lucide:printer',
    focus: ['B2B', 'Print', 'Key accounts', 'Quotes', 'Production'],
  },
  {
    id: 'rodata',
    company: 'Rodata',
    icon: 'lucide:handshake',
    focus: ['B2B', 'Accounts', 'Negotiation'],
  },
  {
    id: 'europetrolgaz',
    company: 'Europetrolgaz',
    icon: 'lucide:phone-call',
    focus: ['Field sales', 'Prospecting'],
  },
  {
    id: 'delta',
    company: 'Delta Distribution',
    icon: 'lucide:megaphone',
    focus: ['Marketing', 'Distribution', 'B2B'],
  },
  {
    id: 'euromobex',
    company: 'Euromobex',
    icon: 'lucide:phone-call',
    focus: ['Field sales', 'Prospecting'],
  },
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
  { id: 'tools', icon: 'lucide:clipboard-list' },
  { id: 'business', icon: 'lucide:calculator' },
  { id: 'personal', icon: 'lucide:user-round' },
];

// --- Education --------------------------------------------------------------

export interface EducationShape {
  id: EducationId;
  /** Years only — no words, so it needs no translation. */
  period: string;
  placeholder?: true;
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
  tags: string[];
  placeholder?: true;
}

export interface AchievementText {
  title: string;
  role: string;
  description: string;
}

/** The first entry is the "Key achievement" printed on the resume PDF. */
export const achievementShapes: AchievementShape[] = [
  {
    id: 'portfolio',
    tags: ['B2B', 'Key accounts', 'Retention', 'Growth'],
    placeholder: true,
  },
  {
    id: 'team',
    tags: ['Hiring', 'Coaching', 'Targets', 'Process'],
    placeholder: true,
  },
  {
    id: 'accounts-system',
    tags: ['CRM', 'Pipeline', 'Forecasting'],
    placeholder: true,
  },
];

// --- The per-locale contract ------------------------------------------------

export interface ProfileText {
  site: SiteText;
  /** Short facts for the CV's closing "Other" line — licence, languages, and the like. */
  extras: string[];
  roles: Record<RoleId, RoleText>;
  skills: Record<SkillId, SkillText>;
  education: Record<EducationId, EducationText>;
  achievements: Record<AchievementId, AchievementText>;
}
