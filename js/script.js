$(document).ready(function () {
    'use strict';
    // -----------------------------
    //  Headroom Initialize
    // -----------------------------
    $('.main-nav').headroom();

    // Smooth Scroll to Section
    $('a.page-scroll').on('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 60)
        }, 700);
    });

    $(window).on('scroll', function () {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 100) {
            $('.main-nav').addClass('nav-bg');
        } else {
            $('.main-nav').removeClass('nav-bg');
        }
    });

    $('.testimonial-item').matchHeight({
        byRow: 0
    });


    // -----------------------------
    //  AOS Initialize
    // -----------------------------
     AOS.init();
});

// $(window).on('scroll', function () {
//     var windscroll = $(window).scrollTop();
//     if (windscroll >= 100) {
//         $('.main-nav').addClass('nav-bg');
//     } else {
//         $('.main-nav').removeClass('nav-bg');
//     }
// });
