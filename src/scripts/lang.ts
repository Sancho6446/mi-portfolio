// Persiste el idioma elegido para que la detección automática de "/" no lo pise.
document.querySelectorAll<HTMLAnchorElement>('[data-lang-switch]').forEach((link) => {
  link.addEventListener('click', () => {
    const locale = link.dataset.langSwitch;
    if (!locale) return;
    try {
      localStorage.setItem('lang', locale);
    } catch {
      /* almacenamiento no disponible */
    }
  });
});
