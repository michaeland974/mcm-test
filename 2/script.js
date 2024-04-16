const button = document.querySelector('#menu-toggle');
const menu = document.querySelector('.menu');

button.addEventListener('click', () => {
  const condition = button.getAttribute('aria-expanded');
  const newAtt = (condition === 'false') ? 'true' : 'false';
  button.setAttribute('aria-expanded', newAtt);
  menu.setAttribute('aria-expanded', newAtt);
});