const button = document.querySelector('#menuToggle');
const nav = document.querySelector('#mainNav');
button?.addEventListener('click', () => {
  const isOpen = nav?.classList.toggle('open') ?? false;
  button.setAttribute('aria-expanded', String(isOpen));
  button.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  button?.setAttribute('aria-expanded', 'false');
  button?.setAttribute('aria-label', 'Abrir menu');
}));
const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());
