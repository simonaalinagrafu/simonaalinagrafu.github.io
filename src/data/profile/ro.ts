import type { ProfileText } from './shape';

// Textul profilului în română — schiță pentru revizuire.
//
// CE ESTE REAL ȘI CE ESTE SCHIȚAT. Cele șase roluri — angajatori, titluri,
// date — și cele două studii sunt din profilul de LinkedIn al Simonei.
// Punctele de la Everest reiau responsabilitățile din secțiunea ei „About”;
// textul de sub celelalte cinci roluri este schițat ca să se potrivească
// titlului și așteaptă formularea ei. Nu s-au inventat cifre. Neconfirmate
// încă, marcate `placeholder: true` în shape.ts: cele trei realizări.
//
// Două convenții, ușor de schimbat: titlurile de post păstrează engleza acolo
// unde aceasta este norma pe piața românească (Key Account Manager), iar proza
// este scrisă neutru din punct de vedere al genului (perfect compus, fără
// adjective predicative despre sine).

export const ro: ProfileText = {
  site: {
    title: 'Manager de Vânzări | Vânzări B2B | Conducere de echipe',
    tagline:
      'Manager de vânzări cu 20+ ani în vânzări B2B, cei mai mulți în industria tipografică — de la vânzări în teren la conturi cheie și la conducerea unei echipe care livrează.',
    intro:
      '20+ ani în vânzări B2B, cei mai mulți în industria tipografică, și fiecare etapă a lor: găsirea clientului, înțelegerea afacerii lui, negocierea acordului, respectarea lui și păstrarea relației pe termen lung. Astăzi conduc echipa de vânzări a Tipografiei Everest.',
    location: 'București, România',
  },

  roles: {
    everest: {
      position: 'Manager de Vânzări',
      period: 'Februarie 2012 – Prezent',
      location: 'București, România',
      aboutShort:
        'Tipografie din București — 30 de ani, o echipă de peste 140 de oameni, offset și digital.',
      about:
        'Tipografia Everest, fondată la București în 1994, este o tipografie cu trei decenii de experiență și o echipă de peste 140 de oameni, care acoperă tipar offset și digital cu o gamă completă de tehnici de finisare. Lucrările ei merg de la tipărituri comerciale, cărți și editură la agende și blocnotesuri, etichete și ambalaje și legătorie de artă, sub sisteme de management al calității ISO 9001 și al mediului ISO 14001, certificate din 2007. În februarie 2012 a preluat activele tipografiei RH Printing, dublându-și capacitatea și devenind liderul pieței locale de tipar offset în coală.',
      summary:
        'Conduc echipa de vânzări a Tipografiei Everest și păstrez în portofoliul meu conturile care contează cel mai mult — de la prima solicitare la contractul negociat, oferta de preț construită pentru acel client, comanda internă și livrarea ei, și raportarea și planificarea care fac anul următor predictibil.',
      bullets: [
        'Conduc echipa de vânzări: obiective, direcție și fiecare membru responsabil de cifrele lui.',
        'Clienții și nevoile lor: gestionarea solicitărilor și a reclamațiilor și potrivirea produselor cu ce are nevoie fiecare client cu adevărat.',
        'Negociez contracte: cu clienții și cu furnizorii — prețuri, termene de livrare și condiții.',
        'Recrutez clienți noi: prospectare și aducerea de conturi business noi în portofoliu.',
        'Oferte de preț pe client: gestionarea bugetului fiecărui client și construirea unei oferte adaptate lui.',
        'Planific comenzile interne: programarea comenzilor de producție și negocierea termenelor de livrare.',
        'Raportare și planificare: rapoarte săptămânale, lunare și anuale; estimarea planului de vânzări lunar și anual.',
        'Activități de marketing: negocierea și organizarea evenimentelor și a campaniilor care promovează produsele companiei.',
      ],
    },

    'rh-printing': {
      position: 'Senior Sales Executive',
      period: 'Mai 2003 – Februarie 2012',
      location: 'București, România',
      aboutShort:
        'Tipografia familiei Rațiu, una dintre cele mai moderne din țară; preluată de Everest în 2012.',
      about:
        'RH Printing a fost tipografia familiei Rațiu — ctitorită de Ion Rațiu în anii ’90 și reconstruită în 2007 de Nicolae Rațiu, cu o investiție de circa 12 milioane de euro într-o unitate nouă pe Bulevardul Timișoara, cu echipamente aduse din Japonia, considerată una dintre cele mai moderne din țară și specializată în tipar offset în coală pentru materiale publicitare. După câțiva ani de pierderi, în februarie 2012 activele ei au fost preluate de Tipografia Everest, care a devenit astfel liderul pieței locale de tipar offset în coală.',
      summary:
        'Aproape nouă ani de vânzări în industria tipografică: un portofoliu propriu de clienți business, ofertare pe lucrări complexe și legătura permanentă cu producția, ca ce s-a vândut să fie și ce se livrează. În februarie 2012, odată cu preluarea RH Printing de către Everest, am continuat la Everest.',
      bullets: [
        'Portofoliu de clienți business: prospectare, ofertare și gestionarea relației pe termen lung.',
        'Ofertare pe lucrări de tipar: specificații, tiraje, termene și un preț corect pentru fiecare comandă.',
        'Coordonare cu producția: urmărirea fiecărei comenzi de la aprobare la livrare.',
        'Conturi cheie: clienții cu volum constant, păstrați an după an.',
      ],
    },

    rodata: {
      position: 'Sales Executive',
      period: 'Aprilie 2001 – Decembrie 2002',
      location: 'București, România',
      aboutShort:
        'Producător de etichete și ambalaje — între cei mai importanți din România și Europa de Est.',
      about:
        'Rodata, fondată la București în 1994, este unul dintre cei mai importanți producători de etichete și ambalaje alimentare și nealimentare din România și Europa de Est: etichete pentru băuturi răcoritoare și apă minerală, ambalaje pentru snacks tipărite în rotogravură, cu servicii complete de pre-press, consultanță de ambalare, producție integrată și logistică.',
      bullets: [
        'Vânzări B2B: construirea unui portofoliu de clienți companii pentru etichete și ambalaje.',
        'Ofertare și negociere: de la prima întâlnire la comandă.',
        'Relația cu clientul: follow-up și retenție.',
      ],
    },

    europetrolgaz: {
      position: 'Reprezentant Vânzări',
      period: 'August 2000 – Martie 2001',
      location: 'București, România',
      bullets: [
        'Vânzări în teren: vizite, prezentări și comenzi de la clienți business.',
        'Prospectare: clienți noi pe un teritoriu propriu.',
      ],
    },

    delta: {
      position: 'Reprezentant Marketing',
      period: 'Iunie 1999 – August 2000',
      location: 'București, România',
      aboutShort: 'Companie de distribuție.',
      bullets: [
        'Promovarea portofoliului de produse către clienți business.',
        'Suport pentru echipa de vânzări: materiale, campanii și feedback din piață.',
      ],
    },

    euromobex: {
      position: 'Reprezentant Vânzări',
      period: 'Iulie 1997 – Iunie 1999',
      location: 'București, România',
      summary:
        'Primul rol în vânzări — și primele obiceiuri care au rămas: prospectare constantă, follow-up disciplinat și clienți care revin.',
      bullets: [
        'Prospectare și vânzare directă către clienți business.',
        'Construirea primului portofoliu de clienți.',
      ],
    },
  },

  skills: {
    'sales-leadership': {
      group: 'Leadership în vânzări',
      blurb: 'Construirea, coaching-ul și conducerea unei echipe de vânzări.',
      items: [
        'Managementul echipei de vânzări',
        'Stabilirea obiectivelor și responsabilizare',
        'Recrutarea și integrarea oamenilor de vânzări',
        'Coaching și evaluări de performanță',
        'Proiectarea procesului de vânzare',
      ],
    },
    'key-accounts': {
      group: 'Managementul conturilor cheie',
      blurb: 'Relațiile care aduc veniturile.',
      items: [
        'Planificarea conturilor cheie',
        'Retenția clienților și reînnoiri',
        'Dezvoltarea conturilor și cross-selling',
        'Relații la nivel de management',
        'Rezolvarea reclamațiilor',
      ],
    },
    negotiation: {
      group: 'Negociere și închidere',
      blurb: 'Acorduri pe care ambele părți le respectă.',
      items: [
        'Prețuri și condiții comerciale',
        'Negocierea contractelor',
        'Gestionarea obiecțiilor',
        'Tehnici de închidere',
        'Redactarea ofertelor și a licitațiilor',
      ],
    },
    pipeline: {
      group: 'Pipeline și prognoze',
      blurb: 'Transformarea oportunităților în cifre predictibile.',
      items: [
        'Prospectare și calificarea lead-urilor',
        'Gestionarea pipeline-ului',
        'Prognoze de vânzări',
        'Raportare și KPI',
        'Planificare pe teritorii și segmente',
      ],
    },
    tools: {
      group: 'Instrumente și proces',
      blurb: 'Sistemele care țin o echipă onestă.',
      items: [
        'Microsoft Office',
        'Raportare de vânzări — săptămânal, lunar, anual',
        'Coordonare comandă–livrare',
      ],
    },
    business: {
      group: 'Fundamente de business',
      blurb: 'Ce înseamnă cifrele din spatele unei tranzacții.',
      items: [
        'Marjă și prețuri',
        'Bugetare și planificarea vânzărilor',
        'Analiza pieței și a concurenței',
        'Servicii pentru clienți',
        'Comunicare și prezentare',
      ],
    },
  },

  education: {
    journalism: {
      school: 'Universitatea din București',
      degree: 'Jurnalism',
    },
    marketing: {
      school: 'Academia de Studii Economice din București',
      degree: 'Marketing',
    },
  },

  achievements: {
    portfolio: {
      title: 'Creșterea portofoliului de clienți B2B',
      role: 'Manager de Vânzări · Tipografia Everest',
      description:
        'Am construit și dezvoltat un portofoliu de clienți business prin prospectare constantă, gestionarea atentă a conturilor și accent pe păstrarea clienților pe care îi aveam deja. Măsura nu a fost mărimea listei, ci câți dintre acei clienți erau încă alături de noi ani mai târziu.',
    },
    team: {
      title: 'Construirea unei echipe de vânzări',
      role: 'Manager de Vânzări · Tipografia Everest',
      description:
        'Am recrutat, integrat și pregătit o echipă de vânzări și am pus în loc rutinele — obiective, analize săptămânale, pipeline comun — care o fac să performeze ca un întreg, nu ca o sumă de individualități.',
    },
    'accounts-system': {
      title: 'Un sistem de gestionare a conturilor cheie',
      role: 'Manager de Vânzări · Tipografia Everest',
      description:
        'Am introdus un mod structurat de a gestiona cele mai mari conturi: un responsabil pentru fiecare, un plan pe cont și o prognoză pe care întreaga echipă se putea baza.',
    },
  },
};
