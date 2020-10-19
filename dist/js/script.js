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
    arrows: false,
    waitForAnimate: false,
    responsive: [{
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        infinite: true,
        arrows: false,
        dots: false,
        touchThreshold: 12
      }
    }]
  });
  var $menu = $('.header');
  var $heightMain = $('.main').height();

  if ($(window).width() > 767) {
    $(window).scroll(function () {
      if ($(window).scrollTop() > $heightMain && $menu.hasClass('default')) {
        $menu.fadeOut('swing', function () {
          $(this).removeClass('default').addClass('fixed').fadeIn('swing');
        });
      } else if ($(window).scrollTop() <= $heightMain && $menu.hasClass("fixed")) {
        $menu.fadeOut('fast', function () {
          $(this).removeClass("fixed").addClass("default").fadeIn('fast');
        });
      }
    });
  }

  $("a[href^='#']").click(function () {
    var _href = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(_href).offset().top + 'px'
    });
    return false;
  });
  var menuBtn = document.querySelector('.burger'),
      nav = document.querySelector('nav'),
      lineOne = document.querySelector('.line--1'),
      lineTwo = document.querySelector('.line--2'),
      lineThree = document.querySelector('.line--3'),
      links = document.querySelectorAll('.nav__item a');
  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    nav.classList.toggle('nav-open');
    lineOne.classList.toggle('line-cross');
    lineTwo.classList.toggle('line-fade-out');
    lineThree.classList.toggle('line-cross');
    document.querySelector('body').classList.toggle('no-scroll');
  });
  links.forEach(function (item) {
    item.addEventListener('click', function () {
      if (menuBtn.classList.contains('active')) {
        menuBtn.classList.toggle('active');
        nav.classList.toggle('nav-open');
        lineOne.classList.toggle('line-cross');
        lineTwo.classList.toggle('line-fade-out');
        lineThree.classList.toggle('line-cross');
        document.querySelector('body').classList.toggle('no-scroll');
      }
    });
  });
  var animItems = document.querySelectorAll('.anim-item');

  if (animItems.length > 0) {
    var animOnScroll = function animOnScroll() {
      for (var i = 0; i < animItems.length; i++) {
        var animItem = animItems[i],
            animItemHeight = animItem.offsetHeight,
            animItemOffset = offset(animItem).top,
            animStart = 3;
        var animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
          animItem.classList.add('anim-active');
        } else {
          if (animItem.classList.contains('anim-hide')) {
            animItem.classList.remove('anim-active');
          }
        }
      }
    };

    var offset = function offset(el) {
      var rect = el.getBoundingClientRect(),
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
      };
    };

    window.addEventListener('scroll', animOnScroll);
    setTimeout(function () {
      animOnScroll();
    }, 500);
  }
});