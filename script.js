const hamburger = document.querySelector('.menu-btn');
const menuClose = document.querySelector('.close-btn');
const menuLinks = document.querySelectorAll('.menu-links');
const mobileMenu = document.querySelector('.mobile-menu');

//event to show mobile menu links when user clicks on the humberger icon
hamburger.addEventListener('click', () => {
  document.body.style.overflow = 'hidden';
  mobileMenu.classList.add('openMenu');
});

//event to close mobile menu links when user clicks on the close button
menuClose.addEventListener('click', () => {
  mobileMenu.classList.remove('openMenu');
  document.body.style.overflow = 'scroll';
});

//event to close mobile menu links when user clicks on any of the menu links
for (let i = 0; i < menuLinks.length; i += 1) {
  menuLinks[i].addEventListener('click', () => {
    mobileMenu.classList.remove('openMenu');
    document.body.style.overflow = 'scroll';
  });
}
