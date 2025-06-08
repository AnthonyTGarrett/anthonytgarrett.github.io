'use strict';

document.addEventListener('DOMContentLoaded', event => {
  const menu = document.querySelector('.menu');
  const mainNav = document.querySelector('.main-nav');
  const navContain = document.querySelector('.nav-container');
  const mobileNav = document.querySelector('.mobile-nav');

  const mobileLinks = document.querySelector('.mobile-links');

  menu.addEventListener('click', e => {
    mainNav.classList.toggle('extend');
    navContain.classList.toggle('go-top');
    mobileNav.classList.toggle('open');
  });

  mobileLinks.addEventListener('click', event => {
    mainNav.classList.toggle('extend');
    mobileNav.classList.toggle('open');

    window.Location.href = event.target.href;
  });
});

// function changeCss() {
//   let headerElement = document.querySelector('.main-nav');
//   const headerLinks = document.querySelectorAll('.link');

//   if (this.scrollY > 80 && window.innerWidth > 768) {
//     headerElement.style.position = 'Fixed';
//     headerElement.style.backgroundColor = 'rgba(255,255,255,0.9)';
//     headerElement.style.paddingTop = '1rem';
//     headerElement.style.height = '50px';
//   } else if (this.scrollY < 80 && window.innerWidth > 768) {
//     headerElement.style.backgroundColor = 'transparent';
//     headerElement.style.paddingTop = '3rem';
//     headerElement.style.height = '55px';
//   }
// }

// window.addEventListener('scroll', changeCss, false);
