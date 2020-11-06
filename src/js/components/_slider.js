/* Sliders */

$('.slider').slick({
    arrows: false,
    dots: true,
    speed: 1200,
    initialSlide: 1,
    cssEase: 'ease-out',
    touchThreshold: 12,
    adaptiveHeight: true,
    infinite: false

});

$('.prices__slider').slick({
    speed: 500,
    arrows: false,
    fade: true,
    swipe: false,
    cssEase: 'ease-out',
    waitForAnimate: false,
    speed: 0
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

const tabs = document.querySelectorAll('.tabs__item');

function toggleClass(i = 0) {
    tabs.forEach(item => {
        item.classList.remove('active');
    });
    tabs[i].classList.add('active');
}

tabs.forEach((item, i) => {
    item.addEventListener('click', ()=> {
        $('.prices__slider').slick('goTo', i);
        toggleClass(i);
    });
});

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
                touchThreshold: 12,
                slidesToScroll: 2
            }
        }     
    ]
});
