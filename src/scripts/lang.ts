// Persiste el idioma elegido para que la detección automática de "/" no lo pise.
const link = document.querySelector<HTMLAnchorElement>('[data-lang-switch]');

link?.addEventListener('click', () => {
  const locale = link.dataset.langSwitch;
  if (!locale) return;
  try {
    localStorage.setItem('lang', locale);
  } catch {
    /* almacenamiento no disponible */
  }
});
