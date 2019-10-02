$(document).ready(function(){
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        fade: true,
        draggable: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        fade: true,
        dots: true,
        infinite: true
    });

    var $navbarScrollPosition = 0;

    $(window).scroll(function(){
        var $navbarScrollTop = $(this).scrollTop();
        if ($navbarScrollTop - $navbarScrollPosition > 50){
            var $navbarHeight = $('.navbar').css('height');
            $('.navbar').animate({
                top: '-' + $navbarHeight
            }, 150);
            $navbarScrollPosition = $navbarScrollTop;
        } else if ($navbarScrollPosition - $navbarScrollTop > 50){
            $('.navbar').animate({
                top: '0px'
            }, 150);
            $navbarScrollPosition = $navbarScrollTop;
        }
    });
});