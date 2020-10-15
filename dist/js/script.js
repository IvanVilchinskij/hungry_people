"use strict";

function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
window.addEventListener('DOMContentLoaded', function () {
  var selectSingles = document.querySelectorAll('.text__select');
  var selectSingleTitle1, selectSingleLabels1, selectSingleTitle2, selectSingleLabels2;
  selectSingles.forEach(function (item, i) {
    if (i == 0) {
      selectSingleTitle1 = item.querySelector('.text__select-title'), selectSingleLabels1 = item.querySelectorAll('.text__select-label');
    } else {
      selectSingleTitle2 = item.querySelector('.text__select-title'), selectSingleLabels2 = item.querySelectorAll('.text__select-label');
    }
  });

  function toggleAndClose(_ref) {
    var title = _ref.title,
        lables = _ref.lables,
        numb = _ref.numb;
    // Toggle menu
    title.addEventListener('click', function () {
      if ('active' === selectSingles[numb].getAttribute('data-state')) {
        selectSingles[numb].setAttribute('data-state', '');
      } else {
        selectSingles[numb].setAttribute('data-state', 'active');
      }
    }); // Close when click to option

    for (var i = 0; i < lables.length; i++) {
      lables[i].addEventListener('click', function (evt) {
        title.textContent = evt.target.textContent;
        selectSingles[numb].setAttribute('data-state', '');
      });
    }
  }

  toggleAndClose({
    title: selectSingleTitle1,
    lables: selectSingleLabels1,
    numb: 0
  });
  toggleAndClose({
    title: selectSingleTitle2,
    lables: selectSingleLabels2,
    numb: 1
  });
  $('.slider').slick({
    arrows: false,
    dots: true,
    speed: 1200,
    initialSlide: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'ease-out',
    touchThreshold: 12,
    adaptiveHeight: true
  });
  $('.prices__slider').slick({
    speed: 500,
    arrows: false,
    fade: true,
    swipe: false,
    cssEase: 'ease-out',
    waitForAnimate: false
  });
  $('.slider-menu').slick({
    slidesToShow: 3,
    centerMode: true,
    responsive: [{
      breakpoint: 1199,
      settings: {
        slidesToShow: 1,
        infinite: false,
        arrows: false,
        dots: true,
        touchThreshold: 12
      }
    }]
  });
  document.querySelectorAll('.tabs__item').forEach(function (item, i) {
    item.addEventListener('click', function () {
      $('.prices__slider').slick('goTo', i);
      toggleClass(i);
    });
  });

  function toggleClass() {
    var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    document.querySelectorAll('.tabs__item').forEach(function (item) {
      item.classList.remove('active');
    });
    document.querySelectorAll('.tabs__item')[i].classList.add('active');
  }

  toggleClass();
  $('.slider-photos').slick({
    slidesToShow: 4,
    arrows: false
  });
  var $menu = $('.header');
  var $heightMain = $('.main').height();

  if ($(window).width() > 767) {
    $(window).scroll(function () {
      if ($(window).scrollTop() > $heightMain + 200 && $menu.hasClass('default')) {
        $menu.fadeOut('swing', function () {
          $(this).removeClass('default').addClass('fixed').fadeIn('swing');
        });
      } else if ($(window).scrollTop() <= $heightMain + 200 && $menu.hasClass("fixed")) {
        $menu.fadeOut('fast', function () {
          $(this).removeClass("fixed").addClass("default").fadeIn('fast');
        });
      }
    });
  }
});