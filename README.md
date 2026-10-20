# sanchopodesta.ar

Sitio personal de Santiago "Sancho" Podesta Carlevaris: portfolio y CV, en español e inglés.

**En vivo:** https://sanchopodesta.ar · EN: https://sanchopodesta.ar/en/

## Stack

- [Astro](https://astro.build) 7, salida estática, sin frameworks de UI.
- CSS propio con variables de tema (claro/oscuro), tipografía Inter.
- Deploy en Vercel, con deploy automático en cada push a `main`.

## Qué tiene

- **Dos idiomas en rutas separadas**: `/` (ES) y `/en/` (EN), con `hreflang` cruzado y `x-default`. En la home ES, un script inline redirige a `/en/` según el idioma del navegador, salvo preferencia guardada.
- **Tema claro/oscuro**: valor inicial según `prefers-color-scheme`, persistido en `localStorage`, aplicado antes del primer paint para evitar flash.
- **Animaciones**: entrada del hero, subrayado dibujado en el H1 y marquee de stack. Todas se desactivan con `prefers-reduced-motion`.
- **SEO**: title y description por idioma, canonical, Open Graph y Twitter con imagen 1200×630, JSON-LD `Person`, sitemap y robots.
- **404 propia**, bilingüe, con `noindex`.

## Estructura

```
src/
  components/   Secciones de la página, sin lógica: reciben props y renderizan
  i18n/         Textos ES/EN (es.ts, en.ts) y tipos
  layouts/      Layout con <head>, SEO y scripts de tema e idioma
  pages/        index.astro (ES), en/index.astro (EN), 404.astro
  scripts/      Toggle de tema y persistencia de idioma
  styles/       Un archivo CSS por sección, más tokens, base y animaciones
  config/       URL, redes y datos del sitio
public/         CV en PDF, imágenes OG, favicon, robots.txt
```

Para cambiar un texto, editar `src/i18n/es.ts` y `src/i18n/en.ts`. Para cambiar links o email, `src/config/site.ts`.

## Desarrollo

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/
npm run preview   # sirve dist/
npm run check     # chequeo de tipos
```
