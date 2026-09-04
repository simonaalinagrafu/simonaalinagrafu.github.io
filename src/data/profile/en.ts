import type { ProfileText } from './shape';

// English profile text.
//
// WHAT IS REAL AND WHAT IS DRAFTED. The six roles — employers, titles, dates —
// and both education entries are from Simona's LinkedIn profile. The Everest
// bullets restate the responsibilities in her own LinkedIn "About"; the prose
// under the five earlier roles is drafted to fit the title and awaits her
// wording. No figures are invented. Still unconfirmed, and marked
// `placeholder: true` in shape.ts: the three achievements.

export const en: ProfileText = {
  site: {
    title: 'Sales Manager | B2B Sales | Team Leadership',
    tagline:
      'Sales manager with 20+ years in B2B sales, most of them in the printing industry — from field sales to key accounts to leading a sales team that delivers.',
    intro:
      '20+ years in B2B sales, most of them in the printing industry, and every stage of it: finding the client, understanding the business, negotiating the agreement, delivering on it, and keeping the relationship for the long term. Today I lead the sales team at Tipografia Everest.',
    location: 'Bucharest, Romania',
  },

  extras: ['Driving licence, category B'],

  roles: {
    everest: {
      position: 'Sales Manager',
      period: 'February 2012 – Present',
      location: 'Bucharest, Romania',
      aboutShort: 'Bucharest printing house — 30 years, a team of over 140, offset and digital.',
      about:
        'Tipografia Everest, founded in Bucharest in 1994, is a printing house with three decades of experience and a team of over 140 people, covering offset and digital printing with a full range of finishing techniques. Its work spans commercial printing, books and publishing, agendas and notebooks, labels and packaging, and art bindery, under ISO 9001 quality and ISO 14001 environmental management systems certified since 2007. In February 2012 it took over the assets of the RH Printing house, doubling its capacity and becoming the leader of the local sheet-fed offset market.',
      summary:
        'I lead the sales team at Tipografia Everest and keep my own hand on the accounts that matter most — from the first request to the negotiated contract, the price offer built for that client, the internal order and its delivery, and the reporting and planning that keep next year predictable.',
      bullets: [
        'Lead the sales team: setting targets, giving direction, and keeping every member accountable for their numbers.',
        'Clients and their needs: handling requests and complaints, and matching products to what each client actually needs.',
        'Negotiate contracts: with clients and with suppliers — prices, delivery terms and conditions.',
        'Recruit new customers: prospecting and bringing new business accounts into the portfolio.',
        'Price offers per client: managing each client’s budget and building an offer adapted to it.',
        'Plan internal orders: scheduling production orders and negotiating delivery terms.',
        'Sales reporting and planning: weekly, monthly and annual reports; monthly and annual sales estimates.',
        'Marketing activities: negotiating and organising events and campaigns that promote the company’s products.',
      ],
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
    },

    rodata: {
      position: 'Sales Executive',
      period: 'April 2001 – December 2002',
      location: 'Bucharest, Romania',
      aboutShort:
        'Label and packaging manufacturer — among the most important in Romania and Eastern Europe.',
      about:
        'Rodata, founded in Bucharest in 1994, is one of the most important manufacturers of food and non-food labels and packaging in Romania and Eastern Europe: labels for soft drinks and mineral water, snack packaging printed in rotogravure, with complete pre-press services, packaging consultancy, integrated production and logistics.',
      bullets: [
        'B2B sales: building a portfolio of company clients for labels and packaging.',
        'Quoting and negotiation: from the first meeting to the order.',
        'Client relationship: follow-up and retention.',
      ],
    },

    europetrolgaz: {
      position: 'Sales Representative',
      period: 'August 2000 – March 2001',
      location: 'Bucharest, Romania',
      bullets: [
        'Field sales: visits, presentations and orders from business clients.',
        'Prospecting: new clients on a territory of my own.',
      ],
    },

    delta: {
      position: 'Marketing Representative',
      period: 'June 1999 – August 2000',
      location: 'Bucharest, Romania',
      aboutShort: 'Distribution company.',
      bullets: [
        'Promoting the product portfolio to business clients.',
        'Supporting the sales team: materials, campaigns and feedback from the market.',
      ],
    },

    euromobex: {
      position: 'Sales Representative',
      period: 'July 1997 – June 1999',
      location: 'Bucharest, Romania',
      summary:
        'The first sales role — and the first habits that stayed: steady prospecting, disciplined follow-up, and clients who come back.',
      bullets: [
        'Prospecting and direct sales to business clients.',
        'Building a first portfolio of clients.',
      ],
    },
  },

  skills: {
    'sales-leadership': {
      group: 'Sales Leadership',
      blurb: 'Building, coaching and running a sales team.',
      items: [
        'Sales team management',
        'Target setting & accountability',
        'Hiring & onboarding salespeople',
        'Coaching & performance reviews',
        'Sales process design',
      ],
    },
    'key-accounts': {
      group: 'Key Account Management',
      blurb: 'The relationships that carry the revenue.',
      items: [
        'Key account planning',
        'Client retention & renewals',
        'Account growth & cross-selling',
        'Executive relationships',
        'Complaint resolution',
      ],
    },
    negotiation: {
      group: 'Negotiation & Closing',
      blurb: 'Agreements both sides keep.',
      items: [
        'Pricing & commercial terms',
        'Contract negotiation',
        'Objection handling',
        'Closing techniques',
        'Tender & proposal writing',
      ],
    },
    pipeline: {
      group: 'Pipeline & Forecasting',
      blurb: 'Turning opportunities into predictable numbers.',
      items: [
        'Prospecting & lead qualification',
        'Pipeline management',
        'Sales forecasting',
        'Reporting & KPIs',
        'Territory & segment planning',
      ],
    },
    tools: {
      group: 'Tools & Process',
      blurb: 'The systems that keep a team honest.',
      items: [
        'Microsoft Office',
        'Sales reporting — weekly, monthly, annual',
        'Order-to-delivery coordination',
      ],
    },
    business: {
      group: 'Business Foundations',
      blurb: 'What the numbers behind a deal mean.',
      items: [
        'Margin & pricing',
        'Budgeting & sales planning',
        'Market & competitor analysis',
        'Customer service',
        'Communication & presentation',
      ],
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
      school: 'Academy of Economic Studies, Bucharest',
      degree: 'Marketing',
    },
  },

  achievements: {
    portfolio: {
      title: 'Growing the B2B Client Portfolio',
      role: 'Sales Manager · Tipografia Everest',
      description:
        'Built and grew a portfolio of business clients through consistent prospecting, careful account management and a focus on keeping the clients we already had. The measure was not the size of the list but how many of those clients were still with us years later.',
    },
    team: {
      title: 'Building a Sales Team',
      role: 'Sales Manager · Tipografia Everest',
      description:
        'Hired, onboarded and coached a sales team, and put in place the routines — targets, weekly reviews, a shared pipeline — that let it perform as a unit rather than as a set of individuals.',
    },
    'accounts-system': {
      title: 'A Key-Account Management System',
      role: 'Sales Manager · Tipografia Everest',
      description:
        'Introduced a structured way of managing the largest accounts: an owner for each, a plan per account, and a forecast the whole team could rely on.',
    },
  },
};
