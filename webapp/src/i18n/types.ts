// The UI string contract. ro.ts and en.ts both implement it, so a missing
// translation is a type error rather than a half-English page.
//
// Structured page content (the home page's scope list and highlights) is keyed
// by id rather than ordered, so the icons that pair with it in the page cannot
// silently fall out of step the way a positional array can.
//
// Strings marked "template" may contain {tokens}, filled in by the page with
// fill() from @fx/lib/fill — counts are derived from dates (see
// data/profile/shape.ts), so no figure is ever typed into a dictionary.

export type NavId = 'home' | 'career' | 'skills' | 'contact';
export type ThemeId = 'cream' | 'forest' | 'marine';
export type ScopeId = 'team' | 'clients' | 'contracts' | 'plan' | 'coordination' | 'market';
export type HighlightId = 'promotion' | 'print' | 'foundation';
export type CareerStatId = 'sales' | 'print' | 'leadership';

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
  /** A count of years as a phrase: "26 years", "26 de ani" — grammar differs per language. */
  years: (n: number) => string;

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
    /** Accessible name of the phone-only page pager under the menu. */
    pager: string;
    /** Prefix for the pager's arrow labels, e.g. "Previous page: Career". */
    prevPage: string;
    nextPage: string;
  };

  footer: {
    blurb: string;
  };

  home: {
    metaTitle: string;
    /** Template: {position}, {company}, {sales}, {leadership}. */
    metaDescription: string;
    kicker: string;
    /** Template, the hero h1: {position}, {company}. The masthead carries the name. */
    heading: string;
    /** Template, the line under the h1: {location}, {sales}, {leadership}. */
    facts: string;
    /** The hero paragraphs, in order. */
    paragraphs: string[];
    ctaCareer: string;
    ctaContact: string;
    kickerScope: string;
    /** What the current role owns — a labelled list, dense and factual. */
    scope: Record<ScopeId, { term: string; detail: string }>;
    kickerHighlights: string;
    /** `title` is a template: {print}. */
    highlights: Record<HighlightId, { title: string; context: string; body: string }>;
    kickerBackground: string;
    kickerEducation: string;
    /** "…on the [Career] page." — split so the middle can be a link. */
    careerLink: { before: string; link: string; after: string };
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

  /** What the router shows when a page fails to render or load. */
  error: {
    metaTitle: string;
    message: string;
    reload: string;
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
