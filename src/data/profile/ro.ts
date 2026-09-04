import type { ProfileText } from './shape';

// Romanian translation — drafted for review.
//
// Two deliberate choices, both worth confirming:
//  1. Job titles stay in English (Engineering Manager, Technical Lead, …).
//     That is the norm on Romanian tech CVs; translating them tends to read
//     worse, not better. Easy to change if you prefer Romanian titles.
//  2. The prose is written to stay gender-neutral. Romanian agrees adjectives
//     and participles with gender, so the compound past ("am condus", "am
//     stabilit") is used throughout and predicate adjectives about oneself are
//     avoided. Nothing here has to change if the wording is later made
//     explicitly feminine or masculine.

export const ro: ProfileText = {
  site: {
    title: 'Engineering Manager | Arhitect de Soluții | Sisteme Enterprise & AI',
    tagline:
      'Lider tehnic cu peste 20 de ani în software — de la programare de jocuri la platforme cloud cu milioane de cereri pe zi, iar acum sisteme AI agentice.',
    intro:
      'Peste 20 de ani în dezvoltare software și fiecare etapă a ei: conturarea specificației, proiectarea arhitecturii, scrierea codului, menținerea calității, livrarea versiunii și rularea ei în producție.',
    location: 'București, România',
  },

  roles: {
    nshift: {
      position: 'Engineering Manager',
      period: 'Ianuarie 2022 – Prezent',
      location: 'București, România',
      aboutShort:
        'Platformă globală de management al livrărilor — peste 1.000 de curieri în circa 190 de țări.',
      about:
        'nShift este un lider global în software de management al livrărilor și al experienței de livrare, format în 2021 prin fuziunea dintre Consignor, Unifaun și Transsmart. Platforma sa cloud acoperă întregul parcurs al coletului — opțiuni de livrare la checkout, selecția curierului pe bază de reguli, generarea etichetelor și a documentelor, urmărirea și retururile — conectând retaileri, 3PL-uri și producători la o rețea de peste 1.000 de curieri din circa 190 de țări, cu integrări în peste 450 de sisteme OMS, ERP și WMS.',
      summary:
        'Conduc echipa Webservices — una dintre echipele centrale ale companiei — care construiește servicii web ce procesează milioane de cereri pe zi și susțin multiple aplicații critice pentru business. Îmbin dezvoltarea hands-on cu leadershipul: contribui la cod, la arhitectură și la deciziile importante, asigurând în același timp alinierea între echipe.',
      bullets: [
        'Conduc și gestionez echipa Webservices: stabilind obiective clare, oferind direcție și menținând fiecare membru motivat și eficient.',
        'Stabilesc procese și standarde de inginerie: practici de dezvoltare consecvente, care îmbunătățesc colaborarea, mențin calitatea și accelerează livrarea.',
        'Recrutez și dezvolt ingineri: rol activ în angajare, onboarding și mentorat, pentru a construi o echipă competentă și unită.',
        'Ofer îndrumare tehnică: rezolv probleme complexe alături de dezvoltatori, revizuiesc design-uri și iau decizii critice în subiecte dificile.',
        'Contribui la arhitectura software: proiectarea și implementarea unor sisteme scalabile, sigure și ușor de întreținut.',
        'Dezvoltare hands-on: componente partajate, structura aplicațiilor, fluxul de date, proiectarea bazelor de date, securitate și infrastructură — plus sistemele AI construite deasupra, cu LLM-uri, orchestrare de agenți, RAG și integrare de instrumente în stil MCP.',
        'Solution Architect pentru aplicațiile noastre: proiectez și administrez mediile cloud pe AWS și implementez pipeline-uri CI/CD.',
        'Rol de Scrum Master: stand-up-uri, planificare, retrospective și comunicare eficientă între Product Owneri și dezvoltatori.',
      ],
    },

    'consignor-manager': {
      position: 'Team Manager',
      period: 'Ianuarie 2017 – Ianuarie 2022',
      location: 'București, România',
      aboutShort:
        'Cel mai important software de shipping multi-curier din Scandinavia; peste 10.000 de clienți business.',
      about:
        'Fondată la Oslo în 1997, Consignor a devenit unul dintre cei mai mari furnizori de software pentru administrarea transportului și shipping multi-curier din Scandinavia, deservind peste 10.000 de clienți business din birouri în Norvegia, Suedia, Danemarca, Finlanda, România și Marea Britanie. În 2021 a fuzionat cu Unifaun și Transsmart, devenind nShift.',
      summary:
        'Am condus două echipe — Webservices și Integrations — și am purtat pălăria pe care o cerea fiecare situație: Team Manager, Technical Lead, Project Manager (Prince2) sau dezvoltator. În practică asta a însemnat să angajez și să pregătesc oamenii care ni se alăturau, să îmi asum deciziile critice de arhitectură, să conduc proiecte peste granițele echipelor — și să scriu în continuare cod.',
      bullets: [
        'Echipa Webservices: am condus serviciile web care deserveau componentele client ale business-ului Consignor.',
        'Echipa Integrations: am adus funcționalitatea Consignor pe principalele platforme de e-commerce.',
        'Leadership de echipă: am stabilit obiective și direcție pentru ambele echipe, ținând două grupuri cu misiuni foarte diferite orientate spre aceeași platformă.',
        'Îndrumare tehnică și arhitectură: am luat deciziile critice de design și am lucrat la problemele grele alături de dezvoltatori.',
        'Recrutare și dezvoltare de ingineri: angajare, onboarding și pregătirea oamenilor care intrau în oricare dintre echipe.',
        'Dezvoltare hands-on: componente partajate, structura aplicațiilor și proiectarea bazelor de date în suita Consignor.',
      ],
    },

    'consignor-lead': {
      position: 'Technical Lead',
      period: '2009 – 2017',
      location: 'București, România',
      summary:
        'Am condus echipa Webservices, cea din spatele celor 50 de servicii web care deserveau peste 10.000 de clienți business din suita de aplicații Consignor, distribuite în Amazon Cloud. Rolul meu era să găsesc soluții tehnice solide, să pregătesc și să îndrum dezvoltatori, să ajut la angajarea celor care ni se alăturau și — nu în ultimul rând — să scriu o bună parte din cod.',
      bullets: [
        'Livrare cap-coadă: implicare în întregul flux de dezvoltare a aplicațiilor.',
        'Design de module: am proiectat multe dintre modulele software-ului de business, pentru a satisface cerințele clienților.',
        'Mentorat: am îndrumat dezvoltatori juniori și seniori deopotrivă.',
        'Documentație: am scris documentație tehnică și de utilizare detaliată.',
        'Legătura între departamente: am conectat echipa de dezvoltare cu celelalte departamente.',
      ],
    },

    teamnet: {
      position: 'Team Leader',
      period: '2008 – 2009',
      location: 'București, România',
      aboutShort: 'Companie românească de tehnologie și integrare de sisteme.',
      about:
        'TeamNet International, companie românească de tehnologie și integrare de sisteme, care livra software, infrastructură IT și soluții tehnologice pentru organizații mari din sectorul public și privat.',
      bullets: [
        'Module ERP Optimus: le-am gestionat prin fiecare etapă de dezvoltare, de la specificație la testare și implementare.',
        'Planificarea funcționalităților: am construit planuri de dezvoltare pentru funcționalități noi împreună cu departamentul de design.',
        'Calitate și mentenanță: am îmbunătățit funcționalități existente și am triat și rezolvat fiecare defect raportat de departamentul de Calitate.',
      ],
    },

    ubisoft: {
      position: 'Game Programmer',
      period: 'Ianuarie 2005 – Iunie 2008',
      location: 'București, România',
      aboutShort: 'Unul dintre cei mai mari editori de jocuri video din lume.',
      about:
        'Ubisoft este un editor francez de jocuri video fondat în 1986 de frații Guillemot, astăzi unul dintre cei mai mari din lume, cu studiouri în peste 45 de locații, în spatele unor francize precum Assassin’s Creed, Far Cry, Rainbow Six și Prince of Persia. Ubisoft București, deschis în 1992, a fost primul studio de producție al companiei din afara Franței și a devenit unul dintre cele mai mari.',
      summary:
        'Am proiectat, dezvoltat și optimizat module de gameplay și de platformă pentru patru titluri lansate sau aflate în dezvoltare.',
      bullets: [
        'Silent Hunter 4: am proiectat și construit framework-ul care gestiona evoluția Echipajului, Armamentului și Echipamentului din simulatorul de submarin, plus modulul Career.',
        'King Kong (PC): integrarea cu Windows Media Center, randare multithreaded și modulul de securitate.',
        'Blazing Angels (PC): sistemul Save/Load și implementarea shell-ului Media Center.',
        'Tom Clancy’s FireHawk: modulul ERS (Enhanced Reality System).',
      ],
    },
  },

  skills: {
    leadership: {
      group: 'Leadership & Management',
      blurb: 'Construirea, dezvoltarea și conducerea echipelor de ingineri.',
      items: [
        'Management de inginerie',
        'Leadership de echipă și tehnic',
        'Recrutare și mentorat',
        'Agile / Scrum',
        'Management de proiect (Prince2)',
        'Planificare strategică',
      ],
    },
    ai: {
      group: 'AI & Machine Learning',
      blurb: 'Sisteme agentice în producție — și teoria din spatele lor.',
      items: [
        'Dezvoltare software asistată de AI (Claude Code)',
        'Agent Skills avansate & prompt engineering',
        'Arhitecturi agentice & orchestrare de LLM-uri',
        'RAG (Retrieval-Augmented Generation)',
        'Gateway-uri, servere și integrări MCP',
        'Machine learning, rețele neuronale și fundamentele deep learning',
      ],
    },
    backend: {
      group: 'Backend & Arhitectură',
      blurb: 'Proiectarea și construirea serviciilor care susțin business-ul.',
      items: [
        'C#, .NET, ASP.NET Core, Entity Framework, LINQ',
        'Python, FastAPI, SQLAlchemy',
        'Arhitectură de soluții și software',
        'Design de framework-uri',
        'Design de API-uri (REST, gRPC, SOAP/WCF)',
      ],
    },
    cloud: {
      group: 'Cloud, Date & DevOps',
      blurb: 'Rularea fiabilă a sistemelor pe AWS, de la baza de date la pipeline.',
      items: [
        'AWS (EC2, ECS, RDS, S3, CloudFormation)',
        'Docker, CI/CD',
        'SQL Server, PostgreSQL',
        'Proiectarea bazelor de date, baze de date relaționale',
      ],
    },
    frontend: {
      group: 'Frontend & Web',
      blurb: 'Interfețe pentru platformele și instrumentele pe care le construiesc.',
      items: [
        'JavaScript, TypeScript',
        'ReactJS, Material UI',
        'HTML, CSS, SASS',
        'Astro, Tailwind CSS, HTMX',
        'Web randat pe server (ASP.NET MVC, FastAPI)',
      ],
    },
    foundations: {
      group: 'Fundamente',
      blurb: 'Matematica și bazele pe care stă tot restul.',
      items: [
        'Probabilități, algebră liniară, analiză matematică, statistică',
        'Structuri de date și algoritmi',
        'Rezolvare de probleme și gândire analitică',
        'Principii de arhitectură software',
        'Design patterns și cod curat',
      ],
    },
  },

  education: {
    msc: {
      school: 'Academia de Studii Economice, București',
      degree: 'Master în Informatică Economică, specializarea Management de Proiect',
    },
    bsc: {
      school: 'Academia de Studii Economice, București',
      degree:
        'Licență în Administrarea Afacerilor, profil Informatică, specializarea Informatică Economică aplicată în afaceri',
    },
  },

  projects: {
    'conversational-ai': {
      title: 'Platformă AI Conversațională',
      role: 'Engineering Manager & Arhitect · nShift',
      description:
        'Un asistent AI la scară mare, construit pe o arhitectură agentică: LLM-uri combinate cu straturi de orchestrare, RAG și prompt engineering structurat. Agenți specializați pe domenii, pentru departamente diferite — fiecare cu prompturile, instrumentele și accesul la date proprii — colaborează printr-un strat de orchestrare. Un pipeline continuu de ingestie indexează documentația internă, API-urile și datele de business în knowledge stores, astfel încât răspunsurile rămân contextuale și ancorate în informația specifică companiei.',
    },
    'app-builder': {
      title: 'AI App Builder — Claude Code Skill',
      role: 'Cercetare & dezvoltare independentă · Proiect personal',
      description:
        'Un skill Claude Code avansat, care construiește aplicații pornind de la codebase-uri existente, nu din imaginație. Citește codebase-uri de orice dimensiune — Python, TypeScript, JavaScript, C# — printr-un snapshot structural construit o dată și interogat de multe ori, apoi lucrează în trei moduri: generează cod nou în forma codului care există deja, migrează o aplicație către alt stack sau o traduce către altă tehnologie păstrându-i domeniul și structura. Fiecare rezultat este demonstrat, nu presupus — conformitate cu contractele, păstrarea entităților și paritate de comportament verificată direct — iar fiecare decizie care schimbă rezultatul este pusă utilizatorului, niciodată ghicită.',
    },
    webservices: {
      title: 'Platformă de Servicii Web de Mare Capacitate',
      role: 'Engineering Manager · nShift',
      description:
        'Platforma centrală de servicii web din spatele suitei de management al livrărilor nShift: zeci de servicii și aplicații full-stack distribuite pe AWS, care deservesc non-stop componentele client ale unor fluxuri de livrare critice pentru business.',
    },
  },
};
