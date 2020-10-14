const $menu = $('.header');
let $heightMain = $('.main').height();

$(window).scroll(function() {
    if ($(window).scrollTop() > ($heightMain + 200) && $menu.hasClass('default')) {
        $menu.fadeOut('swing', function() {
            $(this).removeClass('default')
                   .addClass('fixed')
                   .fadeIn('swing');
        });
    } else if($(window).scrollTop() <= ($heightMain + 200) && $menu.hasClass("fixed")) {
        $menu.fadeOut('fast',function(){
            $(this).removeClass("fixed")
                   .addClass("default")
                   .fadeIn('fast');
        });
    }
});
