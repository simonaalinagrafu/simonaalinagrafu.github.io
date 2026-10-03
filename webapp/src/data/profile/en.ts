import type { ProfileText } from './shape';

// English profile text.
//
// WHERE IT COMES FROM. The Everest roles restate her job descriptions (2012
// and 2015) and the 2015 contract addendum; the four roles from 1997 to 2002
// restate her own CVs of 2003; the company lines are from those CVs and from
// the companies' public sources. RH Printing is still drafted from her
// LinkedIn title and dates, and awaits her wording. No figures are invented —
// see the note at the top of shape.ts.

export const en: ProfileText = {
  site: {
    title: 'Head of Sales Office | B2B Print Sales | Key Accounts',
    titleShort: 'Head of Sales Office | B2B Print',
    tagline:
      'Head of the sales office at Tipografia Everest. In B2B sales since 2000 and in printing since 2001 — offers, negotiation, contracts and a team of sales agents.',
    intro:
      'In sales since 2000 and in the printing industry since 2001. Today I run the sales office at Tipografia Everest — coordinating the sales agents while keeping a client portfolio of my own — and the whole commercial cycle is part of the job: the price offer, the negotiation, the contract, the order through production, and the payment collected on time.',
    location: 'Bucharest, Romania',
  },

  extras: {
    languages: 'English — good; French, Russian — basic',
    licence: 'Driving licence, category B (since 2001)',
  },

  roles: {
    'everest-head': {
      position: 'Head of Sales Office',
      period: 'April 2015 – Present',
      location: 'Bucharest, Romania',
      impact:
        'Run the sales office: the agents’ reporting, the way work is shared out among them, and their visits to clients — on top of a client portfolio of my own.',
      aboutShort: 'Bucharest printing house — 30 years, a team of over 140, offset and digital.',
      about:
        'Tipografia Everest, founded in Bucharest in 1994, is a printing house with three decades of experience and a team of over 140 people, covering offset and digital printing with a full range of finishing techniques. Its work spans commercial printing, books and publishing, agendas and notebooks, labels and packaging, and art bindery, under ISO 9001 quality and ISO 14001 environmental management systems certified since 2007. In February 2012 it took over the assets of the RH Printing house, doubling its capacity and becoming the leader of the local sheet-fed offset market.',
      summary:
        'Promoted in April 2015, three years after joining as a sales representative. The sales work carries on as before; what the role adds is the office itself — how the agents report, how the jobs are shared out, and how sales works with production, dispatch and finance.',
      bullets: [
        'Coordinate the sales agents: their daily activity reports, delivered on the deadlines the Commercial Director sets.',
        'Share out the work: allocating jobs among the agents together with the Commercial or General Director, so the load is fair.',
        'Supervise client visits: planning the agents’ trips to clients and the resources they need.',
        'Offers on time: proposing changes to the sales office’s daily work so that price offers go out when promised.',
        'Sales and production: leading internal projects on the flow of information between sales and the other departments, so orders are planned into production efficiently.',
        'Analysis for management: sales analysis reports for the Commercial Director and the General Director.',
        'Own portfolio: offers, orders, contracts and the client relationship — the work of the role before, which carries on.',
      ],
      focus: [
        'Sales office',
        'Sales agents',
        'Work allocation',
        'Reporting',
        'Production planning',
      ],
    },

    'everest-rep': {
      position: 'Sales Representative',
      period: 'February 2012 – April 2015',
      location: 'Bucharest, Romania',
      impact:
        'Represented the printing house to existing and new clients — from the price offer and technical advice to the signed contract and the payment collected.',
      bullets: [
        'Client portfolio: answering requests for offers, passing orders into production on the agreed terms, and keeping each client informed at every stage of their order.',
        'New business: finding and contacting potential clients, and answering requests from every sales channel in good time.',
        'Contracts: preparing, negotiating and signing printing-service contracts within the limits set by the Commercial and General Directors.',
        'Client checks: every new client verified with the payment-incidents register, the Trade Register and the insolvency records before a contract is signed.',
        'Collections: following up payments on the agreed terms and acting on overdue receivables.',
        'Sales plan: a daily analysis of my own sales against the monthly, quarterly and annual plan.',
        'Quality and complaints: client feedback passed to management, complaints logged in the non-conformity register and followed until resolved.',
        'Market watch: the competition, the trends in printing services, and each client’s own business.',
      ],
      focus: ['Key accounts', 'New business', 'Offers & contracts', 'Collections', 'Sales plan'],
    },

    'rh-printing': {
      position: 'Senior Sales Executive',
      period: 'May 2003 – February 2012',
      location: 'Bucharest, Romania',
      aboutShort:
        'The Rațiu family’s printing house, one of the most modern in the country; taken over by Everest in 2012.',
      about:
        'RH Printing was the Rațiu family’s printing house — founded by Ion Rațiu in the 1990s and rebuilt in 2007 by Nicolae Rațiu with an investment of around €12 million in a new plant on Bulevardul Timișoara, with equipment brought from Japan, regarded as one of the most modern in the country and specialised in sheet-fed offset for advertising materials. After several years of losses, its assets were taken over in February 2012 by Tipografia Everest, which thereby became the leader of the local sheet-fed offset market.',
      summary:
        'Almost nine years of selling print: a portfolio of business clients of my own, quotes on complex jobs, and a standing line to production so that what was sold was what got delivered. In February 2012, when Everest took over RH Printing, I continued at Everest.',
      bullets: [
        'Business client portfolio: prospecting, quoting, and managing the relationship for the long term.',
        'Quoting print work: specifications, print runs, deadlines and a price that was right for each job.',
        'Coordination with production: following every order from approval to delivery.',
        'Key accounts: the clients with steady volume, kept year after year.',
      ],
      focus: ['B2B', 'Print', 'Key accounts', 'Quotes', 'Production'],
    },

    rodata: {
      position: 'Sales Executive',
      period: 'April 2001 – December 2002',
      location: 'Bucharest, Romania',
      impact:
        'Sold printed packaging — paper, cardboard and OPP film, in offset and rotogravure — from the price offer to the order in production.',
      aboutShort:
        'Label and packaging manufacturer — among the most important in Romania and Eastern Europe.',
      about:
        'Rodata, founded in Bucharest in 1994, is one of the most important manufacturers of food and non-food labels and packaging in Romania and Eastern Europe: labels for soft drinks and mineral water, snack packaging printed in rotogravure, with complete pre-press services, packaging consultancy, integrated production and logistics.',
      bullets: [
        'Offers and contracts: price offers, negotiation and contracts with business clients.',
        'Orders in production: following each order and contract through production.',
        'Client relationship: the day-to-day contact with every client in the portfolio.',
        'Sales analysis: analyses and reports for the company’s management.',
      ],
      focus: ['B2B', 'Packaging', 'Offers & contracts', 'Production'],
    },

    neweuropetrolgaz: {
      position: 'Sales & Marketing Analyst',
      period: 'August 2000 – March 2001',
      location: 'Bucharest, Romania',
      impact:
        'Offers, contracts and sales analysis for an importer — on both sides of the trade, with clients at home and suppliers abroad.',
      aboutShort: 'Importer of LPG installations and equipment.',
      bullets: [
        'Offers and contracts: price offers and contract negotiation with clients.',
        'Suppliers abroad: the relationship with foreign suppliers and the banking documents behind each import.',
        'Banks and the state: the relationship with financial institutions and the state administration.',
        'Sales analysis: sales and marketing analyses and reports for management.',
      ],
      focus: ['B2B', 'Import', 'Offers & contracts', 'Sales analysis'],
    },

    delta: {
      position: 'Marketing Assistant',
      period: 'June 1999 – August 2000',
      location: 'Bucharest, Romania',
      impact:
        'Shaped the company’s marketing and promotion policy, and kept a standing study of the competition.',
      aboutShort: 'Importer of interior-finishing products — floor and wall tiles, sanitary ware.',
      bullets: [
        'Marketing policy: drafting and putting into practice the company’s marketing strategy, above all its promotion — of the company’s image and of the products it sold.',
        'Competitor research: desk and field research on the competition, with periodic reports.',
      ],
      focus: ['Marketing', 'Promotion', 'Market research'],
    },

    euromobex: {
      position: 'Economist',
      period: 'July 1997 – June 1999',
      location: 'Bucharest, Romania',
      impact:
        'The first job after university: the accounting, the banks and the paperwork behind a trading company — the numbers every later offer rests on.',
      aboutShort: 'Importer of materials for the furniture industry, and exporter of furniture.',
      bullets: [
        'Accounting: primary accounting operations.',
        'Banks and the state: the relationship with financial institutions and the state administration.',
        'Partners: clients and suppliers at home and abroad, including the import–export documents.',
      ],
      focus: ['Accounting', 'Import–export', 'Suppliers'],
    },
  },

  skills: {
    'sales-leadership': {
      group: 'Sales Office Coordination',
      blurb: 'Running the day-to-day of a sales office.',
      items: [
        'Coordinating sales agents',
        'Daily activity reporting',
        'Fair allocation of work',
        'Planning client visits',
        'Offer turnaround',
      ],
    },
    'key-accounts': {
      group: 'Client Portfolio',
      blurb: 'Keeping and growing the clients already won.',
      items: [
        'Portfolio management & growth',
        'New opportunities with existing clients',
        'Technical & commercial advice',
        'Order follow-up & client updates',
        'Complaint handling',
      ],
    },
    negotiation: {
      group: 'Offers & Contracts',
      blurb: 'From the price offer to the signed agreement.',
      items: [
        'Price offers',
        'Negotiation',
        'Printing-service contracts',
        'Pricing within approved structures',
        'Contract follow-through',
      ],
    },
    pipeline: {
      group: 'New Business & Sales Plan',
      blurb: 'New clients, and the plan the numbers are measured against.',
      items: [
        'Prospecting new clients',
        'Requests from every sales channel',
        'Monthly, quarterly & annual sales plans',
        'Daily sales analysis',
        'Reports for management',
      ],
    },
    business: {
      group: 'Business Foundations',
      blurb: 'What the numbers behind a deal mean.',
      items: [
        'Collections & receivables',
        'Client risk checks',
        'Market & competitor analysis',
        'Accounting',
        'Import & foreign suppliers',
      ],
    },
    tools: {
      group: 'Tools',
      blurb: 'The everyday instruments of the job.',
      items: ['Microsoft Office — Word, Excel', 'Email & internet', 'Client database'],
    },
    personal: {
      group: 'Personal Strengths',
      blurb: 'What I bring beyond the job description — in my own words.',
      items: [
        'Broad education in science and liberal arts',
        'Long, first-hand experience in dealing with people',
        'Extensive conceptual and human knowledge',
        'Critical thinking and internal mobility',
        'Objectivity and efficiency',
        'Creativity and imagination',
      ],
    },
  },

  education: {
    journalism: {
      school: 'University of Bucharest',
      degree: 'Journalism',
    },
    marketing: {
      school: 'Academy of Economic Studies (ASE), Bucharest',
      degree: 'Bachelor’s degree in Marketing, Faculty of Commerce',
    },
  },

  achievements: {
    promotion: {
      title: 'Promoted to Head of the Sales Office',
      role: 'Tipografia Everest · April 2015',
      description:
        'Three years after joining as a sales representative, appointed to run the sales office: coordinating the agents’ reporting, the allocation of work and their client visits, and the way the office works with production and the support departments — while keeping a client portfolio of my own.',
    },
  },
};
