import type { UiStrings } from './types';

export const en: UiStrings = {
  htmlLang: 'en',
  localeName: 'English',
  localeShort: 'EN',
  dateLocale: 'en-GB',
  ogLocale: 'en_US',

  nav: {
    home: 'About Me',
    career: 'Career',
    skills: 'Skills',
    articles: 'Articles',
    contact: 'Contact',
  },

  themes: {
    light: 'Light',
    dark: 'Dark',
    emerald: 'Emerald',
    sepia: 'Sepia',
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
    github: 'GitHub',
    githubTip: 'My code on GitHub',
    linkedin: 'LinkedIn',
    linkedinTip: 'My LinkedIn profile',
  },

  footer: {
    blurb: 'Engineering leadership, software architecture, and applied AI.',
    rss: 'RSS',
  },

  home: {
    metaTitle: 'Engineering Manager & AI Systems Builder',
    greeting: 'Hello, I’m',
    ctaCareer: 'My career story',
    ctaWriting: 'Read my writing',
    kickerReach: 'Reach and practice',
    kickerDoing: 'What I do',
    kickerWorking: 'Working with me',
    kickerPrinciples: 'Principles',
    headingWorking: 'What I bring to an organization',
    headingPrinciples: 'What drives me',

    stats: {
      years: { value: '20+', label: 'years in software development' },
      apps: { value: '50+', label: 'applications built or contributed to' },
      requests: { value: 'Millions', label: 'of requests a day on some applications' },
      phases: { value: 'Every phase', label: 'specification through production' },
      aiSystems: { value: 'AI systems', label: 'built, not just used' },
      aiAssisted: { value: 'AI-assisted', label: 'engineering, every day' },
    },

    doing: {
      engineering: {
        title: 'Hands-on engineering',
        body: 'I still write the code: C#/.NET, Python, React, SQL, and the AWS infrastructure it runs on. Specifications, architecture, cloud environments, CI/CD pipelines — I build them, not just approve them.',
      },
      leadership: {
        title: 'Engineering leadership',
        body: 'Leading one of {company}’s core teams — hiring, mentoring, and setting the standards behind business-critical delivery software.',
      },
      aiAssisted: {
        title: 'AI-assisted engineering',
        body: 'Advanced Claude Code skills, including an app builder that reads existing codebases through a structural snapshot and generates, migrates, or translates applications with verified results.',
      },
      aiSystems: {
        title: 'AI systems',
        body: 'Agentic AI platforms: LLM orchestration, RAG pipelines, and multi-agent architectures grounded in real business data, integrated over MCP and answerable in production.',
      },
    },

    value: {
      ship: {
        title: 'Teams that ship',
        body: 'Cohesive teams delivering business-critical software, year after year.',
      },
      build: {
        title: 'Leadership that builds',
        body: 'An architect’s judgment, from someone who still writes the code.',
      },
      handoff: {
        title: 'Fewer handoff gaps',
        body: 'Someone who has worked every phase sees what falls between them.',
      },
      ai: {
        title: 'AI that pays off',
        body: 'Grounded in production experience, not in hype.',
      },
      load: {
        title: 'Built for load',
        body: 'Systems that stay up when the business depends on them.',
      },
      grow: {
        title: 'People who grow',
        body: 'Engineers hired, mentored and kept — the team outlasts the system.',
      },
    },

    principles: {
      curiosity: {
        title: 'Curiosity',
        body: 'I’m naturally driven to understand how things work and why they work the way they do. I enjoy going deep into a problem, learning from first principles, and connecting ideas across different areas. For me, the process of understanding is rewarding in itself.',
      },
      evolution: {
        title: 'Constant evolution',
        body: 'I’m always looking for ways to improve how I think, work, and build. AI-assisted engineering has already reshaped my daily practice, and I actively explore new tools, ideas, and approaches that can make me more effective. I see change as an opportunity to rethink what’s possible rather than simply adapt to it.',
      },
      teams: {
        title: 'Teams that discover',
        body: 'I do my best work in supportive, collaborative teams where people learn from each other, challenge ideas constructively, and take pride in their craft. I value working toward a shared goal while giving everyone the space to contribute, experiment, and grow.',
      },
      impact: {
        title: 'Impact',
        body: 'Technology is most interesting to me when it matters — when the systems we build carry real businesses, save people time, and open possibilities that weren’t there before. Understanding why the work matters shapes how I build it, and seeing an idea become something people rely on every day is the most satisfying part of engineering.',
      },
    },
  },

  career: {
    metaTitle: 'Career',
    metaDescription:
      '20+ years in software: Ubisoft, TeamNet, Consignor, and nShift — from game programming to engineering management and AI systems.',
    kicker: 'Journey',
    heading: 'Career',
    lede: 'The roles I’ve held, the teams I’ve built, and what each chapter added.',
    download: 'Download resume (PDF)',
    downloadFile: 'Simona-Alina-Grafu-Resume',
    stats: {
      years: 'years in software',
      leading: 'years leading teams',
      companies: 'companies',
    },
    education: 'Education',
    timeline: 'Career timeline by company',
  },

  skills: {
    metaTitle: 'Skills',
    metaDescription:
      'Skills across leadership, AI and machine learning, backend architecture, cloud, and the fundamentals beneath them.',
    kicker: 'Toolbox',
    heading: 'Skills',
    lede: 'What I reach for and the ground it stands on — from leading teams to the math under the models.',
  },

  articles: {
    metaTitle: 'Articles',
    metaDescription: 'Writing on engineering leadership, software architecture, and applied AI.',
    feedTitle: 'Articles',
    kicker: 'Writing',
    heading: 'Articles',
    ledeBefore:
      'Writing on engineering leadership, software architecture, agentic AI systems, and AI-assisted development. Subscribe via ',
    ledeRssLink: 'RSS',
    ledeAfter: '.',
    back: '← All articles',
  },

  contact: {
    metaTitle: 'Contact',
    metaDescription:
      'Get in touch with Simona Alina Grafu to exchange ideas on engineering leadership, AI systems, and research.',
    heading: 'Contact',
    lede: 'I read everything and reply to thoughtful messages.',
    email: 'Email',
    linkedin: 'LinkedIn',
    linkedinSubtitle: 'Best for professional messages',
    timezone: 'EET (UTC+2)',
  },

  notFound: {
    metaTitle: 'Page not found',
    message: 'This page doesn’t exist.',
    back: '← Back home',
  },

  resume: {
    summary: 'Summary',
    skills: 'Skills',
    experience: 'Experience',
    keyProject: 'Key Project',
    education: 'Education',
    tech: 'Tech',
    highlights: [
      'Millions of requests served every day by the platform my team runs',
      '10,000+ business clients on the systems I have led',
      '50 web services in production, distributed across AWS',
      '20+ years, from real-time game engines to agentic AI systems',
    ],
  },
};
