import type { ProfileText } from './shape';

export const en: ProfileText = {
  site: {
    title: 'Engineering Manager | Solutions Architect | Enterprise & AI Systems',
    tagline:
      'Engineering leader with 20+ years in software — from game programming to cloud platforms handling millions of requests a day, now building agentic AI systems.',
    intro:
      '20+ years in software development, and every phase of it: shaping the specification, designing the architecture, writing the code, holding the quality, shipping the release, and running it in production.',
    location: 'Bucharest, Romania',
  },

  roles: {
    nshift: {
      position: 'Engineering Manager',
      period: 'January 2022 – Present',
      location: 'Bucharest, Romania',
      aboutShort:
        'Global delivery-management platform — over 1,000 carriers across some 190 countries.',
      about:
        'nShift is a global leader in delivery and experience management software, formed in 2021 from the merger of Consignor, Unifaun and Transsmart. Its cloud platform covers the whole parcel journey — checkout delivery options, rule-based carrier selection, label and document generation, tracking, and returns — connecting retailers, 3PLs and manufacturers to a network of over 1,000 carriers across some 190 countries, with integrations into 450+ OMS, ERP and WMS systems.',
      summary:
        'I lead the Webservices Team — one of the company’s core teams — building web services that handle millions of requests per day and support multiple business-critical applications. I combine hands-on development with leadership: contributing to coding, architecture, and decision-making while ensuring alignment across teams.',
      bullets: [
        'Lead and manage the Webservices Team: setting clear goals, providing direction, and keeping every member motivated and effective.',
        'Establish engineering processes and standards: consistent development practices that improve collaboration, maintain quality, and accelerate delivery.',
        'Recruit and develop engineers: active role in hiring, onboarding, and mentoring to build a skilled, cohesive team.',
        'Provide technical guidance: solving complex issues alongside developers, reviewing designs, and making critical decisions on challenging topics.',
        'Contribute to software architecture: design and implementation of scalable, secure, and maintainable systems.',
        'Hands-on development: shared components, application structure, data flow, database design, security, and infrastructure — plus the AI systems built on top, with LLMs, agent orchestration, RAG, and MCP-style tool integration.',
        'Solution Architect for our applications: designing and managing cloud environments on AWS and implementing CI/CD pipelines.',
        'Act as Scrum Master: stand-ups, planning, retrospectives, and effective communication between Product Owners and developers.',
      ],
    },

    'consignor-manager': {
      position: 'Team Manager',
      period: 'January 2017 – January 2022',
      location: 'Bucharest, Romania',
      aboutShort:
        'Scandinavia’s leading multi-carrier shipping software; 10,000+ business customers.',
      about:
        'Founded in Oslo in 1997, Consignor grew into one of the largest suppliers of transport administration and multi-carrier shipping software in Scandinavia, serving more than 10,000 business customers from offices in Norway, Sweden, Denmark, Finland, Romania and the UK. In 2021 it merged with Unifaun and Transsmart to become nShift.',
      summary:
        'I led two teams — the Webservices Team and the Integration Team — and wore the hat each situation demanded: Team Manager, Technical Lead, Project Manager (Prince2), or Software Developer. In practice that meant hiring and training the people who joined, owning the critical architecture decisions, running projects across team boundaries — and still writing code myself.',
      bullets: [
        'Webservices Team: ran the web services serving the client components of the Consignor business.',
        'Integration Team: brought Consignor functionality to the major e-commerce platforms.',
        'Team leadership: set goals and direction for both teams, keeping two groups with very different missions pulling toward one platform.',
        'Technical guidance and architecture: made the critical design decisions and worked through the hard problems alongside the developers.',
        'Recruit and develop engineers: hiring, onboarding, and training the people who joined either team.',
        'Hands-on development: shared components, application structure, and database design across the Consignor suite.',
      ],
    },

    'consignor-lead': {
      position: 'Technical Lead',
      period: '2009 – 2017',
      location: 'Bucharest, Romania',
      summary:
        'I led the Webservices Team, behind the 50 web services that served over 10,000 business clients in the Consignor application suite, distributed across Amazon Cloud. My role was to find sound technical solutions, mentor and train developers, help hire the people who joined us, and — not least — write a great deal of the code myself.',
      bullets: [
        'End-to-end delivery: involved across the entire application development workflow.',
        'Module design: designed many modules of the business software to satisfy client requirements.',
        'Mentoring: guided both junior and senior developers.',
        'Documentation: wrote detailed technical and user documentation.',
        'Cross-department liaison: connected the development team with other departments.',
      ],
    },

    teamnet: {
      position: 'Team Leader',
      period: '2008 – 2009',
      location: 'Bucharest, Romania',
      aboutShort: 'Romanian technology and systems-integration company.',
      about:
        'TeamNet International, a Romanian technology and systems-integration company delivering software, IT infrastructure, and technology solutions for major public- and private-sector organizations.',
      bullets: [
        'Optimus ERP modules: managed them through every development step, from specification to testing and deployment.',
        'Feature planning: built development plans for new features with the design department.',
        'Quality and maintenance: enhanced existing features, and triaged and resolved every defect raised by the Quality Department.',
      ],
    },

    ubisoft: {
      position: 'Game Programmer',
      period: 'January 2005 – June 2008',
      location: 'Bucharest, Romania',
      aboutShort: 'One of the world’s largest video game publishers.',
      about:
        'Ubisoft is a French video game publisher founded in 1986 by the Guillemot brothers and now one of the largest in the world, with studios across more than 45 locations behind franchises such as Assassin’s Creed, Far Cry, Rainbow Six and Prince of Persia. Ubisoft Bucharest, opened in 1992, was the company’s first production studio outside France and grew into one of its largest.',
      summary:
        'I designed, developed, and optimized gameplay and platform modules on four shipped and in-development titles.',
      bullets: [
        'Silent Hunter 4: designed and built the framework managing the evolution of the Crew, Weapons, and Equipment of the U-Boat simulator, plus the Career module.',
        'King Kong (PC): Windows Media Center integration, multithreaded rendering, and the security module.',
        'Blazing Angels (PC): Save/Load system and Media Center shell implementation.',
        'Tom Clancy’s FireHawk: ERS (Enhanced Reality System) module.',
      ],
    },
  },

  skills: {
    leadership: {
      group: 'Leadership & Management',
      blurb: 'Building, growing, and running engineering teams.',
      items: [
        'Engineering Management',
        'Team & Technical Leadership',
        'Hiring & Mentoring',
        'Agile / Scrum',
        'Project Management (Prince2)',
        'Strategic Planning',
      ],
    },
    ai: {
      group: 'AI & Machine Learning',
      blurb: 'Agentic systems in production — and the theory underneath them.',
      items: [
        'AI-Assisted Software Development (Claude Code)',
        'Advanced Agent Skills & Prompt Engineering',
        'Agentic Architectures & LLM Orchestration',
        'RAG (Retrieval-Augmented Generation)',
        'MCP Gateways, Servers & Integrations',
        'Machine Learning, Neural Networks & Deep Learning Foundations',
      ],
    },
    backend: {
      group: 'Backend & Architecture',
      blurb: 'Designing and building the services that carry the business.',
      items: [
        'C#, .NET, ASP.NET Core, Entity Framework, LINQ',
        'Python, FastAPI, SQLAlchemy',
        'Solution & Software Architecture',
        'Framework Design',
        'API Design (REST, gRPC, SOAP/WCF)',
      ],
    },
    cloud: {
      group: 'Cloud, Data & DevOps',
      blurb: 'Running systems reliably on AWS, from database to pipeline.',
      items: [
        'AWS (EC2, ECS, RDS, S3, CloudFormation)',
        'Docker, CI/CD',
        'SQL Server, PostgreSQL',
        'Database Design, Relational Databases',
      ],
    },
    frontend: {
      group: 'Frontend & Web',
      blurb: 'Interfaces for the platforms and tools I build.',
      items: [
        'JavaScript, TypeScript',
        'ReactJS, Material UI',
        'HTML, CSS, SASS',
        'Astro, Tailwind CSS, HTMX',
        'Server-Rendered Web (ASP.NET MVC, FastAPI)',
      ],
    },
    foundations: {
      group: 'Foundations',
      blurb: 'The math and fundamentals everything else stands on.',
      items: [
        'Probability, Linear Algebra, Calculus, Statistics',
        'Data Structures & Algorithms',
        'Problem Solving & Analytical Thinking',
        'Software Architecture Principles',
        'Design Patterns & Clean Code',
      ],
    },
  },

  education: {
    msc: {
      school: 'Academy of Economic Studies, Bucharest',
      degree: 'Master of Science in Computer Science, Specialization in Project Management',
    },
    bsc: {
      school: 'Academy of Economic Studies, Bucharest',
      degree:
        'Bachelor in Business Administration, Major in Computer Science, Specialization in Computer Science Applied in Business',
    },
  },

  projects: {
    'conversational-ai': {
      title: 'Conversational AI Platform',
      role: 'Engineering Manager & Architect · nShift',
      description:
        'A large-scale AI assistant built on an agentic architecture: LLMs combined with orchestration layers, RAG, and structured prompt engineering. Domain-specific agents for different departments — each with tailored prompts, tools, and data access — collaborate through an orchestration layer. A continuous ingestion pipeline indexes internal documentation, APIs, and business data into knowledge stores, so responses stay context-aware and grounded in company-specific information.',
    },
    'app-builder': {
      title: 'AI App Builder — Claude Code Skill',
      role: 'Independent R&D · Personal project',
      description:
        'An advanced Claude Code skill that builds applications from existing codebases instead of from imagination. It reads codebases of any size — Python, TypeScript, JavaScript, C# — through a structural snapshot built once and queried many times, then works in three modes: generating new code shaped like the code that already exists, migrating an application to another stack, or translating it to another technology while preserving its domain and structure. Every output is proven rather than assumed — contract conformance, entity preservation, and side-by-side behaviour parity — and every decision that shapes the result is put to the user, never guessed.',
    },
    webservices: {
      title: 'High-Throughput Webservices Platform',
      role: 'Engineering Manager · nShift',
      description:
        'The core web-services platform behind nShift’s delivery-management suite: dozens of services and full-stack applications distributed across AWS, serving the client components of business-critical delivery workflows around the clock.',
    },
  },
};
