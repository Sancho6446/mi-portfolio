import type { Dictionary } from './types';

// Texts extracted verbatim from the T/D (en) objects in mockup.html. Do not edit.
const en: Dictionary = {
  t: {
    navAria: 'Main',
    navAbout: 'About', navExp: 'Experience', navProj: 'Projects', navContact: 'Contact',
    langLabel: 'ES', langAria: 'Cambiar a español',
    themeAriaDark: 'Switch to light mode', themeAriaLight: 'Switch to dark mode',
    eyebrow: 'Systems Engineering · UTN · Buenos Aires',
    h1a: 'I design and build systems that', h1b: 'scale.',
    intro: 'Backend developer at Zentor, where I designed the architecture from scratch. I see technology and business as one thing: understand the problem, design the solution, and know how to tell it.',
    ctaCv: 'Download CV',
    aboutTitle: 'About',
    aboutLead: 'End-to-end engineering: understand the problem, design the solution, and stay until it works in production.',
    aboutBody: 'Self-taught by nature: I dig into what I don’t understand until I can explain it. I adapt fast: I went from data consulting to designing a product’s backend from scratch, and recently found out I’m good at pitching that product to a customer too. I work better with a team than alone, I’d rather ask than assume, and when something breaks I don’t let go until I understand why.',
    offTitle: 'Off the keyboard',
    povTitle: 'How I think about the role',
    povLead: 'Knowing how to code is no longer enough. The value is in understanding the problem, the business, and the person on the other side.',
    povNote: 'Mercado Libre Experience Argentina 2026 · representing Zentor on the commercial side, not just the technical one.',
    expTitle: 'Experience', eduTitle: 'Education', skillsTitle: 'Skills',
    navArch: 'Architectures', archTitle: 'Architectures from scratch',
    archLead: 'The best result of a scalable architecture often shows up when a need you never anticipated appears. Systems I designed from the first line: the problem, how I structured it, and the decisions that hold it up.',
    colProblem: 'Problem', colDesign: 'Design', colDecisions: 'Decisions',
    contactTitle: 'Let’s talk', contactBody: 'Open to conversations about opportunities, collaborations, or just trading ideas about systems.',
    footer: 'sanchopodesta.ar · ES / EN',
    notFoundTitle: 'This page doesn’t exist.',
    notFoundCta: 'Back to home',
  },
  d: {
    facts: [
      { k: 'Location', v: 'Buenos Aires, AR' },
      { k: 'Education', v: 'UTN · Systems Eng. · 4th year' },
      { k: 'English', v: 'C1 · First Certificate' },
      { k: 'Web', v: 'sanchopodesta.ar' },
    ],
    pov: [
      { n: '01', title: 'Understand before you build', body: 'The best systems come from talking to the person with the problem, not from a ticket. Defining the requirement is already engineering work.' },
      { n: '02', title: 'Communication is part of the stack', body: 'Explaining an architecture, a decision or a product clearly is worth as much as implementing it well. Even more so with AI.' },
      { n: '03', title: 'Really know the product', body: 'When it solves a real problem and you know it inside out, showing it becomes natural. The conversation flows on its own.' },
    ],
    experience: [
      { when: 'Feb 2026 — Now', role: 'Backend Developer', org: 'Zentor', bullets: ['Design and evolution of NestJS services with dependency injection and a modular architecture', 'Persistence with Prisma ORM: designed and ran critical database migrations under high demand', 'Zentor’s public API and official MCP, listed in the Claude directory', 'Represented Zentor with the team at Mercado Libre Experience 2026, on the commercial side'] },
      { when: 'Jul 2024 — Jan 2026', role: 'Software Engineering Consultant', org: 'Winclap · Consultancy & Engineering Services', bullets: ['Requirements gathering with end users and solution design', 'Data automation and analysis with BigQuery, Cloud Run, Python and Apps Script', 'Scrum, iterating to the most efficient solution'] },
    ],
    education: [
      { when: '2022 — Now', title: 'Systems Engineering', org: 'UTN · GPA 8.5/10' },
      { when: '2017 — 2021', title: 'ICT Baccalaureate', org: 'ORT Belgrano · graduated with honors' },
      { when: 'Certification', title: 'Advanced Full Stack Developer', org: 'ITBA' },
      { when: 'Program', title: 'Oxford International Junior Programs', org: 'Goldsmiths, University of London' },
      { when: 'Course', title: 'Entrepreneurship and Innovation', org: 'ORT Launchpad · Mateo Salvatto and Lucía Parrondo' },
    ],
    cases: [
      { n: '01', tag: 'ZENTOR', title: 'Zentor backend: gateway and product system', stack: ['NestJS', 'Prisma', 'PostgreSQL', 'Docker'], diagram: true,
        diagramAria: 'Clients and marketplaces enter through the api-zentor gateway, which delegates processing to the product-system workers',
        nodes: [
          { name: 'Clients · Marketplaces', desc: 'Apps, integrations and MARKETPLACES', arrow: true },
          { name: 'api-zentor · Gateway', desc: 'Auth, companies and payments, with its own database', arrow: true },
          { name: 'product-system · Workers', desc: 'Product services that scale independently', arrow: false },
        ],
        problem: 'A new product that had to ship fast and, at the same time, take on more integrations and more load without a rewrite.',
        design: 'Modular NestJS services with dependency injection. A lightweight gateway that owns auth, companies and payments, and a product system made of workers that grow separately.',
        decisions: ['Separate the gateway database from the product one to decouple their pace of change', 'Marketplace credentials live in the gateway, cached only on the product side', 'Versioned Prisma migrations designed for zero downtime'] },
      { n: '02', tag: 'ZENTOR', title: 'Public API and official MCP', stack: ['OpenAPI', 'MCP', 'docs.zentor.io'], diagram: true,
        diagramAria: 'The Zentor app, third-party integrations and AI agents via MCP consume the same public API, backed by the gateway and the product system',
        nodes: [
          { name: 'Consumers', desc: 'Zentor app, third-party integrations and AI agents via MCP (Claude, ChatGPT)', arrow: true },
          { name: 'Public API', desc: 'One OpenAPI contract, per-client authentication, separated responsibilities', arrow: true },
          { name: 'Zentor', desc: 'Gateway and product system (case 01)', arrow: false },
        ],
        problem: 'The architecture was built around our own apps. Opening the API to third parties meant rethinking how each client authenticates and how responsibilities are split, with no immediate visible payoff.',
        design: 'Reworked authentication and responsibilities so any consumer is just another client of the same API, with an OpenAPI contract as the single source of truth for docs, validation and clients.',
        decisions: ['Pay the cost of a public API before needing it: when the MCP came up, the problem was already solved', 'The official MCP is simply another API client; nothing special for AI', 'Listing it in the official Claude directory: the review forced us to document every flow and surfaced bugs worth fixing', 'Docs on their own subdomain, tooling chosen among FumaDocs, Scalar and Mintlify'] },
      { n: '03', tag: 'WINCLAP', title: 'Data automation for marketing', stack: ['Python', 'BigQuery', 'Cloud Run', 'Apps Script'], diagram: false, nodes: [],
        problem: 'Manual processes over scattered data that ate hours of the team’s time and broke with every format change.',
        design: 'Cloud Run pipelines that consolidate sources into BigQuery, with Apps Script as the entry layer for end users.',
        decisions: ['Gather the requirement with the people who use it before writing code', 'Serverless, to pay only per execution', 'Iterate in Scrum down to the simplest version that solved the problem'] },
    ],
    skills: [
      { name: 'Backend', items: ['NestJS', 'TypeScript', 'Node.js', 'Prisma', 'PostgreSQL / MySQL', 'Docker', 'Render'] },
      { name: 'Data & automation', items: ['Python', 'BigQuery', 'Cloud Run', 'Google Apps Script', 'Sheets / Excel'] },
      { name: 'Also', items: ['JavaScript', 'PHP', 'Java', 'C++ / C#', 'HTML / CSS', 'Scrum'] },
    ],
    off: [
      { name: 'Football', body: 'I train all week. The consistency and teamwork learned on the pitch are the same ones that show up at work.' },
      { name: 'Video games', body: 'Playing, and sometimes wondering how they built it under the hood.' },
      { name: 'Reading', body: 'Fantasy, mostly. Brandon Sanderson has a shelf of his own. On the technical side, Designing Data-Intensive Applications, by Martin Kleppmann.' },
    ],
  },
  seo: {
    title: 'Sancho Podesta — Systems Engineering',
    ogLocale: 'en_US',
    ogImageAlt: 'Sancho. I design and build systems that scale.',
  },
};

export default en;
