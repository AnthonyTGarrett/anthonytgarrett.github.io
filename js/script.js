'use strict';

const repositories = [
  'BigBrewNation',
  'calculator',
  'EasyConsolidation',
  'Five-O-Clock-Somewhere',
  'todoList',
  'popular_streaming',
];

const mobileNav = document.querySelector('.mobile-nav');

window.addEventListener('scroll', changeCss, false);

document.addEventListener('DOMContentLoaded', event => {
  const menu = document.querySelector('.menu');
  const mainNav = document.querySelector('.main-nav');
  const navContain = document.querySelector('.nav-container');

  const mobileLinks = document.querySelector('.mobile-links');

  menu.addEventListener('click', e => {
    mainNav.classList.toggle('extend');
    navContain.classList.toggle('go-top');
    mobileNav.classList.toggle('open');
  });

  mobileLinks.addEventListener('click', event => {
    mainNav.classList.remove('extend');
    mobileNav.classList.remove('open');
    navContain.classList.remove('go-top');
    menu.checked = false;

    window.Location.href = event.target.href;
  });

  window.addEventListener('resize', function (event) {
    if (window.innerWidth > 768) {
      mobileNav.classList.remove('open');
      mainNav.classList.remove('extend');
      menu.checked = false;
    }
  });

  const repos = getUserRepos('AnthonyTGarrett');
  addInformation(repos);
});

function changeCss() {
  let headerElement = document.querySelector('.main-nav');
  const headerLinks = document.querySelectorAll('.link');

  if (this.scrollY > 80 && window.innerWidth > 768) {
    headerElement.style.backgroundColor = 'rgba(255,255,255,0.9)';
    headerElement.style.paddingTop = '1rem';
    headerElement.style.height = '50px';
    for (let i = 0; i < headerLinks.length; i++) {
      headerLinks[i].style.color = '#41413f';
    }
  } else if (this.scrollY < 80 && window.innerWidth > 768) {
    headerElement.style.backgroundColor = 'transparent';
    headerElement.style.paddingTop = '3rem';
    headerElement.style.height = '55px';
    mobileNav.classList.remove('open');
    for (let i = 0; i < headerLinks.length; i++) {
      headerLinks[i].style.color = '#d3d3d3';
    }
  }
}

async function getUserRepos(ghUserName) {
  try {
    const res = await fetch(`https://api.github.com/users/${ghUserName}/repos`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

function addInformation(repos) {
  repos
    .then(data => {
      const usefulInfo = data.filter(obj => {
        return repositories.includes(obj.name);
      });
      const siteList = [
        'githubBrew',
        'githubCalculator',
        'githubInventory',
        'githubClock',
        'githubStreaming',
        'githubTodo',
      ];

      for (let i = 0; i < siteList.length; i++) {
        document.getElementById(siteList[i]).href = usefulInfo[i].html_url;

        const dateString = usefulInfo[i].pushed_at;
        const date = new Date(dateString);
        document.querySelector(
          `.${siteList[i]}`
        ).textContent = `Updated: ${date.toLocaleString()}`;
      }
    })
    .catch(error => {
      console.error(error);
    });
}
