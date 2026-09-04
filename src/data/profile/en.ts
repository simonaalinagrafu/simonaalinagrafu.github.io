import type { ProfileText } from './shape';

// English profile text.
//
// WHAT IS INVENTED. Only the Tipografia Everest role is real, and even its
// dates are a guess. The three earlier roles, the education entry and all
// three achievements are imagined stand-ins for a plausible 20-year B2B sales
// career — see `placeholder: true` in shape.ts. No figures are invented
// anywhere: the only number on the site is "20+ years".

export const en: ProfileText = {
  site: {
    title: 'Sales Manager | B2B Sales | Team Leadership',
    tagline:
      'Sales manager with 20+ years in B2B — from field sales to key accounts to leading a sales team that delivers, year after year.',
    intro:
      '20+ years in B2B sales, and every stage of it: finding the client, understanding the business, negotiating the agreement, delivering on it, and keeping the relationship for the long term. Today I lead the sales team at Tipografia Everest.',
    location: 'Bucharest, Romania',
  },

  roles: {
    everest: {
      position: 'Sales Manager',
      period: '2013 – Present',
      location: 'Bucharest, Romania',
      aboutShort: 'Printing house serving business clients.',
      summary:
        'I lead the sales team — hiring, setting targets, and coaching — while keeping my own hand on the largest accounts. My job is to turn a pipeline into predictable revenue and to make sure the clients who trust us stay with us year after year.',
      bullets: [
        'Lead the sales team: setting clear targets, giving direction, and keeping every member motivated and accountable.',
        'Own the key accounts: managing the relationships that carry the most revenue, from first contact to renewal.',
        'Build the pipeline: forecasting, prioritising opportunities, and keeping the numbers honest.',
        'Negotiate and close: pricing, contracts and terms with business clients of every size.',
        'Recruit and develop salespeople: hiring, onboarding and coaching a team that performs as a unit.',
        'Establish the sales process: consistent practices from lead to delivery, so results do not depend on heroics.',
        'Work alongside production: aligning what is sold with what can be delivered, on time and to specification.',
      ],
    },

    'team-lead': {
      position: 'Sales Team Lead',
      period: '2009 – 2013',
      location: 'Bucharest, Romania',
      aboutShort: 'B2B distributor — placeholder until the real employer is confirmed.',
      summary:
        'My first leadership role: coordinating a team of sales representatives while still carrying a portfolio of my own. I learned that a team hits its targets when each person knows exactly what is expected and gets help before they ask for it.',
      bullets: [
        'Coordinate the sales team: daily direction, weekly reviews, and shared targets everyone could see.',
        'Coach representatives: joining client meetings, reviewing offers, and building each person’s confidence to close.',
        'Manage the team pipeline: keeping opportunities moving and forecasts realistic.',
        'Keep a personal portfolio: the accounts I brought in stayed with me while I led the team.',
      ],
    },

    'key-account': {
      position: 'Key Account Manager',
      period: '2006 – 2009',
      location: 'Bucharest, Romania',
      aboutShort: 'B2B services provider — placeholder until the real employer is confirmed.',
      summary:
        'Responsible for the accounts that mattered most: understanding each client’s business well enough to anticipate what they would need next, and negotiating agreements both sides could live with for years.',
      bullets: [
        'Manage key accounts: single point of contact for the largest business clients.',
        'Negotiate contracts: pricing, terms and renewals, with retention as the measure of success.',
        'Grow existing accounts: finding the next need before the client went looking elsewhere.',
        'Coordinate delivery: making sure what was promised was what arrived.',
      ],
    },

    'sales-rep': {
      position: 'B2B Sales Representative',
      period: '2004 – 2006',
      location: 'Bucharest, Romania',
      aboutShort: 'Distribution company — placeholder until the real employer is confirmed.',
      bullets: [
        'Prospect new business clients: cold outreach, first meetings, and a growing list of companies that said yes.',
        'Present and quote: matching the offer to what the client actually needed.',
        'Build the habits: a full pipeline, a clean CRM, and follow-ups that never slipped.',
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
        'CRM systems',
        'Microsoft Office / Excel',
        'Offer & quotation tools',
        'Sales meeting cadence',
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
  },

  education: {
    degree: {
      school: '[University]',
      degree: 'Bachelor’s degree in Marketing / Economics',
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
