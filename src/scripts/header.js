const header = document.querySelector('#header');
const heroBlock = document.getElementById('hero');

const clonedHeader = header.cloneNode(true);
clonedHeader.classList.add('header-cloned');
document.body.insertBefore(clonedHeader, header.nextSibling);

let scrollPosition = window.pageYOffset;
window.addEventListener('scroll',
  () => {
    scrollPosition = window.pageYOffset;
    const heroHeight = heroBlock ? heroBlock.offsetHeight : null;

    if (window.scrollY >= heroHeight) clonedHeader.classList.add('header-visible');
    else clonedHeader.classList.remove('header-visible')
  });

/* Логика для мобильного меню */
const mobileMenuButton = document.querySelectorAll('.header__menu');
const mobileMenu = document.getElementById('mobile-menu');
const mobileOverlay = mobileMenu.querySelector('.mobile-menu__overlay');
const mobileLinks = mobileMenu.querySelectorAll('.nav__link');
const mobileClose = mobileMenu.querySelector('.mobile-menu__close');

const mobileClasses = {
  "open": "mobile-menu--open",
}

_.forEach(mobileMenuButton, (button) => {
  button.addEventListener('click', () => {
    mobileMenu.classList.add(mobileClasses.open);
  });
})

_.forEach(mobileLinks, (link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove(mobileClasses.open);
  });
})

mobileOverlay.addEventListener('click', () => {
  mobileMenu.classList.remove(mobileClasses.open);
});

mobileClose.addEventListener('click', () => {
  mobileMenu.classList.remove(mobileClasses.open);
});

const mobileContactButton = mobileMenu.querySelector('.nav__link--contact');
const mobileContact = document.getElementById('mobile-contact');
const mobileContactBack = mobileContact.querySelector('.mobile-menu__back');
const mobileContactClose = mobileContact.querySelector('.mobile-menu__close');

mobileContactButton.addEventListener('click', () => {
  mobileMenu.classList.remove(mobileClasses.open);
  mobileContact.classList.add(mobileClasses.open);
});

mobileContactBack.addEventListener('click', () => {
  mobileContact.classList.remove(mobileClasses.open);
  mobileMenu.classList.add(mobileClasses.open);
});

mobileContactClose.addEventListener('click', () => {
  mobileContact.classList.remove(mobileClasses.open);
});