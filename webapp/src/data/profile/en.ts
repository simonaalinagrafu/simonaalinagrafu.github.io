import type { ProfileText } from './shape';

// English profile text.
//
// WHERE IT COMES FROM. The Everest roles restate her job descriptions (2012
// and 2015) and the 2015 contract addendum; two bullets of the current role
// (management reporting cadence, marketing) restate her own LinkedIn "About".
// The four roles from 1997 to 2002 restate her own CVs of 2003. Company lines
// are from those CVs and from the companies' own sites — only what could be
// checked there; press claims (market leadership, investment figures, a
// former employer's losses) are deliberately left out. RH Printing has no
// document behind it: title and dates are from LinkedIn, and its text is kept
// to what the title and the company imply. No figures are invented — see the
// note at the top of shape.ts.

export const en: ProfileText = {
  site: {
    title: 'Head of Sales Office | B2B Sales | Printing & Packaging',
    titleShort: 'Head of Sales Office | B2B Print',
    tagline:
      'Head of the sales office at Tipografia Everest, Bucharest. In B2B sales since 2000 and in the printing industry since 2001 — offers, negotiation, contracts and the coordination of a team of sales agents.',
    intro:
      'Head of the sales office at Tipografia Everest, reporting to the Commercial Director. In sales since 2000 and in the printing industry since 2001. I coordinate the sales agents, manage a client portfolio of my own, and take part in planning and implementing the sales strategy. The full commercial cycle is my daily work: the price offer, the negotiation, the contract, the order followed through production, and the payment collected on time.',
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
        'Head of the sales office, reporting to the Commercial Director: the sales agents’ reporting, the allocation of work among them and their client visits — alongside a client portfolio of my own.',
      aboutShort:
        'Tipografia Everest 2001 SRL — Bucharest printing house: 30 years of experience, a team of over 140, offset and digital.',
      about:
        'Tipografia Everest (S.C. Tipografia Everest 2001 S.R.L.), founded in Bucharest in 1994 and based on Bulevardul Timișoara, is a printing house with three decades of experience and a team of over 140 people. It prints sheet-fed and web, offset and digital, with a full range of finishing, and processes some 400 tonnes of paper a month. Its work spans commercial printing, books and publishing, agendas and notebooks, labels and packaging, and art bindery, under ISO 9001 quality, ISO 14001 environmental and FSC chain-of-custody certification. In February 2012 it took over the RH Printing house.',
      summary:
        'Promoted in April 2015, three years after joining as a sales representative. The role adds the running of the sales office to the sales work itself: how the agents report, how work is allocated, and how sales works with production, dispatch and finance.',
      bullets: [
        'Sales agents: coordinating the agents’ daily activity reporting, to the deadlines set by the Commercial Director.',
        'Work allocation: assigning jobs to the agents together with the Commercial Director or the General Director, so that the workload is distributed fairly.',
        'Client visits: supervising the agents’ visits to clients and securing the resources they need.',
        'Sales strategy: taking part in planning and implementing the sales strategy, and assisting the Commercial Director in meetings and negotiations.',
        'Sales and production: coordinating internal projects that improve the flow of information between sales and the other departments, so that orders are planned into production efficiently.',
        'Management reporting: weekly, monthly and annual sales reports, sales estimates, and analysis reports for the Commercial Director and the General Director.',
        'Offer turnaround: proposing improvements to the daily work of the sales office so that offers reach clients on time.',
        'Contracts and approvals: negotiating and signing printing-service contracts, and approving invoice reversals and third-party commissions, within the limits set by the Commercial and General Directors.',
        'Marketing: negotiating and organising events and campaigns that promote the company’s products.',
        'Own client portfolio: offers, orders, contracts and the client relationship, continued from the previous role.',
      ],
      focus: ['Sales office', 'Sales agents', 'Sales strategy', 'Reporting', 'Production planning'],
    },

    'everest-rep': {
      position: 'Sales Representative',
      period: 'February 2012 – April 2015',
      location: 'Bucharest, Romania',
      impact:
        'Represented the printing house to existing and prospective clients — from the price offer and technical advice to the signed contract and the payment collected.',
      bullets: [
        'Client portfolio: answering requests for offers, passing orders into production on the agreed terms, and keeping each client informed of the status of their order.',
        'New business: identifying and contacting prospective clients, and answering requests from every sales channel in good time.',
        'Contracts: preparing, negotiating and signing printing-service contracts within the limits set by the Commercial and General Directors.',
        'Sales plan: a daily analysis of my own sales against the monthly, quarterly and annual plan.',
        'Collections: following up payments on the agreed terms and taking action on overdue receivables.',
        'Client due diligence: every new client checked against the payment-incidents register, the Trade Register and the insolvency records before a contract is signed.',
        'Quality and complaints: client feedback passed to management; complaints recorded in the non-conformity register and followed until resolved.',
        'New products: following new products and solutions in the field and proposing them for the printing house’s offer.',
        'Market analysis: the competition, the trends in the printing-services market, and each client’s own business environment.',
      ],
      focus: [
        'Client portfolio',
        'New business',
        'Offers & contracts',
        'Collections',
        'Sales plan',
      ],
    },

    'rh-printing': {
      position: 'Senior Sales Executive',
      period: 'May 2003 – February 2012',
      location: 'Bucharest, Romania',
      aboutShort:
        'The Rațiu family’s printing house in Bucharest, specialised in sheet-fed offset; taken over by Tipografia Everest in 2012.',
      about:
        'RH Printing was the Rațiu family’s printing house in Bucharest, specialised in sheet-fed offset printing. In February 2012 it was taken over by Tipografia Everest.',
      summary:
        'Almost nine years in print sales to business clients. In February 2012, when Tipografia Everest took over RH Printing, I continued at Everest.',
      bullets: [
        'Client portfolio: price offers, orders and the day-to-day relationship with business clients.',
        'Orders in production: following each order through production to delivery.',
      ],
      focus: ['B2B', 'Sheet-fed offset', 'Offers', 'Production'],
    },

    rodata: {
      position: 'Sales Executive',
      period: 'April 2001 – December 2002',
      location: 'Bucharest, Romania',
      impact:
        'Sold printed packaging to business clients — from the price offer and the contract to the order followed through production.',
      aboutShort:
        'Rodata SA — printing company producing paper, cardboard and OPP-film packaging, in offset and rotogravure.',
      about:
        'Rodata SA was, at the time, a printing company producing packaging from paper, cardboard and OPP film, in offset and rotogravure printing. Today it is a Bucharest manufacturer of labels and packaging for food and non-food products — labels for soft drinks and mineral water, snack packaging printed in rotogravure — with complete pre-press services, packaging consultancy, integrated production and logistics.',
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
        'Price offers, contracts and sales analysis for an importer, working with clients in Romania and suppliers abroad.',
      aboutShort: 'Neweuropetrolgaz Exim SRL — importer of LPG installations and equipment.',
      about:
        'Neweuropetrolgaz Exim SRL — a Bucharest trading company importing installations and equipment for LPG (liquefied petroleum gas).',
      bullets: [
        'Offers and contracts: price offers and contract negotiation with clients.',
        'Foreign suppliers: the relationship with suppliers abroad and the banking documents for each import.',
        'Banks and authorities: the relationship with financial institutions and the state administration.',
        'Sales analysis: sales and marketing analyses and reports for management.',
      ],
      focus: ['B2B', 'Import', 'Offers & contracts', 'Sales analysis'],
    },

    delta: {
      position: 'Marketing Assistant',
      period: 'June 1999 – August 2000',
      location: 'Bucharest, Romania',
      impact:
        'Drafted and implemented the company’s marketing and promotion policy, and ran a continuous study of the competition.',
      aboutShort:
        'Delta Distribution SA — importer of interior-finishing products: floor and wall tiles, sanitary ware.',
      about:
        'Delta Distribution SA — a Bucharest trading company importing products for interior finishing: floor tiles, wall tiles and sanitary ware.',
      bullets: [
        'Marketing policy: drafting and implementing the company’s marketing strategy, in particular its promotion policy — for the company’s image and for the products it sold.',
        'Competitor research: desk and field research on the competition, with periodic reports.',
      ],
      focus: ['Marketing', 'Promotion', 'Market research'],
    },

    euromobex: {
      position: 'Economist',
      period: 'July 1997 – June 1999',
      location: 'Bucharest, Romania',
      impact:
        'First role after university: accounting, banking and import–export documentation for a trading company — the financial grounding for the sales work that followed.',
      aboutShort:
        'Euromobex SA — importer of materials for the furniture industry, and exporter of furniture.',
      about:
        'Euromobex SA — a Bucharest trading company importing raw materials for the furniture industry and exporting furniture.',
      bullets: [
        'Accounting: primary accounting operations.',
        'Banks and authorities: the relationship with financial institutions and the state administration.',
        'Partners: clients and suppliers in Romania and abroad, including the import–export documentation.',
      ],
      focus: ['Accounting', 'Import–export', 'Suppliers'],
    },
  },

  skills: {
    'sales-leadership': {
      group: 'Sales Office Coordination',
      blurb: 'Running the day-to-day work of a sales office.',
      items: [
        'Coordinating sales agents',
        'Activity reporting',
        'Work allocation',
        'Client visit planning',
        'Sales strategy — planning & implementation',
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
        'Complaint handling & client satisfaction',
      ],
    },
    negotiation: {
      group: 'Offers & Contracts',
      blurb: 'From the price offer to the signed agreement.',
      items: [
        'Price offers',
        'Negotiation',
        'Printing-service contracts',
        'Contract signing within delegated limits',
        'Contract follow-through',
      ],
    },
    pipeline: {
      group: 'New Business & Sales Plan',
      blurb: 'New clients, and the plan the results are measured against.',
      items: [
        'Prospecting new clients',
        'Direct & indirect sales',
        'Monthly, quarterly & annual sales plans',
        'Daily sales analysis',
        'Reports & estimates for management',
      ],
    },
    business: {
      group: 'Business Foundations',
      blurb: 'The commercial and financial side of a sale.',
      items: [
        'Collections & receivables',
        'Client due diligence',
        'Printing market & competitor analysis',
        'Accounting',
        'Import & foreign suppliers',
      ],
    },
    tools: {
      group: 'Tools',
      blurb: 'The working instruments of the role.',
      items: ['Microsoft Office — Word, Excel, PowerPoint', 'Client database management'],
    },
    personal: {
      group: 'Personal Strengths',
      blurb: 'What I bring beyond the job description — in my own words.',
      items: [
        'Used to working to tight deadlines',
        'Strategic thinking and organisational skills',
        'Quick to learn and to integrate into a team',
        'Long, first-hand experience in dealing with people',
        'Critical thinking and internal mobility',
        'Objectivity and efficiency',
        'Creativity and imagination',
        'Broad education in science and liberal arts',
        'Extensive conceptual and human knowledge',
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
        'Appointed to run the sales office three years after joining Tipografia Everest as a sales representative, while continuing to manage a client portfolio of my own.',
    },
  },
};
