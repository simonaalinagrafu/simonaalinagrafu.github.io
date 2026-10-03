import type { UiStrings } from './types';

export const en: UiStrings = {
  htmlLang: 'en',
  localeName: 'English',
  localeShort: 'EN',
  dateLocale: 'en-GB',
  ogLocale: 'en_US',
  years: (n) => (n === 1 ? '1 year' : `${n} years`),

  nav: {
    home: 'About Me',
    career: 'Career',
    skills: 'Skills',
    contact: 'Contact',
  },

  themes: {
    cream: 'Cream',
    forest: 'Forest',
    marine: 'Marine',
  },

  header: {
    changeTheme: 'Change theme',
    changeThemeTip: 'Change the site’s color theme',
    changeLanguage: 'Change language',
    changeLanguageTip: 'Read this site in another language',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    email: 'Email',
    emailTip: 'Send me an email',
    linkedin: 'LinkedIn',
    linkedinTip: 'My LinkedIn profile',
    pager: 'Page navigation',
    prevPage: 'Previous page',
    nextPage: 'Next page',
  },

  footer: {
    blurb: 'B2B sales in the printing industry — offers, contracts and the sales office.',
  },

  home: {
    metaTitle: 'Head of Sales Office, B2B Print',
    metaDescription:
      '{position} at {company}, coordinating the sales agents of a Bucharest printing house. {sales} in sales, {leadership} leading the sales office.',
    kicker: 'Profile',
    heading: '{position} at {company}',
    facts: '{location} · {sales} in sales · {leadership} leading the sales office',
    paragraphs: [
      'I run the sales office at Tipografia Everest, a Bucharest printing house of over 140 people working in offset and digital print. Reporting to the Commercial Director, I coordinate the sales agents, manage a client portfolio of my own, and take part in planning and implementing the sales strategy.',
      'I joined Everest in 2012 as a sales representative and have led its sales office since 2015. Before that: almost nine years in print sales at RH Printing, packaging sales at Rodata, and first roles in accounting, marketing and sales analysis.',
    ],
    ctaCareer: 'Full career',
    ctaContact: 'Contact',
    kickerScope: 'Current scope',
    scope: {
      team: {
        term: 'Team',
        detail:
          'The sales agents at Tipografia Everest — their daily reporting, how the work is shared out among them, and their visits to clients.',
      },
      clients: {
        term: 'Clients',
        detail:
          'A portfolio of my own: price offers, orders, technical and commercial advice, and the client relationship from the first request onwards.',
      },
      contracts: {
        term: 'Contracts',
        detail:
          'Printing-service contracts negotiated and signed, and invoice reversals and third-party commissions approved, within the limits set by the Commercial and General Directors.',
      },
      plan: {
        term: 'Strategy & plan',
        detail:
          'Taking part in planning and implementing the sales strategy; monthly, quarterly and annual sales plans, daily analysis of sales against them, and reports for management.',
      },
      coordination: {
        term: 'Coordination',
        detail:
          'The flow of information between sales and production, dispatch and finance — so that offers reach clients on time and orders are planned into production efficiently.',
      },
      market: {
        term: 'Market',
        detail:
          'The competition, the trends in the printing-services market, and new products proposed for the printing house’s offer.',
      },
    },
    kickerHighlights: 'Highlights',
    highlights: {
      promotion: {
        title: 'Head of the sales office',
        context: 'Tipografia Everest · 2015',
        body: 'Promoted three years after joining as a sales representative: responsibility for the sales office, added to a client portfolio of my own.',
      },
      print: {
        title: '{print} in print and packaging',
        context: 'Rodata · RH Printing · Tipografia Everest',
        body: 'Printed packaging in offset and rotogravure at Rodata, sheet-fed offset at RH Printing, then commercial printing, books and packaging at Everest.',
      },
      foundation: {
        title: 'A foundation in accounting and marketing',
        context: 'Euromobex · Delta Distribution · Neweuropetrolgaz · 1997–2001',
        body: 'Marketing graduate of ASE Bucharest; economist first, then marketing and sales analysis — a working knowledge of the finances behind every offer.',
      },
    },
    kickerBackground: 'Background',
    kickerEducation: 'Education',
    careerLink: {
      before: 'Role by role, with what each one involved, on the ',
      link: 'Career',
      after: ' page.',
    },
  },

  career: {
    metaTitle: 'Career',
    metaDescription:
      'From economist and marketing assistant to head of the sales office at Tipografia Everest — 1997 to today, in sales since 2000.',
    kicker: 'Journey',
    heading: 'Career',
    lede: 'The roles I’ve held and what each one involved — from a first job as an economist to running a sales office.',
    download: 'Download CV (PDF)',
    downloadFile: 'Simona-Alina-Grafu-CV',
    stats: {
      sales: 'years in sales',
      print: 'years in printing',
      leadership: 'years leading the sales office',
    },
    education: 'Education',
    timeline: 'Career timeline by company',
    now: 'now',
  },

  skills: {
    metaTitle: 'Skills',
    metaDescription:
      'Skills across sales office coordination, the client portfolio, offers and contracts, new business and the sales plan, and the business foundations beneath them.',
    kicker: 'Toolbox',
    heading: 'Skills',
    lede: 'The skills the role draws on — from coordinating a sales office to collecting the payment behind a sale.',
  },

  contact: {
    metaTitle: 'Contact',
    metaDescription:
      'Get in touch with Simona Alina Grafu about B2B sales in the printing industry, client portfolios, and running a sales office.',
    heading: 'Contact',
    lede: 'I read everything and reply to thoughtful messages.',
    email: 'Email',
    linkedin: 'LinkedIn',
    phone: 'Phone',
    phoneSubtitle: 'For a direct conversation',
    details: 'Details',
    timezone: 'EET (UTC+2)',
  },

  notFound: {
    metaTitle: 'Page not found',
    message: 'This page doesn’t exist.',
    back: '← Back home',
  },

  error: {
    metaTitle: 'Something went wrong',
    message: 'This page could not be loaded.',
    reload: 'Reload the page',
  },

  resume: {
    summary: 'Summary',
    skills: 'Skills',
    experience: 'Experience',
    keyAchievement: 'Key Achievement',
    education: 'Education',
    other: 'Other',
    focus: 'Focus',
    highlights: [
      'In sales since 2000, in the printing industry since 2001',
      'Head of the sales office at Tipografia Everest since 2015; there since 2012',
      'The full commercial cycle: offer, negotiation, contract, production, collection',
      'Marketing graduate (ASE Bucharest); first roles in accounting and marketing',
    ],
  },
};
