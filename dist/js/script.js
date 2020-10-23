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
      selectSingleTitle1 = item.querySelector('.text__select-title');
      selectSingleLabels1 = item.querySelectorAll('.text__select-label');
    } else {
      selectSingleTitle2 = item.querySelector('.text__select-title');
      selectSingleLabels2 = item.querySelectorAll('.text__select-label');
    }
  });

  function toggleAndClose(_ref) {
    var title = _ref.title,
        lables = _ref.lables,
        numb = _ref.numb;
    // Toggle menu
    title.addEventListener('click', function () {
      if (numb == 0) {
        selectSingles[numb + 1].setAttribute('data-state', '');
      } else {
        selectSingles[numb - 1].setAttribute('data-state', '');
      }

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
    /* $(document).mouseup(function (e) {
        const block = $('#selectContent1');
        if (!block.is(e.target) && block.has(e.target).length === 0){
            block.hide();
        }
          const block2 = $('#selectContent12');
        if (!block2.is(e.target) && block2.has(e.target).length === 0){
            block2.hide();
        }
    }); */

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

  function toggleClass() {
    var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    document.querySelectorAll('.tabs__item').forEach(function (item) {
      item.classList.remove('active');
    });
    document.querySelectorAll('.tabs__item')[i].classList.add('active');
  }

  document.querySelectorAll('.tabs__item').forEach(function (item, i) {
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

  function clickBurger(_ref2) {
    var btn = _ref2.btn,
        navigation = _ref2.navigation,
        firstLine = _ref2.firstLine,
        secondLine = _ref2.secondLine,
        thirdLine = _ref2.thirdLine,
        navLinks = _ref2.navLinks;
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
  $('#contactPhone, #bookPhone').mask('+40(999)-999-999', {
    placeholder: "+40(   )-   -    "
  });
  $('#bookDate').mask('99.99', {
    placeholder: "mm.dd"
  });
});