const button = document.querySelector('#menu-toggle');

button.addEventListener('click', () => {
  const condition = button.getAttribute('aria-expanded');
  const newAtt = condition === 'false' ? 'true' : 'false'
  button.setAttribute('aria-expanded', newAtt);
});