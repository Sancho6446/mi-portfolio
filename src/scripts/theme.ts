// Toggle de tema. El valor inicial lo aplica el script inline del <head> (sin flash).
type Theme = 'light' | 'dark';

const root = document.documentElement;
const button = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');

function current(): Theme {
  return root.dataset.theme === 'dark' ? 'dark' : 'light';
}

function apply(theme: Theme): void {
  root.dataset.theme = theme;
  if (!button) return;
  const label = theme === 'dark' ? button.dataset.labelDark : button.dataset.labelLight;
  if (label) button.setAttribute('aria-label', label);
}

apply(current());

button?.addEventListener('click', () => {
  const next: Theme = current() === 'dark' ? 'light' : 'dark';
  try {
    localStorage.setItem('theme', next);
  } catch {
    /* almacenamiento no disponible */
  }
  apply(next);
});
