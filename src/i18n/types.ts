export type Locale = 'es' | 'en';

export interface Texts {
  navAria: string;
  navAbout: string;
  navExp: string;
  navProj: string;
  navContact: string;
  langLabel: string;
  langAria: string;
  themeAriaDark: string;
  themeAriaLight: string;
  eyebrow: string;
  h1a: string;
  h1b: string;
  intro: string;
  ctaCv: string;
  aboutTitle: string;
  aboutLead: string;
  aboutBody: string;
  povTitle: string;
  povLead: string;
  povNote: string;
  expTitle: string;
  eduTitle: string;
  skillsTitle: string;
  navArch: string;
  archTitle: string;
  archLead: string;
  colProblem: string;
  colDesign: string;
  colDecisions: string;
  contactTitle: string;
  contactBody: string;
  footer: string;
  notFoundTitle: string;
  notFoundCta: string;
}

export interface Fact { k: string; v: string }
export interface Principle { n: string; title: string; body: string }
export interface Experience { when: string; role: string; org: string; bullets: string[] }
export interface Education { when: string; title: string; org: string }
export interface DiagramNode { name: string; desc: string; arrow: boolean }
export interface Case {
  n: string;
  tag: string;
  title: string;
  stack: string[];
  diagram: boolean;
  diagramAria?: string;
  nodes: DiagramNode[];
  problem: string;
  design: string;
  decisions: string[];
}
export interface SkillGroup { name: string; items: string[] }

export interface Data {
  facts: Fact[];
  pov: Principle[];
  experience: Experience[];
  education: Education[];
  cases: Case[];
  skills: SkillGroup[];
}

export interface Seo {
  title: string;
  ogLocale: string;
  ogImageAlt: string;
}

export interface Dictionary {
  t: Texts;
  d: Data;
  seo: Seo;
}
