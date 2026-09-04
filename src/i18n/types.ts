// The UI string contract. ro.ts and en.ts both implement it, so a missing
// translation is a type error rather than a half-English page.
//
// Structured page content (stat tiles, capability cards, principles) is keyed
// by id rather than ordered, so the icons that pair with it in the page cannot
// silently fall out of step the way a positional array can.

export type NavId = 'home' | 'career' | 'skills' | 'articles' | 'contact';
export type ThemeId = 'light' | 'dark' | 'emerald' | 'sepia';
export type StatId = 'years' | 'apps' | 'requests' | 'phases' | 'aiSystems' | 'aiAssisted';
export type DoingId = 'engineering' | 'leadership' | 'aiAssisted' | 'aiSystems';
export type ValueId = 'ship' | 'build' | 'handoff' | 'ai' | 'load' | 'grow';
export type PrincipleId = 'curiosity' | 'evolution' | 'teams' | 'impact';
export type CareerStatId = 'years' | 'leading' | 'companies';

export interface TitledBody {
  title: string;
  body: string;
}

export interface UiStrings {
  /** Value for <html lang>. */
  htmlLang: string;
  /** Name of this language, in this language — for the switcher. */
  localeName: string;
  /** Two-letter form shown on the switcher button. */
  localeShort: string;
  /** BCP-47 tag for date formatting. */
  dateLocale: string;
  /** og:locale value. */
  ogLocale: string;

  nav: Record<NavId, string>;
  themes: Record<ThemeId, string>;

  header: {
    changeTheme: string;
    changeThemeTip: string;
    changeLanguage: string;
    changeLanguageTip: string;
    openMenu: string;
    closeMenu: string;
    email: string;
    emailTip: string;
    github: string;
    githubTip: string;
    linkedin: string;
    linkedinTip: string;
  };

  footer: {
    blurb: string;
    rss: string;
  };

  home: {
    metaTitle: string;
    greeting: string;
    ctaCareer: string;
    ctaWriting: string;
    kickerReach: string;
    kickerDoing: string;
    kickerWorking: string;
    kickerPrinciples: string;
    headingWorking: string;
    headingPrinciples: string;
    stats: Record<StatId, { value: string; label: string }>;
    /** `engineering.body` may contain the token {company}. */
    doing: Record<DoingId, TitledBody>;
    value: Record<ValueId, TitledBody>;
    principles: Record<PrincipleId, TitledBody>;
  };

  career: {
    metaTitle: string;
    metaDescription: string;
    kicker: string;
    heading: string;
    lede: string;
    download: string;
    /** Filename for the downloaded PDF, without extension. */
    downloadFile: string;
    stats: Record<CareerStatId, string>;
    education: string;
    /** Accessible name for the company timeline ribbon. */
    timeline: string;
  };

  skills: {
    metaTitle: string;
    metaDescription: string;
    kicker: string;
    heading: string;
    lede: string;
  };

  articles: {
    metaTitle: string;
    metaDescription: string;
    /** RSS channel title suffix, after the site name. */
    feedTitle: string;
    kicker: string;
    heading: string;
    ledeBefore: string;
    ledeRssLink: string;
    ledeAfter: string;
    back: string;
  };

  contact: {
    metaTitle: string;
    metaDescription: string;
    heading: string;
    lede: string;
    email: string;
    linkedin: string;
    linkedinSubtitle: string;
    timezone: string;
  };

  notFound: {
    metaTitle: string;
    message: string;
    back: string;
  };

  resume: {
    summary: string;
    skills: string;
    experience: string;
    keyProject: string;
    education: string;
    tech: string;
    /** Read in the first few seconds — figures rather than prose. */
    highlights: string[];
  };
}
