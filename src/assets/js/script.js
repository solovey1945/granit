$(document).ready(function(){
    $('.delivery__slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 7000
    });

    let header = $('.header .header__left');
    let headerMenu = $('.header__menu');
    let headerBurg = $('.header__burgmenu');
    let advantages = $('.advantages');
    let advantagesTop = advantages.offset().top;
    let intro = $('.delivery__overlay');
    let introH = intro.offset().top;
    let scrollPos = $(window).scrollTop();

    $(function() {
        if(window.matchMedia('(max-width: 425px)').matches) {
            $(window).on("scroll", () => {
                scrollPos = $(this).scrollTop();
                if(scrollPos > introH)  {
                    header.css({
                        'border-bottom': '5px solid #969696'
                    });
                    
                } else {
                    header.css({
                        'border-bottom': ''
                    });
                }
            });
        };
    });

    $(function() {
        $(window).bind('scroll', () => {
            scrollPos = $(this).scrollTop();
            if(scrollPos > advantagesTop) {
                $('.contacts__map').html('<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d71821.80196419622!2d37.922238574504256!3d55.76838056074592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0JzQvtGB0LrQvtCy0YHQutCw0Y8g0L7QsdC7LiDQsy4g0JHQsNC70LDRiNC40YXQsCwgINC_0LXRgC4g0KHRgtC-0LvQvtCy0L7QuSwg0LQuMjMsINC60L7RgC4gMzQ!5e0!3m2!1sru!2sua!4v1595639844960!5m2!1sru!2sua" aria-hidden="false" tabindex="0"></iframe>')
                $(window).unbind('scroll');
            }
        });
    });

    $(function() {
        headerBurg.on('click', function(e) {
            e.preventDefault();
            $(this).toggleClass("burg--active");
            headerMenu.toggleClass('header__menu--active');
            if(e.target) {
                $('body').toggleClass('body-overflow');
            }
        }); 
    });
    
    $(function(e) {
        e.preventDefault;
        $('.header__item').click(function() {
            $(this).parent().removeClass('header__menu--active');
            headerBurg.removeClass('burg--active');
            $('body').removeClass('body-overflow');
        });
    });

    
});

$(window).on('load', () => {
    $('.preloader').fadeOut(1000);
});



