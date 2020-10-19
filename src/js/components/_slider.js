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
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 1,
                infinite: false,
                arrows: false,
                dots: true,
                touchThreshold: 12
            }
        }
        
    ]
});


document.querySelectorAll('.tabs__item').forEach((item, i) => {
    item.addEventListener('click', ()=> {
        $('.prices__slider').slick('goTo', i);
        toggleClass(i);
    });
});

function toggleClass(i = 0) {
    document.querySelectorAll('.tabs__item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelectorAll('.tabs__item')[i].classList.add('active');
}

toggleClass();


$('.slider-photos').slick({
    slidesToShow: 4,
    arrows: false,
    waitForAnimate: false,
    responsive: [
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                infinite: true,
                arrows: false,
                dots: false,
                touchThreshold: 12
            }
        }
        
    ]
});
