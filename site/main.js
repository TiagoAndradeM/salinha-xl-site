const root = document.documentElement;
const themePicker = document.querySelector('#themePicker');
const themeInputs = themePicker?.querySelectorAll('input[name="theme"]');
const themeMeta = document.querySelector('meta[name="theme-color"]');
const themeKey = 'salinha-xl-theme';

function applyTheme(theme) {
  const chosenTheme = theme === 'dark' ? 'dark' : 'light';
  root.dataset.theme = chosenTheme;
  themeInputs?.forEach(input => { input.checked = input.value === chosenTheme; });
  themeMeta?.setAttribute('content', chosenTheme === 'dark' ? '#20151D' : '#FFF9FC');
}

// A preferência é só visual e fica nesta sessão; privacidade do navegador pode impedir o armazenamento.
try { applyTheme(sessionStorage.getItem(themeKey)); } catch { applyTheme('light'); }
if (themePicker) themePicker.disabled = false;
themeInputs?.forEach(input => input.addEventListener('change', () => {
  if (!input.checked) return;
  applyTheme(input.value);
  try { sessionStorage.setItem(themeKey, input.value); } catch { /* A troca continua funcionando sem armazenamento. */ }
}));

const button = document.querySelector('#menuToggle');
const nav = document.querySelector('#mainNav');
const mobileLayout = window.matchMedia('(max-width: 800px)');

function setMenu(open, returnFocus = false) {
  if (!button || !nav) return;
  nav.classList.toggle('open', open);
  button.setAttribute('aria-expanded', String(open));
  button.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  if (returnFocus) button.focus();
}

if (button && nav) {
  button.hidden = false;
  root.classList.add('js');
  button.addEventListener('click', () => setMenu(button.getAttribute('aria-expanded') !== 'true'));
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && mobileLayout.matches && button.getAttribute('aria-expanded') === 'true') {
      setMenu(false, true);
    }
  });
  mobileLayout.addEventListener('change', () => setMenu(false));
}

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());
