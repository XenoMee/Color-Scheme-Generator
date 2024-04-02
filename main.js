import { getColorScheme, colorSchemeContainer } from './getColorScheme.js';
import copyToClipboard from './copyToClipboard.js';
const formEl = document.querySelector('.color-header');

colorSchemeContainer.addEventListener('click', (e) => {
  if (!e.target.classList.contains('generated-code')) return;
  copyToClipboard(e.target.textContent);
});

formEl.addEventListener('submit', (e) => {
  const seedColor = document.querySelector('.color-input').value.slice(1);
  const colorSchemeMode = document.querySelector('#mode').value.toLowerCase();

  e.preventDefault();
  getColorScheme(seedColor, colorSchemeMode);
});
