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

/** Marquee de stack: lista base duplicada, con el separador tal cual lo arma el mockup. */
export const STACK_BASE = ['NestJS', 'TypeScript', 'Prisma', 'PostgreSQL', 'OpenAPI', 'MCP', 'Docker', 'Python', 'BigQuery', 'Cloud Run', 'Scrum', 'UTN'];
export const STACK: string[] = STACK_BASE.concat(STACK_BASE).map((s) => `${s}  ·`);
