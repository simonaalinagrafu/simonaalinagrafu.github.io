import type { UiStrings } from './types';

// Romanian UI strings — drafted for review. Same two conventions as
// data/profile/ro.ts: English job titles are kept where they are the norm on
// the Romanian market, and the prose stays gender-neutral.

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
  },

  footer: {
    blurb: 'Vânzări B2B, conturi cheie și echipele care le livrează.',
  },

  home: {
    metaTitle: 'Manager de Vânzări, B2B',
    greeting: 'Bună, sunt Simona.',
    headline: 'Vânzări B2B, de la prima discuție la relația care ține.',
    ctaCareer: 'Povestea carierei mele',
    ctaContact: 'Hai să vorbim',
    kickerReach: 'Anvergură și practică',
    kickerDoing: 'Ce fac',
    kickerWorking: 'Cum e să lucrezi cu mine',
    kickerPrinciples: 'Principii',
    kickerProcess: 'Cum lucrez',
    headingWorking: 'Ce aduc într-o organizație',
    headingPrinciples: 'Ce mă motivează',
    headingProcess: 'Patru pași, de fiecare dată',

    stats: {
      years: { value: '20+', label: 'ani în vânzări B2B' },
      b2b: { value: 'B2B', label: 'vânzări către companii' },
      team: { value: 'O echipă', label: 'de oameni de vânzări condusă, pregătită și păstrată' },
      accounts: { value: 'Conturi cheie', label: 'gestionate de la primul contact la reînnoire' },
      stages: { value: 'Fiecare etapă', label: 'de la prospectare la livrare' },
      relationships: { value: 'Pe termen lung', label: 'relații cu clienții, an după an' },
    },

    doing: {
      team: {
        title: 'Conducerea echipei de vânzări',
        body: 'Conduc echipa de vânzări de la {company} — stabilesc obiective, fac coaching cu fiecare și construiesc rutinele care transformă indivizii într-o echipă ce își atinge cifrele împreună.',
      },
      accounts: {
        title: 'Managementul conturilor cheie',
        body: 'Gestionez relațiile care aduc cea mai mare parte din venituri: înțeleg afacerea fiecărui client suficient de bine încât să văd ce va avea nevoie în continuare și să fiu persoana pe care o sună prima.',
      },
      pipeline: {
        title: 'Pipeline și prognoze',
        body: 'Prospectare, calificare, prioritizare. Un pipeline pe care îl vede toată echipa și o prognoză pe care conducerea poate planifica, pentru că a fost onestă și până acum.',
      },
      negotiation: {
        title: 'Negociere și închidere',
        body: 'Prețuri, contracte, condiții și reînnoiri cu clienți business de orice dimensiune — acorduri care rezistă pentru că ambele părți pot trăi cu ele.',
      },
    },

    value: {
      revenue: {
        title: 'Venituri care cresc',
        body: 'Un portofoliu construit prin prospectare constantă și păstrarea a ce s-a câștigat.',
      },
      retention: {
        title: 'Clienți care rămân',
        body: 'Retenția ca măsură a succesului, nu doar mărimea listei.',
      },
      team: {
        title: 'O echipă care performează',
        body: 'Oameni de vânzări recrutați, pregătiți și păstrați — obiective atinse ca un întreg.',
      },
      pipeline: {
        title: 'Un pipeline predictibil',
        body: 'Prognoze pe care afacerea poate planifica, pentru că au fost corecte și înainte.',
      },
      relationships: {
        title: 'Relații care deschid uși',
        body: 'Douăzeci de ani de contacte de business care răspund la telefon.',
      },
      process: {
        title: 'Proces, nu eroism',
        body: 'Rezultate care se repetă, pentru că modul de lucru este clar.',
      },
    },

    principles: {
      trust: {
        title: 'Încrederea mai întâi',
        body: 'Fiecare client pe care l-am păstrat ani de zile a început cu o promisiune respectată. Prefer să pierd o vânzare decât să o câștig cu ceva ce nu pot livra. Clienții observă și se întorc.',
      },
      listen: {
        title: 'Ascultă înainte să vinzi',
        body: 'Oferta care prinde este cea care răspunde unei nevoi pe care clientul o are cu adevărat. Mare parte din vânzare este înțelegere — afacerea, constrângerile, cum arată un rezultat bun pentru omul de peste masă.',
      },
      team: {
        title: 'Echipa câștigă',
        body: 'Cele mai bune rezultate ale mele au venit din echipe în care oamenii împart ce funcționează, se acoperă unii pe alții și sunt mândri de cifra de pe tablă. A conduce înseamnă a face posibilă o astfel de echipă și apoi a nu-i sta în cale.',
      },
      results: {
        title: 'Rezultate măsurabile',
        body: 'Un pipeline, o prognoză și un obiectiv sunt utile doar dacă sunt oneste. Țin cifrele reale, chiar și atunci când cifra reală este incomodă, pentru că doar așa pot fi îmbunătățite.',
      },
    },

    process: {
      listen: {
        title: 'Ascult',
        body: 'Înainte de orice ofertă, înțeleg afacerea clientului, constrângerile lui și ce înseamnă un rezultat bun pentru el.',
      },
      propose: {
        title: 'Propun',
        body: 'O ofertă care răspunde nevoii reale, cu prețuri și condiții pe care le pot susține.',
      },
      negotiate: {
        title: 'Negociez',
        body: 'Acorduri cu care ambele părți pot trăi ani la rând — nu victorii de o zi.',
      },
      deliver: {
        title: 'Livrez și rămân',
        body: 'Ce s-a promis ajunge la client, iar relația continuă și după semnătură.',
      },
    },
  },

  career: {
    metaTitle: 'Carieră',
    metaDescription:
      '20+ ani în vânzări B2B: de la Euromobex și RH Printing la conducerea echipei de vânzări a Tipografiei Everest.',
    kicker: 'Parcurs',
    heading: 'Carieră',
    lede: 'Rolurile pe care le-am avut, echipele pe care le-am construit și ce a adăugat fiecare capitol.',
    download: 'Descarcă CV-ul (PDF)',
    downloadFile: 'Simona-Alina-Grafu-CV',
    stats: {
      years: 'ani în vânzări B2B',
      everest: 'ani la Tipografia Everest',
      companies: 'companii',
    },
    education: 'Educație',
    timeline: 'Cronologia carierei, pe companii',
    now: 'acum',
    placeholderTag: 'de confirmat',
  },

  skills: {
    metaTitle: 'Competențe',
    metaDescription:
      'Competențe în leadership de vânzări, managementul conturilor cheie, negociere, pipeline și prognoze, și fundamentele de business de dedesubt.',
    kicker: 'Instrumentar',
    heading: 'Competențe',
    lede: 'La ce apelez și pe ce se sprijină — de la condusul unei echipe la marja din spatele unui preț.',
  },

  contact: {
    metaTitle: 'Contact',
    metaDescription:
      'Ia legătura cu Simona Alina Grafu pentru vânzări B2B, conturi cheie și conducerea echipelor de vânzări.',
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

  resume: {
    summary: 'Sumar',
    skills: 'Competențe',
    experience: 'Experiență',
    keyAchievement: 'Realizare reprezentativă',
    education: 'Educație',
    other: 'Diverse',
    focus: 'Arii',
    highlights: [
      '20+ ani în vânzări B2B, cei mai mulți în industria tipografică',
      'Conduce echipa de vânzări a Tipografiei Everest, unde lucrează din 2012',
      'Gestionează conturile cheie care aduc cea mai mare parte din venituri',
      'Retenția și un pipeline predictibil ca măsuri ale succesului',
    ],
  },
};
