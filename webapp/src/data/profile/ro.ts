import type { ProfileText } from './shape';

// Textul profilului în română.
//
// DE UNDE VINE. Rolurile de la Everest reiau fișele postului (2012 și 2015) și
// actul adițional din 21.04.2015; două puncte ale rolului actual (ritmul
// raportării către conducere, marketingul) reiau secțiunea ei „About” de pe
// LinkedIn. Cele patru roluri din 1997–2002 reiau CV-urile ei din 2003.
// Descrierile companiilor sunt din aceleași CV-uri și de pe site-urile
// companiilor — doar ce s-a putut verifica acolo; afirmațiile din presă
// (poziția de lider, cifre de investiții, pierderile unui fost angajator) au
// fost lăsate deliberat deoparte. Pentru RH Printing nu există niciun
// document: titlul și datele sunt de pe LinkedIn, iar textul se limitează la
// ce rezultă din titlu și din profilul companiei. Nu s-au inventat cifre —
// vezi nota din capul fișierului shape.ts.
//
// Două convenții, ușor de schimbat: titlurile de post sunt cele din documente
// (inclusiv „Sales Executive”, cum apare în CV-ul ei), iar proza este scrisă
// neutru din punct de vedere al genului (perfect compus, fără adjective
// predicative despre sine).

export const ro: ProfileText = {
  site: {
    title: 'Șef Birou Vânzări | Vânzări B2B | Tipar și ambalaje',
    titleShort: 'Șef Birou Vânzări | Tipar B2B',
    tagline:
      'Șef Birou Vânzări la Tipografia Everest, București. În vânzări B2B din 2000 și în industria tipografică din 2001 — oferte, negociere, contracte și coordonarea unei echipe de agenți de vânzări.',
    intro:
      'Șef Birou Vânzări la Tipografia Everest, în subordinea Directorului Comercial. În vânzări din 2000 și în industria tipografică din 2001. Coordonez agenții de vânzări, gestionez un portofoliu propriu de clienți și particip la planificarea și implementarea strategiei de vânzări. Întregul ciclu comercial este munca mea de zi cu zi: oferta de preț, negocierea, contractul, comanda urmărită prin producție și încasarea la termen.',
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
        'Conduc biroul de vânzări, în subordinea Directorului Comercial: raportarea agenților de vânzări, alocarea lucrărilor între ei și deplasările lor la clienți — alături de un portofoliu propriu de clienți.',
      aboutShort:
        'Tipografie din București — 30 de ani de experiență, o echipă de peste 140 de oameni, offset și digital.',
      about:
        'Tipografia Everest, fondată la București în 1994, este o tipografie cu trei decenii de experiență și o echipă de peste 140 de oameni. Tipărește în coală și în rolă, offset și digital, cu o gamă completă de finisări, și prelucrează circa 400 de tone de hârtie pe lună. Lucrările ei merg de la tipărituri comerciale, cărți și editură la agende și blocnotesuri, etichete și ambalaje și legătorie de artă, sub certificările ISO 9001 (calitate), ISO 14001 (mediu) și FSC (lanț de custodie). În februarie 2012 a preluat tipografia RH Printing.',
      summary:
        'Promovare în aprilie 2015, la trei ani după venirea în tipografie ca reprezentant comercial. Rolul adaugă muncii de vânzări conducerea biroului însuși: cum raportează agenții, cum se alocă lucrările și cum lucrează vânzările cu producția, expediția și departamentul financiar.',
      bullets: [
        'Agenții de vânzări: coordonarea raportării zilnice a activității agenților, la termenele stabilite de Directorul Comercial.',
        'Alocarea lucrărilor: împărțirea lucrărilor pe agenți, împreună cu Directorul Comercial sau Directorul General, astfel încât distribuția să fie echitabilă.',
        'Vizite la clienți: supervizarea deplasărilor agenților la clienți și asigurarea resurselor necesare.',
        'Strategia de vânzări: participare la planificarea și implementarea strategiei de vânzări și asistarea Directorului Comercial la întâlniri și negocieri.',
        'Vânzări și producție: coordonarea proiectelor interne de îmbunătățire a fluxului de informații dintre vânzări și celelalte departamente, pentru o planificare eficientă a comenzilor în producție.',
        'Raportare către conducere: rapoarte de vânzări săptămânale, lunare și anuale, estimări de vânzări și rapoarte de analiză pentru Directorul Comercial și Directorul General.',
        'Ofertare la timp: propuneri de îmbunătățire a activității zilnice a biroului de vânzări, astfel încât ofertele să ajungă la clienți la timp.',
        'Contracte și aprobări: negocierea și semnarea contractelor de prestări servicii tipografice și aprobarea stornărilor de facturi și a comisioanelor către terți, în limitele stabilite de Directorul Comercial și Directorul General.',
        'Marketing: negocierea și organizarea evenimentelor și a campaniilor care promovează produsele companiei.',
        'Portofoliu propriu de clienți: oferte, comenzi, contracte și relația cu clienții, în continuarea rolului anterior.',
      ],
      focus: [
        'Biroul de vânzări',
        'Agenți de vânzări',
        'Strategia de vânzări',
        'Raportare',
        'Planificarea producției',
      ],
    },

    'everest-rep': {
      position: 'Reprezentant comercial',
      period: 'Februarie 2012 – Aprilie 2015',
      location: 'București, România',
      impact:
        'Am reprezentat tipografia în relația cu clienții existenți și potențiali — de la oferta de preț și consultanța tehnică la contractul semnat și încasarea contravalorii.',
      bullets: [
        'Portofoliul de clienți: răspunsul la cererile de ofertă, transmiterea comenzilor în lucru în condițiile agreate și informarea permanentă a clienților despre stadiul comenzii.',
        'Clienți noi: identificarea și contactarea clienților potențiali și răspunsul în timp util la cererile venite pe orice canal de vânzare.',
        'Contracte: întocmirea, negocierea și semnarea contractelor de prestări servicii tipografice, în limitele stabilite de Directorul Comercial și Directorul General.',
        'Planul de vânzări: analiza zilnică a vânzărilor proprii față de planul lunar, trimestrial și anual.',
        'Încasări: urmărirea încasării la termenele convenite și măsuri pentru recuperarea creanțelor.',
        'Verificarea clienților noi: orice client nou verificat la Centrala Incidentelor de Plăți, la Registrul Comerțului și la Biroul Insolvenței înainte de semnarea contractului.',
        'Calitate și reclamații: feedbackul clienților transmis conducerii; reclamațiile înregistrate în Registrul de Neconformități și urmărite până la soluționare.',
        'Produse noi: urmărirea produselor și soluțiilor noi din domeniu și propunerea lor pentru oferta tipografiei.',
        'Analiza pieței: concurența, tendințele pieței de servicii tipografice și mediul de afaceri al fiecărui client.',
      ],
      focus: [
        'Portofoliu de clienți',
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
        'Tipografia familiei Rațiu din București, specializată în tipar offset în coală; preluată de Tipografia Everest în 2012.',
      about:
        'RH Printing a fost tipografia familiei Rațiu din București, specializată în tipar offset în coală. În februarie 2012 a fost preluată de Tipografia Everest.',
      summary:
        'Aproape nouă ani de vânzări de tipar către clienți business. În februarie 2012, odată cu preluarea RH Printing de către Tipografia Everest, am continuat la Everest.',
      bullets: [
        'Portofoliu de clienți: oferte de preț, comenzi și relația de zi cu zi cu clienții business.',
        'Comenzi în producție: urmărirea fiecărei comenzi prin producție, până la livrare.',
      ],
      focus: ['B2B', 'Offset în coală', 'Ofertare', 'Producție'],
    },

    rodata: {
      position: 'Sales Executive',
      period: 'Aprilie 2001 – Decembrie 2002',
      location: 'București, România',
      impact:
        'Am vândut ambalaje tipărite către clienți business — de la oferta de preț și contract la comanda urmărită prin producție.',
      aboutShort:
        'Societate tipografică producătoare de ambalaje din hârtie, carton și folie OPP, în tipar offset și rotogravură.',
      about:
        'Rodata este un producător bucureștean de etichete și ambalaje alimentare și nealimentare — etichete pentru băuturi răcoritoare și apă minerală, ambalaje pentru snacks tipărite în rotogravură — cu servicii complete de pre-press, consultanță de ambalare, producție integrată și logistică.',
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
        'Oferte de preț, contracte și analiza vânzărilor pentru un importator, în relație cu clienți din România și furnizori externi.',
      aboutShort: 'Importator de instalații și echipamente pentru GPL.',
      bullets: [
        'Oferte și contracte: ofertare și negocierea contractelor cu clienții.',
        'Furnizori externi: relația cu furnizorii externi de marfă și documentele bancare aferente fiecărui import.',
        'Bănci și autorități: relația cu organismele financiar-bancare și cu administrația de stat.',
        'Analiza vânzărilor: analize de vânzări și marketing și raportare către conducerea firmei.',
      ],
      focus: ['B2B', 'Import', 'Oferte și contracte', 'Analiza vânzărilor'],
    },

    delta: {
      position: 'Asistent de Marketing',
      period: 'Iunie 1999 – August 2000',
      location: 'București, România',
      impact:
        'Am elaborat și implementat politica de marketing și de promovare a firmei și am realizat un studiu permanent al concurenței.',
      aboutShort:
        'Importator de produse pentru amenajări interioare — gresie, faianță, obiecte sanitare.',
      bullets: [
        'Politica de marketing: elaborarea și implementarea strategiei de marketing a firmei, în special a politicii de promovare — a imaginii firmei și a produselor comercializate.',
        'Studiul concurenței: cercetare de birou și de teren asupra concurenței, cu rapoarte periodice.',
      ],
      focus: ['Marketing', 'Promovare', 'Studii de piață'],
    },

    euromobex: {
      position: 'Economist',
      period: 'Iulie 1997 – Iunie 1999',
      location: 'București, România',
      impact:
        'Primul rol după facultate: contabilitate, relația cu băncile și documentație de import–export pentru o firmă de comerț — baza financiară a muncii de vânzări care a urmat.',
      aboutShort: 'Importator de materiale pentru industria mobilei și exportator de mobilier.',
      bullets: [
        'Contabilitate: operațiuni de contabilitate primară.',
        'Bănci și autorități: relația cu organismele financiar-bancare și cu administrația de stat.',
        'Parteneri: clienți și furnizori interni și externi, inclusiv documentația de import–export.',
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
        'Raportarea activității',
        'Alocarea lucrărilor',
        'Planificarea vizitelor la clienți',
        'Strategia de vânzări — planificare și implementare',
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
        'Reclamații și satisfacția clienților',
      ],
    },
    negotiation: {
      group: 'Oferte și contracte',
      blurb: 'De la oferta de preț la acordul semnat.',
      items: [
        'Oferte de preț',
        'Negociere',
        'Contracte de prestări servicii tipografice',
        'Semnarea contractelor în limite delegate',
        'Urmărirea derulării contractelor',
      ],
    },
    pipeline: {
      group: 'Clienți noi și planul de vânzări',
      blurb: 'Clienții noi și planul față de care se măsoară rezultatele.',
      items: [
        'Prospectarea clienților noi',
        'Vânzare directă și indirectă',
        'Planuri de vânzări lunare, trimestriale și anuale',
        'Analiza zilnică a vânzărilor',
        'Rapoarte și estimări pentru conducere',
      ],
    },
    business: {
      group: 'Fundamente de business',
      blurb: 'Partea comercială și financiară a unei vânzări.',
      items: [
        'Încasări și creanțe',
        'Verificarea clienților noi',
        'Analiza pieței tipografice și a concurenței',
        'Contabilitate',
        'Import și furnizori externi',
      ],
    },
    tools: {
      group: 'Instrumente',
      blurb: 'Instrumentele de lucru ale rolului.',
      items: [
        'Microsoft Office — Word, Excel, PowerPoint',
        'Gestionarea bazei de date a clienților',
      ],
    },
    personal: {
      group: 'Calități personale',
      blurb: 'Ce aduc dincolo de fișa postului — în cuvintele mele.',
      items: [
        'Lucru cu termene-limită strânse',
        'Gândire strategică și calități organizatorice',
        'Învățare rapidă și integrare rapidă într-o echipă',
        'Experiență directă și îndelungată în lucrul cu oamenii',
        'Gândire critică și mobilitate internă',
        'Obiectivitate și eficiență',
        'Creativitate și imaginație',
        'Educație vastă, în științe și în domeniul umanist',
        'Cunoștințe conceptuale și umane extinse',
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
        'Numire la conducerea biroului de vânzări la trei ani după venirea în Tipografia Everest ca reprezentant comercial, continuând totodată gestionarea unui portofoliu propriu de clienți.',
    },
  },
};
