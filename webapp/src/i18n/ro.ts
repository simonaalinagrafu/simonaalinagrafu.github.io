import type { UiStrings } from './types';

// Romanian UI strings — drafted for review. Same two conventions as
// data/profile/ro.ts: job titles as her documents give them, and prose that
// stays gender-neutral.

export const ro: UiStrings = {
  htmlLang: 'ro',
  localeName: 'Română',
  localeShort: 'RO',
  dateLocale: 'ro-RO',
  ogLocale: 'ro_RO',
  // „1 an”, „11 ani”, dar „26 de ani”: de la 20 în sus (și la sute rotunde) se pune „de”.
  years: (n) => (n === 1 ? '1 an' : n % 100 === 0 || n % 100 >= 20 ? `${n} de ani` : `${n} ani`),

  nav: {
    home: 'Despre mine',
    career: 'Carieră',
    skills: 'Competențe',
    contact: 'Contact',
  },

  themes: {
    cream: 'Crem',
    forest: 'Verde',
    marine: 'Albastru marin',
  },

  header: {
    changeTheme: 'Schimbă tema',
    changeThemeTip: 'Schimbă tema de culoare a site-ului',
    changeLanguage: 'Schimbă limba',
    changeLanguageTip: 'Citește acest site în altă limbă',
    openMenu: 'Deschide meniul',
    closeMenu: 'Închide meniul',
    phone: 'Telefon',
    email: 'Email',
    emailTip: 'Trimite-mi un email',
    linkedin: 'LinkedIn',
    linkedinTip: 'Profilul meu de LinkedIn',
    pager: 'Navigare între pagini',
    prevPage: 'Pagina anterioară',
    nextPage: 'Pagina următoare',
  },

  footer: {
    blurb: 'Vânzări B2B în industria tipografică — oferte, contracte și biroul de vânzări.',
  },

  home: {
    metaTitle: 'Șef Birou Vânzări, tipar B2B',
    metaDescription:
      '{position} la {company}, coordonând agenții de vânzări ai unei tipografii din București. {sales} în vânzări, {leadership} la conducerea biroului de vânzări.',
    kicker: 'Profil',
    heading: '{position} la {company}',
    facts: '{location} · {sales} în vânzări · {leadership} la conducerea biroului de vânzări',
    paragraphs: [
      'Conduc biroul de vânzări al Tipografiei Everest, o tipografie din București cu peste 140 de oameni, care lucrează în offset și digital. În subordinea Directorului Comercial, coordonez agenții de vânzări, gestionez un portofoliu propriu de clienți și particip la planificarea și implementarea strategiei de vânzări.',
      'Am venit la Everest în 2012 ca reprezentant comercial și conduc biroul de vânzări din 2015. Înainte: aproape nouă ani de vânzări de tipar la RH Printing, vânzări de ambalaje la Rodata și primele roluri în contabilitate, marketing și analiza vânzărilor.',
    ],
    cycle: {
      caption: 'Ciclul vânzării',
      steps: {
        prospecting: 'Prospectare',
        offer: 'Ofertă',
        negotiation: 'Negociere',
        contract: 'Contract',
        production: 'Producție',
        collection: 'Încasare',
      },
    },
    ctaCareer: 'Toată cariera',
    ctaContact: 'Contact',
    kickerScope: 'Ce coordonez acum',
    scope: {
      team: {
        term: 'Echipa',
        detail:
          'Agenții de vânzări ai Tipografiei Everest — raportarea lor zilnică, împărțirea lucrărilor între ei și deplasările lor la clienți.',
      },
      clients: {
        term: 'Clienți',
        detail:
          'Un portofoliu propriu: oferte de preț, comenzi, consultanță tehnică și comercială și relația cu clientul de la prima solicitare.',
      },
      contracts: {
        term: 'Contracte',
        detail:
          'Contracte de prestări servicii tipografice negociate și semnate, stornări de facturi și comisioane către terți aprobate, în limitele stabilite de Directorul Comercial și Directorul General.',
      },
      plan: {
        term: 'Strategie și plan',
        detail:
          'Participare la planificarea și implementarea strategiei de vânzări; planuri de vânzări lunare, trimestriale și anuale, analiza zilnică a vânzărilor față de ele și rapoarte pentru conducere.',
      },
      coordination: {
        term: 'Coordonare',
        detail:
          'Fluxul de informații dintre vânzări și producție, expediție și financiar — astfel încât ofertele să ajungă la clienți la timp, iar comenzile să fie planificate eficient în producție.',
      },
      market: {
        term: 'Piața',
        detail:
          'Concurența, tendințele pieței de servicii tipografice și produsele noi propuse pentru oferta tipografiei.',
      },
    },
    kickerHighlights: 'Repere',
    highlights: {
      promotion: {
        title: 'La conducerea biroului de vânzări',
        context: 'Tipografia Everest · 2015',
        body: 'Promovare la trei ani după venirea ca reprezentant comercial: răspunderea pentru biroul de vânzări, adăugată unui portofoliu propriu de clienți.',
      },
      print: {
        title: '{print} în tipar și ambalaje',
        context: 'Rodata · RH Printing · Tipografia Everest',
        body: 'Ambalaje tipărite în offset și rotogravură la Rodata, tipar offset în coală la RH Printing, apoi tipărituri comerciale, cărți și ambalaje la Everest.',
      },
      foundation: {
        title: 'O bază în contabilitate și marketing',
        context: 'Euromobex · Delta Distribution · Neweuropetrolgaz · 1997–2001',
        body: 'Licență în Marketing la ASE București; mai întâi economist, apoi marketing și analiza vânzărilor — o cunoaștere practică a părții financiare din spatele fiecărei oferte.',
      },
    },
    kickerBackground: 'Parcurs',
    kickerEducation: 'Educație',
    careerLink: {
      before: 'Rol cu rol, cu ce a presupus fiecare, pe pagina ',
      link: 'Carieră',
      after: '.',
    },
  },

  career: {
    metaTitle: 'Carieră',
    metaDescription:
      'De la economist și asistent de marketing la conducerea biroului de vânzări al Tipografiei Everest — din 1997 până azi, în vânzări din 2000.',
    kicker: 'Parcurs',
    heading: 'Carieră',
    lede: 'Rolurile pe care le-am avut și ce a presupus fiecare — de la primul loc de muncă, ca economist, la conducerea unui birou de vânzări.',
    download: 'Descarcă CV-ul (PDF)',
    downloadFile: 'Simona-Alina-Grafu-CV',
    stats: {
      sales: 'ani în vânzări',
      print: 'ani în tipografie',
      leadership: 'ani la conducerea biroului de vânzări',
    },
    education: 'Educație',
    timeline: 'Cronologia carierei, pe companii',
    now: 'acum',
  },

  skills: {
    metaTitle: 'Competențe',
    metaDescription:
      'Competențe izvorâte din munca propriu-zisă: coordonarea biroului de vânzări, portofoliul de clienți, oferte și contracte, planificarea vânzărilor, tipar și ambalaje, marketing, financiar și comerț exterior.',
    kicker: 'Instrumentar',
    heading: 'Competențe',
    lede: 'Fiecare competență de mai jos vine din munca pe care am făcut-o — rolurile din spatele ei sunt numite alături.',
    kickerDaily: 'În fiecare zi',
    dailyLede: 'Ariile muncii mele actuale, ca {position} la {company}.',
    kickerAreas: 'Pe domenii',
    since: 'Din {year}',
    kickerOverTime: 'În timp',
    headingOverTime: 'Ce a adăugat fiecare rol',
    careerLink: {
      before: 'Rolurile din spatele acestor competențe, cu fiecare atribuție, sunt pe pagina ',
      link: 'Carieră',
      after: '.',
    },
  },

  contact: {
    metaTitle: 'Contact',
    metaDescription:
      'Ia legătura cu Simona Alina Grafu pentru vânzări B2B în tipografie, portofolii de clienți și conducerea unui birou de vânzări.',
    heading: 'Contact',
    lede: 'Citesc tot și răspund mesajelor bine gândite.',
    email: 'Email',
    linkedin: 'LinkedIn',
    phone: 'Telefon',
    phoneSubtitle: 'Pentru o discuție directă',
    details: 'Detalii',
    timezone: 'EET (UTC+2)',
  },

  notFound: {
    metaTitle: 'Pagină negăsită',
    message: 'Această pagină nu există.',
    back: '← Înapoi la pagina principală',
  },

  error: {
    metaTitle: 'Ceva n-a mers bine',
    message: 'Această pagină nu a putut fi încărcată.',
    reload: 'Reîncarcă pagina',
  },

  resume: {
    summary: 'Sumar',
    skills: 'Competențe',
    experience: 'Experiență',
    keyAchievement: 'Realizare reprezentativă',
    education: 'Educație',
    other: 'Diverse',
    focus: 'Arii',
    highlights: [
      'În vânzări din 2000, în industria tipografică din 2001',
      'Șef Birou Vânzări la Tipografia Everest din 2015; acolo din 2012',
      'Întregul ciclu comercial: ofertă, negociere, contract, producție, încasare',
      'Licență în Marketing (ASE București); primele roluri în contabilitate și marketing',
    ],
  },
};
