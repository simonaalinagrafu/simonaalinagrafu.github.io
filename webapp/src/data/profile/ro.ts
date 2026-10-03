import type { ProfileText } from './shape';

// Textul profilului în română.
//
// DE UNDE VINE. Rolurile de la Everest reiau fișele postului (2012 și 2015) și
// actul adițional din 21.04.2015; cele patru roluri din 1997–2002 reiau
// CV-urile ei din 2003; descrierile companiilor sunt din aceleași CV-uri și din
// surse publice. RH Printing este încă schițat după titlul și datele de pe
// LinkedIn și așteaptă formularea ei. Nu s-au inventat cifre — vezi nota din
// capul fișierului shape.ts.
//
// Două convenții, ușor de schimbat: titlurile de post sunt cele din documente
// (inclusiv „Sales Executive”, cum apare în CV-ul ei), iar proza este scrisă
// neutru din punct de vedere al genului (perfect compus, fără adjective
// predicative despre sine).

export const ro: ProfileText = {
  site: {
    title: 'Șef Birou Vânzări | Vânzări B2B în tipografie | Conturi cheie',
    titleShort: 'Șef Birou Vânzări | Tipar B2B',
    tagline:
      'Șef Birou Vânzări la Tipografia Everest. În vânzări B2B din 2000 și în tipografie din 2001 — oferte, negociere, contracte și o echipă de agenți de vânzări.',
    intro:
      'În vânzări din 2000 și în industria tipografică din 2001. Astăzi conduc biroul de vânzări al Tipografiei Everest — coordonez agenții de vânzări și păstrez un portofoliu propriu de clienți —, iar întregul ciclu comercial ține de meserie: oferta, negocierea, contractul, comanda în producție și încasarea la termen.',
    location: 'București, România',
  },

  extras: {
    languages: 'Engleză — bine; franceză, rusă — nivel de bază',
    licence: 'Permis de conducere, categoria B (din 2001)',
  },

  roles: {
    'everest-head': {
      position: 'Șef Birou Vânzări',
      period: 'Aprilie 2015 – Prezent',
      location: 'București, România',
      impact:
        'Conduc biroul de vânzări: raportarea agenților, împărțirea lucrărilor între ei și deplasările lor la clienți — pe lângă un portofoliu propriu de clienți.',
      aboutShort:
        'Tipografie din București — 30 de ani, o echipă de peste 140 de oameni, offset și digital.',
      about:
        'Tipografia Everest, fondată la București în 1994, este o tipografie cu trei decenii de experiență și o echipă de peste 140 de oameni, care acoperă tipar offset și digital cu o gamă completă de tehnici de finisare. Lucrările ei merg de la tipărituri comerciale, cărți și editură la agende și blocnotesuri, etichete și ambalaje și legătorie de artă, sub sisteme de management al calității ISO 9001 și al mediului ISO 14001, certificate din 2007. În februarie 2012 a preluat activele tipografiei RH Printing, dublându-și capacitatea și devenind liderul pieței locale de tipar offset în coală.',
      summary:
        'Promovare în aprilie 2015, la trei ani după venirea în tipografie ca reprezentant comercial. Munca de vânzări continuă ca înainte; ce adaugă rolul este biroul însuși — cum raportează agenții, cum se împart lucrările și cum lucrează vânzările cu producția, expediția și financiarul.',
      bullets: [
        'Coordonez agenții de vânzări: rapoartele lor zilnice de activitate, predate la termenele stabilite de Directorul Comercial.',
        'Împart lucrările: alocarea lor pe agenți, împreună cu Directorul Comercial sau Directorul General, astfel încât distribuția să fie echitabilă.',
        'Supervizez deplasările la clienți: planificarea vizitelor agenților și a resurselor de care au nevoie.',
        'Oferte la timp: propun îmbunătățiri ale activității zilnice a biroului, ca ofertele de preț să plece când au fost promise.',
        'Vânzări și producție: coordonez proiectele interne privind fluxul de informații dintre vânzări și celelalte departamente, ca planificarea comenzilor în producție să fie eficientă.',
        'Analize pentru conducere: rapoarte de analiză a vânzărilor pentru Directorul Comercial și Directorul General.',
        'Portofoliu propriu: oferte, comenzi, contracte și relația cu clienții — munca rolului de dinainte, care continuă.',
      ],
      focus: [
        'Biroul de vânzări',
        'Agenți de vânzări',
        'Alocarea lucrărilor',
        'Raportare',
        'Planificarea producției',
      ],
    },

    'everest-rep': {
      position: 'Reprezentant comercial',
      period: 'Februarie 2012 – Aprilie 2015',
      location: 'București, România',
      impact:
        'Am reprezentat tipografia în relația cu clienții existenți și noi — de la oferta de preț și consultanța tehnică la contractul semnat și încasarea lui.',
      bullets: [
        'Portofoliul de clienți: răspunsul la cererile de ofertă, comenzile date în lucru în condițiile agreate și clienții ținuți la curent cu fiecare etapă a comenzii.',
        'Clienți noi: identificarea și contactarea clienților potențiali și răspunsul la timp la cererile venite pe orice canal de vânzare.',
        'Contracte: întocmirea, negocierea și semnarea contractelor de prestări servicii tipografice, în limitele stabilite de Directorul Comercial și Directorul General.',
        'Verificarea clienților: orice client nou verificat la Centrala Incidentelor de Plăți, la Registrul Comerțului și la Biroul Insolvenței înainte de semnarea contractului.',
        'Încasări: urmărirea plăților la termenele convenite și măsuri pentru încasarea creanțelor.',
        'Planul de vânzări: analiza zilnică a vânzărilor proprii față de planul lunar, trimestrial și anual.',
        'Calitate și reclamații: feedback-ul clienților transmis conducerii, reclamațiile trecute în Registrul de Neconformități și urmărite până la rezolvare.',
        'Piața: concurența, tendințele pieței de servicii tipografice și mediul de afaceri al fiecărui client.',
      ],
      focus: [
        'Conturi cheie',
        'Clienți noi',
        'Oferte și contracte',
        'Încasări',
        'Planul de vânzări',
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
      focus: ['B2B', 'Tipar', 'Conturi cheie', 'Ofertare', 'Producție'],
    },

    rodata: {
      position: 'Sales Executive',
      period: 'Aprilie 2001 – Decembrie 2002',
      location: 'București, România',
      impact:
        'Am vândut ambalaje tipărite — din hârtie, carton și folie OPP, în offset și rotogravură — de la oferta de preț la comanda din producție.',
      aboutShort:
        'Producător de etichete și ambalaje — între cei mai importanți din România și Europa de Est.',
      about:
        'Rodata, fondată la București în 1994, este unul dintre cei mai importanți producători de etichete și ambalaje alimentare și nealimentare din România și Europa de Est: etichete pentru băuturi răcoritoare și apă minerală, ambalaje pentru snacks tipărite în rotogravură, cu servicii complete de pre-press, consultanță de ambalare, producție integrată și logistică.',
      bullets: [
        'Oferte și contracte: ofertare, negociere și contracte cu clienți business.',
        'Comenzi în producție: urmărirea fiecărei comenzi și a fiecărui contract prin producție.',
        'Relația cu clienții: contactul de zi cu zi cu fiecare client din portofoliu.',
        'Analiza vânzărilor: analize și raportare către conducerea firmei.',
      ],
      focus: ['B2B', 'Ambalaje', 'Oferte și contracte', 'Producție'],
    },

    neweuropetrolgaz: {
      position: 'Analist Marketing – Vânzări',
      period: 'August 2000 – Martie 2001',
      location: 'București, România',
      impact:
        'Oferte, contracte și analiza vânzărilor pentru un importator — de ambele părți ale comerțului, cu clienți în țară și furnizori externi.',
      aboutShort: 'Importator de instalații și echipamente pentru GPL.',
      bullets: [
        'Oferte și contracte: ofertare și negocierea contractelor cu clienții.',
        'Furnizori externi: relația cu furnizorii externi de marfă și documentele bancare ale fiecărui import.',
        'Bănci și stat: relația cu organismele financiar-bancare și cu administrația de stat.',
        'Analiza vânzărilor: analize de vânzări și marketing și raportare către conducerea firmei.',
      ],
      focus: ['B2B', 'Import', 'Oferte și contracte', 'Analiza vânzărilor'],
    },

    delta: {
      position: 'Asistent de Marketing',
      period: 'Iunie 1999 – August 2000',
      location: 'București, România',
      impact:
        'Politica de marketing și de promovare a firmei, și un studiu permanent al concurenței.',
      aboutShort:
        'Importator de produse pentru amenajări interioare — gresie, faianță, obiecte sanitare.',
      bullets: [
        'Politica de marketing: elaborarea și implementarea strategiei de marketing a firmei, mai ales a politicii de promovare — a imaginii firmei și a produselor comercializate.',
        'Studiul concurenței: cercetare de birou și de teren asupra concurenței, cu rapoarte periodice.',
      ],
      focus: ['Marketing', 'Promovare', 'Studii de piață'],
    },

    euromobex: {
      position: 'Economist',
      period: 'Iulie 1997 – Iunie 1999',
      location: 'București, România',
      impact:
        'Primul loc de muncă după facultate: contabilitatea, băncile și actele unei firme de comerț — cifrele pe care se sprijină orice ofertă de mai târziu.',
      aboutShort: 'Importator de materiale pentru industria mobilei și exportator de mobilier.',
      bullets: [
        'Contabilitate: operațiuni de contabilitate primară.',
        'Bănci și stat: relația cu organismele financiar-bancare și cu administrația de stat.',
        'Parteneri: clienți și furnizori interni și externi, inclusiv documentele de import–export.',
      ],
      focus: ['Contabilitate', 'Import–export', 'Furnizori'],
    },
  },

  skills: {
    'sales-leadership': {
      group: 'Coordonarea biroului de vânzări',
      blurb: 'Activitatea de zi cu zi a unui birou de vânzări.',
      items: [
        'Coordonarea agenților de vânzări',
        'Raportarea zilnică a activității',
        'Alocarea echitabilă a lucrărilor',
        'Planificarea vizitelor la clienți',
        'Ofertare la timp',
      ],
    },
    'key-accounts': {
      group: 'Portofoliul de clienți',
      blurb: 'Păstrarea și dezvoltarea clienților deja câștigați.',
      items: [
        'Administrarea și dezvoltarea portofoliului',
        'Oportunități noi la clienții existenți',
        'Consultanță tehnică și comercială',
        'Urmărirea comenzilor și informarea clienților',
        'Rezolvarea reclamațiilor',
      ],
    },
    negotiation: {
      group: 'Oferte și contracte',
      blurb: 'De la oferta de preț la acordul semnat.',
      items: [
        'Oferte de preț',
        'Negociere',
        'Contracte de prestări servicii tipografice',
        'Prețuri în structura aprobată',
        'Urmărirea derulării contractelor',
      ],
    },
    pipeline: {
      group: 'Clienți noi și planul de vânzări',
      blurb: 'Clienții noi și planul față de care se măsoară cifrele.',
      items: [
        'Prospectarea clienților noi',
        'Cereri de ofertă de pe orice canal',
        'Planuri de vânzări lunare, trimestriale și anuale',
        'Analiza zilnică a vânzărilor',
        'Rapoarte pentru conducere',
      ],
    },
    business: {
      group: 'Fundamente de business',
      blurb: 'Ce înseamnă cifrele din spatele unei tranzacții.',
      items: [
        'Încasări și creanțe',
        'Verificarea riscului de client',
        'Analiza pieței și a concurenței',
        'Contabilitate',
        'Import și furnizori externi',
      ],
    },
    tools: {
      group: 'Instrumente',
      blurb: 'Uneltele de zi cu zi ale meseriei.',
      items: ['Microsoft Office — Word, Excel', 'Email și internet', 'Baza de date a clienților'],
    },
    personal: {
      group: 'Calități personale',
      blurb: 'Ce aduc dincolo de fișa postului — în cuvintele mele.',
      items: [
        'Educație vastă, în științe și în domeniul umanist',
        'Experiență directă și îndelungată în lucrul cu oamenii',
        'Cunoștințe conceptuale și umane extinse',
        'Gândire critică și mobilitate internă',
        'Obiectivitate și eficiență',
        'Creativitate și imaginație',
      ],
    },
  },

  education: {
    journalism: {
      school: 'Universitatea din București',
      degree: 'Jurnalism',
    },
    marketing: {
      school: 'Academia de Studii Economice (ASE), București',
      degree: 'Licență în Marketing, Facultatea de Comerț',
    },
  },

  achievements: {
    promotion: {
      title: 'Promovare la conducerea biroului de vânzări',
      role: 'Tipografia Everest · Aprilie 2015',
      description:
        'La trei ani după venirea în tipografie ca reprezentant comercial, numire în funcția de Șef Birou Vânzări: coordonarea raportării agenților, a alocării lucrărilor și a deplasărilor la clienți, și a modului în care biroul lucrează cu producția și cu departamentele suport — păstrând totodată un portofoliu propriu de clienți.',
    },
  },
};
