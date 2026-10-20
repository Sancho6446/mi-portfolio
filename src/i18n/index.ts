import type { Dictionary, Locale } from './types';
import es from './es';
import en from './en';

export type { Dictionary, Locale } from './types';

export const LOCALES: readonly Locale[] = ['es', 'en'];
export const DEFAULT_LOCALE: Locale = 'es';

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'es' ? 'en' : 'es';
}

/**
 * Marquee de stack. El mockup repetía la lista base dos veces y animaba -50%,
 * pero en pantallas anchas la pista se quedaba corta y dejaba un hueco.
 * Ahora cada mitad lleva la lista dos veces, y la pista son dos mitades iguales.
 */
export const STACK_BASE = [
  'NestJS', 'TypeScript', 'Node.js', 'Prisma', 'PostgreSQL', 'MySQL', 'OpenAPI', 'MCP', 'Docker', 'Render',
  'Python', 'BigQuery', 'Cloud Run', 'Google Apps Script', 'Sheets / Excel',
  'JavaScript', 'PHP', 'Java', 'C++ / C#', 'HTML / CSS', 'Scrum', 'UTN',
];
const half = STACK_BASE.concat(STACK_BASE).map((s) => `${s}  ·`);
export const STACK: string[] = half.concat(half);
