var navMain = document.querySelector('.page-header__nav');
var navToggle = document.querySelector('.nav__button');

navMain.classList.remove('nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('nav--close')) {
    navMain.classList.remove('nav--close');
    navMain.classList.add('nav--open');
  } else {
    navMain.classList.add('nav--close');
    navMain.classList.remove('nav--open');
  }
});
