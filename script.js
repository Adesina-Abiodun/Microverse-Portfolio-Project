const hamburger = document.querySelector('.menu-btn');
const menuClose = document.querySelector('.close-btn');
const menuLinks = document.querySelectorAll('.menu-links');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  document.body.style.overflow = 'hidden';
  mobileMenu.classList.add('openMenu');
});

menuClose.addEventListener('click', () => {
  mobileMenu.classList.remove('openMenu');
  document.body.style.overflow = 'scroll';
});

for (let i = 0; i < menuLinks.length; i += 1) {
  menuLinks[i].addEventListener('click', () => {
    mobileMenu.classList.remove('openMenu');
    document.body.style.overflow = 'scroll';
  });
}