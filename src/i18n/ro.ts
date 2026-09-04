import type { UiStrings } from './types';

// Romanian UI strings — drafted for review. Same two conventions as
// data/profile/ro.ts: English job titles are kept where they are the norm in
// Romanian tech, and the prose stays gender-neutral.

export const ro: UiStrings = {
  htmlLang: 'ro',
  localeName: 'Română',
  localeShort: 'RO',
  dateLocale: 'ro-RO',
  ogLocale: 'ro_RO',

  nav: {
    home: 'Despre mine',
    career: 'Carieră',
    skills: 'Competențe',
    articles: 'Articole',
    contact: 'Contact',
  },

  themes: {
    light: 'Luminoasă',
    dark: 'Întunecată',
    emerald: 'Smarald',
    sepia: 'Sepia',
  },

  header: {
    changeTheme: 'Schimbă tema',
    changeThemeTip: 'Schimbă tema de culoare a site-ului',
    changeLanguage: 'Schimbă limba',
    changeLanguageTip: 'Citește acest site în altă limbă',
    openMenu: 'Deschide meniul',
    closeMenu: 'Închide meniul',
    email: 'Email',
    emailTip: 'Trimite-mi un email',
    github: 'GitHub',
    githubTip: 'Codul meu pe GitHub',
    linkedin: 'LinkedIn',
    linkedinTip: 'Profilul meu de LinkedIn',
  },

  footer: {
    blurb: 'Leadership în inginerie, arhitectură software și AI aplicat.',
    rss: 'RSS',
  },

  home: {
    metaTitle: 'Engineering Manager & constructor de sisteme AI',
    greeting: 'Bună, sunt',
    ctaCareer: 'Povestea carierei mele',
    ctaWriting: 'Citește ce scriu',
    kickerReach: 'Anvergură și practică',
    kickerDoing: 'Ce fac',
    kickerWorking: 'Cum e să lucrezi cu mine',
    kickerPrinciples: 'Principii',
    headingWorking: 'Ce aduc într-o organizație',
    headingPrinciples: 'Ce mă motivează',

    stats: {
      years: { value: '20+', label: 'ani în dezvoltare software' },
      apps: { value: '50+', label: 'aplicații construite sau la care am contribuit' },
      requests: { value: 'Milioane', label: 'de cereri pe zi în unele aplicații' },
      phases: { value: 'Fiecare etapă', label: 'de la specificație la producție' },
      aiSystems: { value: 'Sisteme AI', label: 'construite, nu doar folosite' },
      aiAssisted: { value: 'Asistat de AI', label: 'inginerie, în fiecare zi' },
    },

    doing: {
      engineering: {
        title: 'Inginerie hands-on',
        body: 'Scriu în continuare cod: C#/.NET, Python, React, SQL și infrastructura AWS pe care rulează. Specificații, arhitectură, medii cloud, pipeline-uri CI/CD — le construiesc, nu doar le aprob.',
      },
      leadership: {
        title: 'Leadership în inginerie',
        body: 'Conduc una dintre echipele centrale ale {company} — angajare, mentorat și stabilirea standardelor din spatele unui software de livrare critic pentru business.',
      },
      aiAssisted: {
        title: 'Inginerie asistată de AI',
        body: 'Competențe avansate de Claude Code, între care un app builder care citește codebase-uri existente printr-un snapshot structural și generează, migrează sau traduce aplicații cu rezultate verificate.',
      },
      aiSystems: {
        title: 'Sisteme AI',
        body: 'Platforme AI agentice: orchestrare de LLM-uri, pipeline-uri RAG și arhitecturi multi-agent ancorate în date reale de business, integrate prin MCP și fiabile în producție.',
      },
    },

    value: {
      ship: {
        title: 'Echipe care livrează',
        body: 'Echipe unite, care livrează software critic pentru business, an după an.',
      },
      build: {
        title: 'Leadership care construiește',
        body: 'Judecata unui arhitect, de la cineva care scrie în continuare cod.',
      },
      handoff: {
        title: 'Mai puține goluri la predare',
        body: 'Cine a lucrat în fiecare etapă vede ce cade între ele.',
      },
      ai: {
        title: 'AI care aduce rezultate',
        body: 'Ancorat în experiență de producție, nu în hype.',
      },
      load: {
        title: 'Construit pentru încărcare',
        body: 'Sisteme care rămân în picioare atunci când business-ul depinde de ele.',
      },
      grow: {
        title: 'Oameni care cresc',
        body: 'Ingineri angajați, îndrumați și păstrați — echipa supraviețuiește sistemului.',
      },
    },

    principles: {
      curiosity: {
        title: 'Curiozitate',
        body: 'Am o pornire firească de a înțelege cum funcționează lucrurile și de ce funcționează așa. Îmi place să intru adânc într-o problemă, să învăț de la principii de bază și să leg idei din domenii diferite. Pentru mine, procesul de înțelegere este o răsplată în sine.',
      },
      evolution: {
        title: 'Evoluție continuă',
        body: 'Caut mereu moduri de a îmbunătăți felul în care gândesc, lucrez și construiesc. Ingineria asistată de AI mi-a schimbat deja practica zilnică, iar eu explorez activ instrumente, idei și abordări noi care mă pot face mai eficient. Văd schimbarea ca pe o ocazie de a regândi ce e posibil, nu doar ca pe ceva la care trebuie să mă adaptez.',
      },
      teams: {
        title: 'Echipe care descoperă',
        body: 'Lucrez cel mai bine în echipe colaborative și susținătoare, unde oamenii învață unii de la alții, provoacă ideile constructiv și sunt mândri de meseria lor. Prețuiesc munca spre un scop comun, lăsând în același timp fiecăruia spațiul de a contribui, de a experimenta și de a crește.',
      },
      impact: {
        title: 'Impact',
        body: 'Tehnologia mă interesează cel mai mult atunci când contează — când sistemele pe care le construim susțin afaceri reale, economisesc timpul oamenilor și deschid posibilități care nu existau înainte. Înțelegerea motivului pentru care munca are sens schimbă felul în care o fac, iar să vezi o idee devenind ceva pe care oamenii se bazează zilnic este partea cea mai satisfăcătoare a ingineriei.',
      },
    },
  },

  career: {
    metaTitle: 'Carieră',
    metaDescription:
      'Peste 20 de ani în software: Ubisoft, TeamNet, Consignor și nShift — de la programare de jocuri la management de inginerie și sisteme AI.',
    kicker: 'Parcurs',
    heading: 'Carieră',
    lede: 'Rolurile pe care le-am avut, echipele pe care le-am construit și ce a adăugat fiecare capitol.',
    download: 'Descarcă CV-ul (PDF)',
    downloadFile: 'Simona-Alina-Grafu-CV',
    stats: {
      years: 'ani în software',
      leading: 'ani de condus echipe',
      companies: 'companii',
    },
    education: 'Educație',
    timeline: 'Cronologia carierei, pe companii',
  },

  skills: {
    metaTitle: 'Competențe',
    metaDescription:
      'Competențe în leadership, AI și machine learning, arhitectură backend, cloud și fundamentele de dedesubt.',
    kicker: 'Instrumentar',
    heading: 'Competențe',
    lede: 'La ce apelez și pe ce se sprijină — de la condus echipe la matematica din spatele modelelor.',
  },

  articles: {
    metaTitle: 'Articole',
    metaDescription: 'Texte despre leadership în inginerie, arhitectură software și AI aplicat.',
    feedTitle: 'Articole',
    kicker: 'Scriu',
    heading: 'Articole',
    ledeBefore:
      'Texte despre leadership în inginerie, arhitectură software, sisteme AI agentice și dezvoltare asistată de AI. Abonează-te prin ',
    ledeRssLink: 'RSS',
    ledeAfter: '.',
    back: '← Toate articolele',
  },

  contact: {
    metaTitle: 'Contact',
    metaDescription:
      'Ia legătura cu Simona Alina Grafu pentru a discuta despre leadership în inginerie, sisteme AI și cercetare.',
    heading: 'Contact',
    lede: 'Citesc tot și răspund mesajelor bine gândite.',
    email: 'Email',
    linkedin: 'LinkedIn',
    linkedinSubtitle: 'Cel mai potrivit pentru mesaje profesionale',
    timezone: 'EET (UTC+2)',
  },

  notFound: {
    metaTitle: 'Pagină negăsită',
    message: 'Această pagină nu există.',
    back: '← Înapoi la pagina principală',
  },

  resume: {
    summary: 'Sumar',
    skills: 'Competențe',
    experience: 'Experiență',
    keyProject: 'Proiect reprezentativ',
    education: 'Educație',
    tech: 'Tehnologii',
    highlights: [
      'Milioane de cereri servite zilnic de platforma pe care o conduce echipa mea',
      'Peste 10.000 de clienți business pe sistemele pe care le-am condus',
      '50 de servicii web în producție, distribuite pe AWS',
      'Peste 20 de ani, de la motoare de joc în timp real la sisteme AI agentice',
    ],
  },
};
