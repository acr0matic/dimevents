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
