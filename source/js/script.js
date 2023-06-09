let navMain = document.querySelector('.main-navigation');
let navToggle = document.querySelector('.main-navigation__toggle');
let headerWrapper = document.querySelector('.main-header__logo');
let bookingMap = document.querySelector('.booking__map-container');

headerWrapper.classList.remove('main-header__logo--nojs');

navMain.classList.remove('main-navigation--nojs');

bookingMap?.classList.remove('booking__map-container--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-navigation--closed')) {
    navMain.classList.remove('main-navigation--closed');
    navMain.classList.add('main-navigation--opened');
  } else {
    navMain.classList.add('main-navigation--closed');
    navMain.classList.remove('main-navigation--opened');
  }
});
