'use strict';

const hamburgerMenu = document.getElementById('nav-icon3');

hamburgerMenu.addEventListener('click', e => {
  e.target.classList.toggle('open');
});
