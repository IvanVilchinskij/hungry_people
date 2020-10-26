/* Header Menu */

const $menu = $('.header');
let $heightMain = $('.main').height();

if ($(window).width() > 767 ) {
    $(window).scroll(function() {
        if ($(window).scrollTop() > ($heightMain) && $menu.hasClass('default')) {
            $menu.fadeOut('swing', function() {
                $(this).removeClass('default')
                        .addClass('fixed')
                        .fadeIn('swing');
            });
        } else if($(window).scrollTop() <= ($heightMain) && $menu.hasClass("fixed")) {
            $menu.fadeOut('fast',function(){
                $(this).removeClass("fixed")
                        .addClass("default")
                        .fadeIn('fast');
            });
        }
    });
}

