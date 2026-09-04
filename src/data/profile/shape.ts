// The locale-invariant spine of the profile: what exists, in what order, and
// the facts that are the same in every language (brand names, tech, icons,
// contact details).
//
// Translated prose lives in ro.ts / en.ts, keyed by the IDs below. Because the
// text maps are typed `Record<RoleId, RoleText>`, a locale that forgets an
// entry is a TYPE ERROR — `npm run check` (the CI gate) catches drift between
// the two languages before it can ship.

export type RoleId = 'nshift' | 'consignor-manager' | 'consignor-lead' | 'teamnet' | 'ubisoft';
export type SkillId = 'leadership' | 'ai' | 'backend' | 'cloud' | 'frontend' | 'foundations';
export type ProjectId = 'conversational-ai' | 'app-builder' | 'webservices';
export type EducationId = 'msc' | 'bsc';

/** Facts that never change with language. */
export const siteFacts = {
  name: 'Simona Alina Grafu',
  email: 'simonaalinagrafu@gmail.com',
  phone: '+40 722 635 785',
  linkedin: 'https://www.linkedin.com/in/vasile-grafu-6a99369',
  github: 'https://github.com/simonaalinagrafu',
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
  tech?: string[];
  /** How many leading bullets describe the scope of the role (the teams run)
      rather than the work itself — the Career page emphasises those. */
  leadBullets?: number;
  /** How many bullets the resume PDF shows. Omit to show all. */
  pdfBullets?: number;
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
    id: 'nshift',
    company: 'nShift',
    icon: 'lucide:sparkles',
    tech: [
      'AI-assisted development (Claude Code)',
      'LLMs, Agents, RAG, MCP',
      'C# / .NET / ASP.NET Core',
      'Python / FastAPI / SQLAlchemy',
      'SQL Server / PostgreSQL',
      'AWS (EC2, ECS, RDS, S3)',
      'Docker, CI/CD',
      'JavaScript / TypeScript / ReactJS / Material UI',
    ],
  },
  {
    id: 'consignor-manager',
    company: 'Consignor',
    icon: 'lucide:globe',
    leadBullets: 2,
    tech: [
      'C# / .NET web services',
      'E-commerce platforms (WooCommerce, Klarna, Magento)',
      'APIs & integrations',
      'AWS',
      'Project management (Prince2)',
    ],
  },
  {
    id: 'consignor-lead',
    company: 'Consignor',
    icon: 'lucide:layers',
    tech: [
      'C# / .NET, ASP.NET MVC',
      'WCF web services',
      'SQL Server Enterprise',
      'JavaScript, jQuery, Bootstrap, LESS/SASS',
      'Python',
      'AWS',
    ],
  },
  {
    id: 'teamnet',
    company: 'TeamNet',
    icon: 'lucide:package',
    tech: ['C# / .NET', 'Windows Forms', 'SQL Server'],
  },
  {
    id: 'ubisoft',
    company: 'Ubisoft',
    icon: 'lucide:gamepad-2',
    tech: [
      'C++, STL',
      'Gameplay & platform modules',
      'Multithreaded rendering',
      'Software optimization',
      'Linear algebra, calculus, probabilities',
    ],
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
  { id: 'leadership', icon: 'lucide:users' },
  { id: 'ai', icon: 'lucide:brain' },
  { id: 'backend', icon: 'lucide:server' },
  { id: 'cloud', icon: 'lucide:cloud' },
  { id: 'frontend', icon: 'lucide:monitor' },
  { id: 'foundations', icon: 'lucide:sigma' },
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
  { id: 'msc', period: '2000 – 2002' },
  { id: 'bsc', period: '1995 – 2000' },
];

// --- Projects ---------------------------------------------------------------

export interface ProjectShape {
  id: ProjectId;
  tags: string[];
}

export interface ProjectText {
  title: string;
  role: string;
  description: string;
}

/** The first entry is the "Key project" printed on the resume PDF. */
export const projectShapes: ProjectShape[] = [
  {
    id: 'conversational-ai',
    tags: ['LLMs', 'Agents', 'RAG', 'MCP', 'Orchestration', 'Python'],
  },
  {
    id: 'app-builder',
    tags: ['Claude Code', 'Agent Skills', 'Code Generation', 'Static Analysis', 'Python'],
  },
  {
    id: 'webservices',
    tags: ['C# / .NET', 'AWS', 'SQL Server', 'PostgreSQL', 'Docker', 'CI/CD'],
  },
];

// --- The per-locale contract ------------------------------------------------

export interface ProfileText {
  site: SiteText;
  roles: Record<RoleId, RoleText>;
  skills: Record<SkillId, SkillText>;
  education: Record<EducationId, EducationText>;
  projects: Record<ProjectId, ProjectText>;
}
