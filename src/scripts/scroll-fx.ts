// Animaciones ligadas al scroll. Los estados iniciales (oculto, atenuado) viven en
// animations.css bajo .js y prefers-reduced-motion: no-preference; acá solo se ponen clases.

// Secciones: aparecen una vez al entrar en pantalla.
const sections = document.querySelectorAll<HTMLElement>('main > .sec');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -12% 0px' },
  );
  sections.forEach((section) => io.observe(section));
} else {
  sections.forEach((section) => section.classList.add('is-in'));
}

const texts = [...document.querySelectorAll<HTMLElement>('[data-hl]')].map((el) => ({
  el,
  words: [...el.querySelectorAll<HTMLElement>('.hl-w')],
}));
const steps = [...document.querySelectorAll<HTMLElement>('[data-steps]')].map((el) => ({
  el,
  items: [...el.children] as HTMLElement[],
}));
const focusLists = [...document.querySelectorAll<HTMLElement>('[data-focus]')].map((el) => ({
  el,
  items: [...el.children] as HTMLElement[],
}));

/** 0 cuando el borde superior de `rect` está en `from`·vh, 1 cuando el inferior llega a `to`·vh. */
function progress(rect: DOMRect, vh: number, from: number, to: number): number {
  const p = (from * vh - rect.top) / ((from - to) * vh + rect.height);
  return Math.min(1, Math.max(0, p));
}

function update(): void {
  const vh = window.innerHeight;

  // Leads: las palabras se encienden en orden de lectura.
  texts.forEach(({ el, words }) => {
    const lit = Math.round(progress(el.getBoundingClientRect(), vh, 0.9, 0.55) * words.length);
    words.forEach((w, i) => w.classList.toggle('is-on', i < lit));
  });

  // Principios: se iluminan de a uno.
  steps.forEach(({ el, items }) => {
    const p = progress(el.getBoundingClientRect(), vh, 0.95, 0.8);
    const lit = p <= 0 ? 0 : Math.min(items.length, Math.floor(p * items.length) + 1);
    items.forEach((item, i) => item.classList.toggle('is-lit', i < lit));
  });

  // Casos: foco en el que está más cerca del centro de la pantalla.
  focusLists.forEach(({ el, items }) => {
    const center = vh / 2;
    let best: HTMLElement | null = null;
    let bestDist = vh * 0.35;
    for (const item of items) {
      const r = item.getBoundingClientRect();
      const dist = r.top > center ? r.top - center : r.bottom < center ? center - r.bottom : 0;
      if (dist < bestDist) {
        best = item;
        bestDist = dist;
      }
    }
    items.forEach((item) => item.classList.toggle('is-active', item === best));
    el.classList.toggle('has-active', best !== null);
  });
}

let queued = false;
function schedule(): void {
  if (queued) return;
  queued = true;
  requestAnimationFrame(() => {
    queued = false;
    update();
  });
}

if (texts.length || steps.length || focusLists.length) {
  update();
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
}
