import type { Dictionary } from './types';

// Textos extraídos tal cual del objeto T/D (es) de mockup.html. No modificar.
const es: Dictionary = {
  t: {
    navAria: 'Principal',
    navAbout: 'Sobre mí', navExp: 'Experiencia', navProj: 'Proyectos', navContact: 'Contacto',
    langLabel: 'EN', langAria: 'Switch to English',
    themeAriaDark: 'Cambiar a modo claro', themeAriaLight: 'Cambiar a modo oscuro',
    eyebrow: 'Ingeniería en Sistemas · UTN · Buenos Aires',
    h1a: 'Diseño y construyo sistemas que', h1b: 'escalan.',
    intro: 'Desarrollador backend en Zentor, donde diseñé la arquitectura desde cero. Me interesa la tecnología y el negocio como un solo conjunto: entender el problema, diseñar la solución y saber contarla.',
    ctaCv: 'Descargar CV',
    aboutTitle: 'Sobre mí',
    aboutLead: 'Ingeniería de punta a punta: entender el problema, diseñar la solución y quedarme hasta que funciona en producción.',
    aboutBody: 'Autodidacta por naturaleza: me meto en lo que no entiendo hasta poder explicarlo. Me adapto rápido: pasé de consultoría de datos a diseñar el backend de un producto desde cero, y hace poco descubrí que contarle ese producto a un cliente también se me da bien. Trabajo mejor en equipo que solo, prefiero preguntar antes que suponer, y cuando algo se rompe no lo suelto hasta entender por qué.',
    offTitle: 'Fuera del código',
    povTitle: 'Cómo pienso el rol',
    povLead: 'Saber programar ya no alcanza. El valor está en entender el problema, el negocio y a la persona del otro lado.',
    povNote: 'Mercado Libre Experience Argentina 2026 · representando a Zentor del lado comercial, no solo del técnico.',
    expTitle: 'Experiencia', eduTitle: 'Formación', skillsTitle: 'Habilidades',
    navArch: 'Arquitecturas', archTitle: 'Arquitecturas desde cero',
    archLead: 'El mejor resultado de una arquitectura escalable suele aparecer cuando surge una necesidad que nunca habías previsto. Sistemas que diseñé desde la primera línea: el problema, cómo lo estructuré y las decisiones que lo sostienen.',
    colProblem: 'Problema', colDesign: 'Diseño', colDecisions: 'Decisiones',
    contactTitle: '¿Hablamos?', contactBody: 'Abierto a conversar sobre oportunidades, colaboraciones o simplemente intercambiar ideas sobre sistemas.',
    footer: 'sanchopodesta.ar · ES / EN',
  },
  d: {
    facts: [
      { k: 'Ubicación', v: 'Buenos Aires, AR' },
      { k: 'Formación', v: 'UTN · Ing. en Sistemas · 4.º año' },
      { k: 'Inglés', v: 'C1 · First Certificate' },
      { k: 'Web', v: 'sanchopodesta.ar' },
    ],
    pov: [
      { n: '01', title: 'Entender antes de construir', body: 'Los mejores sistemas salen de hablar con quien tiene el problema, no de un ticket. Definir el requerimiento ya es trabajo de ingeniería.' },
      { n: '02', title: 'Comunicar es parte del stack', body: 'Explicar una arquitectura, una decisión o un producto con claridad vale tanto como implementarlo bien. Con la IA, más todavía.' },
      { n: '03', title: 'Conocer el producto de verdad', body: 'Cuando resuelve un problema real y lo conocés a fondo, mostrarlo se vuelve natural. La conversación sale sola.' },
    ],
    experience: [
      { when: 'Feb 2026 — Hoy', role: 'Desarrollador Backend', org: 'Zentor', bullets: ['Diseño y evolución de servicios en NestJS con inyección de dependencias y arquitectura modular', 'Persistencia con Prisma ORM: diseño y ejecución de migraciones críticas en entornos de alta demanda', 'API pública y MCP oficial de Zentor, publicado en el directorio de Claude', 'Representé a Zentor junto al equipo en Mercado Libre Experience 2026, del lado comercial'] },
      { when: 'Jul 2024 — Ene 2026', role: 'Software Engineering Consultant', org: 'Winclap · Consultancy & Engineering Services', bullets: ['Relevamiento de requerimientos con usuarios finales y diseño de las soluciones', 'Automatización y análisis de datos con BigQuery, Cloud Run, Python y Apps Script', 'Trabajo en Scrum, iterando hasta la solución más eficiente'] },
    ],
    education: [
      { when: '2022 — Hoy', title: 'Ingeniería en Sistemas', org: 'UTN · promedio 8.5' },
      { when: '2017 — 2021', title: 'Bachiller en TIC', org: 'ORT Belgrano · graduado con honores' },
      { when: 'Certificación', title: 'Full Stack Developer (avanzado)', org: 'ITBA' },
      { when: 'Programa', title: 'Oxford International Junior Programs', org: 'Goldsmiths, University of London' },
      { when: 'Curso', title: 'Emprendimiento e innovación', org: 'ORT Launchpad · Mateo Salvatto y Lucía Parrondo' },
    ],
    cases: [
      { n: '01', tag: 'ZENTOR', title: 'Backend de Zentor: gateway y sistema de producto', stack: ['NestJS', 'Prisma', 'PostgreSQL', 'Docker'], diagram: true,
        diagramAria: 'Clientes y marketplaces entran por el gateway api-zentor, que delega el procesamiento en los workers de product-system',
        nodes: [
          { name: 'Clientes · Marketplaces', desc: 'Apps, integraciones y MARKETPLACES', arrow: true },
          { name: 'api-zentor · Gateway', desc: 'Autenticación, empresas y pagos, con su propia base', arrow: true },
          { name: 'product-system · Workers', desc: 'Servicios de producto, escalables de forma independiente', arrow: false },
        ],
        problem: 'Un producto nuevo que tenía que salir rápido y, al mismo tiempo, soportar más integraciones y más carga sin reescribirse.',
        design: 'Servicios NestJS modulares con inyección de dependencias. Un gateway liviano que concentra auth, empresas y pagos, y un sistema de producto compuesto por workers que crecen por separado.',
        decisions: ['Separar la base del gateway de la de producto para desacoplar los ritmos de cambio', 'Credenciales de marketplaces en el gateway, solo en cache del lado de producto', 'Migraciones versionadas con Prisma, diseñadas para no cortar servicio'] },
      { n: '02', tag: 'ZENTOR', title: 'API pública y MCP oficial', stack: ['OpenAPI', 'MCP', 'docs.zentor.io'], diagram: true,
        diagramAria: 'La app de Zentor, las integraciones de terceros y los agentes de IA vía MCP consumen la misma API pública, que se apoya en el gateway y el sistema de producto',
        nodes: [
          { name: 'Consumidores', desc: 'App de Zentor, integraciones de terceros y agentes de IA vía MCP (Claude, ChatGPT)', arrow: true },
          { name: 'API pública', desc: 'Un solo contrato OpenAPI, autenticación por cliente, responsabilidades separadas', arrow: true },
          { name: 'Zentor', desc: 'Gateway y sistema de producto (caso 01)', arrow: false },
        ],
        problem: 'La arquitectura estaba pensada para nuestras propias apps. Abrir la API a terceros exigía repensar cómo se autentica cada cliente y cómo se separan responsabilidades, sin un beneficio visible de inmediato.',
        design: 'Rework de autenticación y responsabilidades para que cualquier consumidor sea un cliente más de la misma API, con un contrato OpenAPI como única fuente de verdad para docs, validación y clientes.',
        decisions: ['Pagar el costo de la API pública antes de necesitarla: cuando apareció el MCP, el problema ya estaba resuelto', 'El MCP oficial es simplemente otro cliente de la API; nada especial para la IA', 'Publicarlo en el directorio oficial de Claude: la revisión obligó a documentar cada flujo y destapó errores que valía la pena corregir', 'Docs en subdominio propio, tooling elegido entre FumaDocs, Scalar y Mintlify'] },
      { n: '03', tag: 'WINCLAP', title: 'Automatización de datos para marketing', stack: ['Python', 'BigQuery', 'Cloud Run', 'Apps Script'], diagram: false, nodes: [],
        problem: 'Procesos manuales sobre datos dispersos que consumían horas del equipo y se rompían con cada cambio de formato.',
        design: 'Pipelines en Cloud Run que consolidan fuentes en BigQuery, con Apps Script como capa de entrada para los usuarios finales.',
        decisions: ['Relevar el requerimiento con quien lo usa antes de escribir código', 'Serverless para pagar solo por ejecución', 'Iterar en Scrum hasta la versión más simple que resolviera el problema'] },
    ],
    skills: [
      { name: 'Backend', items: ['NestJS', 'TypeScript', 'Node.js', 'Prisma', 'PostgreSQL / MySQL', 'Docker', 'Render'] },
      { name: 'Datos y automatización', items: ['Python', 'BigQuery', 'Cloud Run', 'Google Apps Script', 'Sheets / Excel'] },
      { name: 'También', items: ['JavaScript', 'PHP', 'Java', 'C++ / C#', 'HTML / CSS', 'Scrum'] },
    ],
    off: [
      { name: 'Fútbol', body: 'Entreno toda la semana. La constancia y el juego en equipo que se aprenden en la cancha son los mismos que después aparecen en el trabajo.' },
      { name: 'Videojuegos', body: 'Jugar, y a veces quedarme pensando cómo lo habrán hecho por dentro.' },
      { name: 'Lectura', body: 'Fantasía, sobre todo. Brandon Sanderson tiene un lugar aparte en la biblioteca.' },
    ],
  },
  seo: {
    title: 'Santiago Podesta — Ingeniería en Sistemas · Sancho',
    ogLocale: 'es_AR',
    ogImageAlt: 'Sancho. Diseño y construyo sistemas que escalan.',
  },
};

export default es;
