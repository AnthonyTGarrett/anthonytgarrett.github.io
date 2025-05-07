'use strict';

document.addEventListener('DOMContentLoaded', event => {
  const menu = document.querySelector('.menu');
  const mainNav = document.querySelector('.main-nav');
  const navContain = document.querySelector('.nav-container');
  const mobileNav = document.querySelector('.mobile-nav');

  const mobileLinks = document.querySelectorAll('.mobile-link');

  menu.addEventListener('click', e => {
    mainNav.classList.toggle('extend');
    navContain.classList.toggle('go-top');
    mobileNav.classList.toggle('hide');
  });
});
