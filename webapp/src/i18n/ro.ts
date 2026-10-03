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
    forest: 'Pădure',
    marine: 'Marin',
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
      'Conduc biroul de vânzări al Tipografiei Everest, o tipografie din București cu peste 140 de oameni, care lucrează în offset și digital — coordonez agenții de vânzări și păstrez totodată un portofoliu propriu de clienți.',
      'Am venit la Everest în 2012 ca reprezentant comercial și conduc biroul de vânzări din 2015. Înainte: aproape nouă ani de vânzări în tipografie la RH Printing, vânzări de ambalaje la Rodata și un început în contabilitate, marketing și analiza vânzărilor.',
    ],
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
          'Un portofoliu propriu: oferte, comenzi, consultanță tehnică și comercială și relația cu clientul de la prima solicitare.',
      },
      contracts: {
        term: 'Contracte',
        detail:
          'Contracte de prestări servicii tipografice, negociate și semnate în limitele stabilite de Directorul Comercial și Directorul General.',
      },
      plan: {
        term: 'Planul de vânzări',
        detail:
          'Obiective lunare, trimestriale și anuale, analiza zilnică a vânzărilor față de ele și rapoarte de analiză pentru conducere.',
      },
      coordination: {
        term: 'Coordonare',
        detail:
          'Legătura dintre vânzări și producție, expediție și financiar — ca ofertele să plece la timp și comenzile să fie bine planificate.',
      },
      market: {
        term: 'Piața',
        detail: 'Concurența și piața serviciilor tipografice, urmărite permanent.',
      },
    },
    kickerHighlights: 'Repere',
    highlights: {
      promotion: {
        title: 'La conducerea biroului de vânzări',
        context: 'Tipografia Everest · 2015',
        body: 'Promovare la trei ani după venirea ca reprezentant comercial — biroul de vânzări a devenit parte din meserie, alături de clienți.',
      },
      print: {
        title: '{print} în tipar și ambalaje',
        context: 'Rodata · RH Printing · Tipografia Everest',
        body: 'Ambalaje tipărite în offset și rotogravură la Rodata, tipar offset în coală la RH Printing, apoi tipărituri comerciale, cărți și ambalaje la Everest.',
      },
      foundation: {
        title: 'Un început pe partea de cifre',
        context: 'Euromobex · Delta Distribution · Neweuropetrolgaz · 1997–2001',
        body: 'Mai întâi economist, apoi marketing și analiza vânzărilor — așa că partea contabilă din spatele unei oferte e teren cunoscut.',
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
      'Competențe în coordonarea biroului de vânzări, portofoliul de clienți, oferte și contracte, clienți noi și planul de vânzări, și fundamentele de business de dedesubt.',
    kicker: 'Instrumentar',
    heading: 'Competențe',
    lede: 'La ce apelez și pe ce se sprijină — de la coordonarea unui birou de vânzări la încasarea din spatele unei vânzări.',
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
      'Un început în contabilitate și marketing — cifrele din spatele fiecărei oferte',
    ],
  },
};
