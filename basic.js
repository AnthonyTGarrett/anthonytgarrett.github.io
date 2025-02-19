const height = document.querySelector('.section-two-right').offsetHeight;

let rightSideSection = document.querySelector('.test1');
console.log(rightSideSection);
rightSideSection.setAttribute('style', `height: ${height}`);
