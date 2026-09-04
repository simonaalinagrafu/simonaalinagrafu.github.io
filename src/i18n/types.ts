// The UI string contract. ro.ts and en.ts both implement it, so a missing
// translation is a type error rather than a half-English page.
//
// Structured page content (stat tiles, capability cards, principles) is keyed
// by id rather than ordered, so the icons that pair with it in the page cannot
// silently fall out of step the way a positional array can.

export type NavId = 'home' | 'career' | 'skills' | 'contact';
export type ThemeId = 'cream' | 'night' | 'forest' | 'marine';
export type StatId = 'years' | 'b2b' | 'team' | 'accounts' | 'stages' | 'relationships';
export type DoingId = 'team' | 'accounts' | 'pipeline' | 'negotiation';
export type ValueId = 'revenue' | 'retention' | 'team' | 'pipeline' | 'relationships' | 'process';
export type PrincipleId = 'trust' | 'listen' | 'team' | 'results';
export type ProcessId = 'listen' | 'propose' | 'negotiate' | 'deliver';
export type CareerStatId = 'years' | 'everest' | 'companies';

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
    linkedin: string;
    linkedinTip: string;
  };

  footer: {
    blurb: string;
  };

  home: {
    metaTitle: string;
    /** Whole line — the name is in the masthead, so it is not repeated here. */
    greeting: string;
    /** Hero h1: what she does, not who she is. The masthead carries the name. */
    headline: string;
    ctaCareer: string;
    ctaContact: string;
    kickerReach: string;
    kickerDoing: string;
    kickerWorking: string;
    kickerPrinciples: string;
    kickerProcess: string;
    headingWorking: string;
    headingPrinciples: string;
    headingProcess: string;
    stats: Record<StatId, { value: string; label: string }>;
    /** `team.body` may contain the token {company}. */
    doing: Record<DoingId, TitledBody>;
    value: Record<ValueId, TitledBody>;
    principles: Record<PrincipleId, TitledBody>;
    /** The four-step way of working — the section that makes this a sales site. */
    process: Record<ProcessId, TitledBody>;
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
    /** Short word for the open end of the current role on the ribbon. */
    now: string;
    /** Tag shown on roles still marked `placeholder` in the data. */
    placeholderTag: string;
  };

  skills: {
    metaTitle: string;
    metaDescription: string;
    kicker: string;
    heading: string;
    lede: string;
  };

  contact: {
    metaTitle: string;
    metaDescription: string;
    heading: string;
    lede: string;
    email: string;
    linkedin: string;
    phone: string;
    phoneSubtitle: string;
    /** Heading of the location/timezone aside. */
    details: string;
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
    keyAchievement: string;
    education: string;
    /** Closing line of the CV — licence, languages, and the like. */
    other: string;
    /** Label for the areas-of-responsibility line under a role. */
    focus: string;
    /** Read in the first few seconds — short, concrete lines. */
    highlights: string[];
  };
}
