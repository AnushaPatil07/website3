// Mobile toggle
const toggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('.nav-list');

if (toggle) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}
