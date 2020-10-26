"use strict";

/* Webp */
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
  /* Selects */
  var titles = document.querySelectorAll('.text__select');
  document.body.addEventListener('click', function (e) {
    var target = e.target,
        parent = target.parentNode;

    var deactiveAttr = function deactiveAttr() {
      titles.forEach(function (item) {
        item.setAttribute('data-state', '');
      });
    };

    if (target && parent.classList.contains('text__select')) {
      if ('active' === parent.getAttribute('data-state')) {
        parent.setAttribute('data-state', '');
      } else {
        deactiveAttr();
        parent.setAttribute('data-state', 'active');
      }
    } else if (target && target.classList.contains('text__select-label')) {
      parent.previousSibling.previousSibling.textContent = target.textContent;
      parent.parentNode.setAttribute('data-state', '');
    }

    if (!parent.classList.contains('text__select')) {
      deactiveAttr();
    }
  });
  /* Sliders */

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
  var tabs = document.querySelectorAll('.tabs__item');

  function toggleClass() {
    var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    tabs.forEach(function (item) {
      item.classList.remove('active');
    });
    tabs[i].classList.add('active');
  }

  tabs.forEach(function (item, i) {
    item.addEventListener('click', function () {
      $('.prices__slider').slick('goTo', i);
      toggleClass(i);
    });
  });
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
        touchThreshold: 12,
        slidesToScroll: 2
      }
    }]
  });
  /* Header Menu */

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
  /* Links */


  $("a[href^='#']").click(function () {
    var _href = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(_href).offset().top + 'px'
    });
    return false;
  });
  /* Burger */

  function clickBurger(_ref) {
    var btn = _ref.btn,
        navigation = _ref.navigation,
        firstLine = _ref.firstLine,
        secondLine = _ref.secondLine,
        thirdLine = _ref.thirdLine,
        navLinks = _ref.navLinks;
    var menuBtn = document.querySelector(btn),
        nav = document.querySelector(navigation),
        lineOne = document.querySelector(firstLine),
        lineTwo = document.querySelector(secondLine),
        lineThree = document.querySelector(thirdLine),
        links = document.querySelectorAll(navLinks),
        body = document.querySelector('body');

    function toggleClasses() {
      menuBtn.classList.toggle('active');
      nav.classList.toggle('nav-open');
      lineOne.classList.toggle('line-cross');
      lineTwo.classList.toggle('line-fade-out');
      lineThree.classList.toggle('line-cross');
      body.classList.toggle('no-scroll');
    }

    menuBtn.addEventListener('click', toggleClasses);
    links.forEach(function (link) {
      link.addEventListener('click', function () {
        if (menuBtn.classList.contains('active')) {
          toggleClasses();
        }
      });
    });
  }

  clickBurger({
    btn: '.burger',
    navigation: 'nav',
    firstLine: '.line--1',
    secondLine: '.line--2',
    thirdLine: '.line--3',
    navLinks: '.nav__item a'
  });
  /* Animation */

  var animItems = document.querySelectorAll('.anim-item');

  if (document.documentElement.clientWidth > 767) {
    if (animItems.length > 0) {
      var animOnScroll = function animOnScroll() {
        for (var i = 0; i < animItems.length; i++) {
          var animItem = animItems[i],
              animItemHeight = animItem.offsetHeight,
              animItemOffset = offset(animItem).top,
              animStart = 2;
          var animItemPoint = window.innerHeight - animItemHeight / animStart;

          if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
          }

          if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight && !animItem.classList.contains('default')) {
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
  }

  window.addEventListener('resize', function () {
    if (document.documentElement.clientWidth > 767) {
      animItems.forEach(function (item) {
        item.classList.remove('anim-item');
        item.classList.remove('anim-active');
        item.classList.add('default');
      });
    }
  });
  /* Mask */

  $('#contactPhone, #bookPhone').mask('+40-(999)-999-999', {
    placeholder: "+40-(___)-___-___"
  });
  $('#bookDate').mask('99.99', {
    placeholder: "mm.dd"
  });
});