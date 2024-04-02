import getColorScheme from './getColorScheme.js';
const formEl = document.querySelector('.color-header');

formEl.addEventListener('submit', (e) => {
  const seedColor = document.querySelector('.color-input').value.slice(1);
  const colorSchemeMode = document.querySelector('#mode').value.toLowerCase();

  e.preventDefault();
  getColorScheme(seedColor, colorSchemeMode);
});
