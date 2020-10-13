$('.slider').slick({
    arrows: false,
    dots: true,
    speed: 1200,
    initialSlide: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    fade: true,

});

$('.prices__slider').slick({
    speed: 500,
    arrows: false,
    fade: true,
    swipe: false,
});

$('.slider-menu').slick({
    slidesToShow: 3,
    centerMode: true
});


document.querySelectorAll('.tabs__item').forEach((item, i) => {
    item.addEventListener('click', ()=> {
        $('.prices__slider').slick('goTo', i);
    })
});

$('.slider-photos').slick({
    slidesToShow: 4,
    arrows: false
});
