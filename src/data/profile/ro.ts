import type { ProfileText } from './shape';

// Textul profilului în română — schiță pentru revizuire.
//
// CE ESTE INVENTAT. Doar rolul de la Tipografia Everest este real, și chiar și
// datele lui sunt o presupunere. Cele trei roluri anterioare, educația și
// cele trei realizări sunt substituenți plauzibili pentru o carieră de 20 de
// ani în vânzări B2B — vezi `placeholder: true` în shape.ts. Nu s-au inventat
// cifre: singurul număr de pe site este „peste 20 de ani”.
//
// Două convenții, ușor de schimbat: titlurile de post păstrează engleza acolo
// unde aceasta este norma pe piața românească (Key Account Manager), iar proza
// este scrisă neutru din punct de vedere al genului (perfect compus, fără
// adjective predicative despre sine).

export const ro: ProfileText = {
  site: {
    title: 'Manager de Vânzări | Vânzări B2B | Conducere de echipe',
    tagline:
      'Manager de vânzări cu peste 20 de ani în B2B — de la vânzări în teren la conturi cheie și la conducerea unei echipe care livrează, an după an.',
    intro:
      'Peste 20 de ani în vânzări B2B și fiecare etapă a lor: găsirea clientului, înțelegerea afacerii lui, negocierea acordului, respectarea lui și păstrarea relației pe termen lung. Astăzi conduc echipa de vânzări a Tipografiei Everest.',
    location: 'București, România',
  },

  roles: {
    everest: {
      position: 'Manager de Vânzări',
      period: '2013 – Prezent',
      location: 'București, România',
      aboutShort: 'Tipografie care lucrează cu clienți business.',
      summary:
        'Conduc echipa de vânzări — recrutare, stabilirea obiectivelor și coaching — păstrând în același timp conturile cele mai mari în portofoliul meu. Rolul meu este să transform un pipeline în venituri predictibile și să mă asigur că clienții care ne acordă încrederea rămân cu noi an după an.',
      bullets: [
        'Conduc echipa de vânzări: obiective clare, direcție și fiecare membru motivat și responsabil.',
        'Gestionez conturile cheie: relațiile care aduc cea mai mare parte din venituri, de la primul contact la reînnoire.',
        'Construiesc pipeline-ul: prognoze, prioritizarea oportunităților și cifre care spun adevărul.',
        'Negociez și închei: prețuri, contracte și condiții cu clienți business de orice dimensiune.',
        'Recrutez și dezvolt oameni de vânzări: angajare, integrare și coaching pentru o echipă care performează ca un întreg.',
        'Stabilesc procesul de vânzare: practici consecvente de la lead la livrare, ca rezultatele să nu depindă de eforturi eroice.',
        'Lucrez împreună cu producția: ce vindem se aliniază cu ce putem livra, la timp și conform specificațiilor.',
      ],
    },

    'team-lead': {
      position: 'Coordonator Echipă Vânzări',
      period: '2009 – 2013',
      location: 'București, România',
      aboutShort: 'Distribuitor B2B — substituent până la confirmarea angajatorului real.',
      summary:
        'Primul meu rol de conducere: coordonarea unei echipe de reprezentanți de vânzări, având în continuare un portofoliu propriu. Am învățat că o echipă își atinge obiectivele atunci când fiecare știe exact ce se așteaptă de la el și primește ajutor înainte să îl ceară.',
      bullets: [
        'Coordonez echipa de vânzări: direcție zilnică, analize săptămânale și obiective comune, vizibile pentru toți.',
        'Coaching pentru reprezentanți: particip la întâlniri cu clienții, revizuiesc ofertele și construiesc încrederea fiecăruia de a închide.',
        'Gestionez pipeline-ul echipei: oportunitățile avansează, prognozele rămân realiste.',
        'Păstrez un portofoliu propriu: conturile pe care le-am adus au rămas la mine și în perioada în care am condus echipa.',
      ],
    },

    'key-account': {
      position: 'Key Account Manager',
      period: '2006 – 2009',
      location: 'București, România',
      aboutShort: 'Furnizor de servicii B2B — substituent până la confirmarea angajatorului real.',
      summary:
        'Responsabilitate pentru conturile care contau cel mai mult: înțelegerea afacerii fiecărui client suficient de bine încât să anticipez ce va avea nevoie în continuare și negocierea unor acorduri cu care ambele părți puteau trăi ani la rând.',
      bullets: [
        'Gestionez conturile cheie: punct unic de contact pentru cei mai mari clienți business.',
        'Negociez contracte: prețuri, condiții și reînnoiri, cu retenția drept măsură a succesului.',
        'Dezvolt conturile existente: găsesc următoarea nevoie înainte ca clientul să caute în altă parte.',
        'Coordonez livrarea: ce s-a promis este ce ajunge la client.',
      ],
    },

    'sales-rep': {
      position: 'Reprezentant Vânzări B2B',
      period: '2004 – 2006',
      location: 'București, România',
      aboutShort: 'Companie de distribuție — substituent până la confirmarea angajatorului real.',
      bullets: [
        'Prospectez clienți business noi: contact la rece, primele întâlniri și o listă tot mai lungă de companii care au spus da.',
        'Prezint și ofertez: potrivesc oferta cu ce are nevoie clientul cu adevărat.',
        'Construiesc obiceiurile: un pipeline plin, un CRM curat și follow-up-uri care nu scapă niciodată.',
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
        'Sisteme CRM',
        'Microsoft Office / Excel',
        'Instrumente de ofertare',
        'Cadența întâlnirilor de vânzări',
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
    degree: {
      school: '[Universitate]',
      degree: 'Licență în Marketing / Economie',
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
