(function($) {
    "use strict";


    $(window).on("load", function() { // makes sure the whole site is loaded

        //slider homepage setting
        $(".home-slider").owlCarousel({
            navigation: false, // Hide next and prev buttons
            slideSpeed: 300,
            autoplay: true,
            autoHeight: true,
            pagination: true,
            paginationSpeed: 300,
            singleItem: true,
            transitionStyle: "fade"
        });




        //move to hash after loading
        if (window.location.hash) {
            $('html, body').stop().animate({
                scrollTop: $(window.location.hash).offset().top - 54
            }, 300, 'linear');
        }

    });
	
	//blog team setting
    $(".blog-slider").owlCarousel({
        navigation: true,
        slideSpeed: 300,
        autoplay: true,
		autoHeight: true,
        pagination: false,
        paginationSpeed: 300,
        singleItem: true,
        mouseDrag: true,
		navigationText: ['<span class="slide-nav inleft"><i class="fa fa-caret-left"></i></span >', '<span class="slide-nav inright"><i class="fa fa-caret-right"></i></span >'],
        stopOnHover: false,
        transitionStyle: "fade"
    });
	
    //about ,team &services gallery  setting
    $(".gal-about,.gal-service,.team-gallery").owlCarousel({
        navigation: false, // Hide next and prev buttons
        slideSpeed: 300,
        autoplay: true,
        autoHeight: true,
        pagination: true,
        paginationSpeed: 300,
        singleItem: false,
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]
    });

    //easing team tab scrolling
    $('.team-hover').on('click', function(event) {
        var $anchor = $('#teamtab');

        $('html, body').stop().animate({
            scrollTop: $($anchor).offset().top - 54
        }, 600, 'linear');
        event.preventDefault();
    });

    //script for navigation(superfish)
    $('.menu-box ul').superfish({
        delay: 400, //delay on mouseout
        animation: {
            opacity: 'show',
            height: 'show'
        }, // fade-in and slide-down animation
        animationOut: {
            opacity: 'hide',
            height: 'hide'
        },
        speed: 200, //  animation speed
        speedOut: 200,
        autoArrows: false // disable generation of arrow mark-up
    })

    //Page scrolling
    $('.menu-box .home-nav').onePageNav({
        filter: ':not(.external a)',
        scrollThreshold: 0.25,
        scrollOffset: 54
    });

    //sticky navigation
    $(".for-sticky").sticky({
        topSpacing: 0,
        className: 'shrink'
    });

    //create menu for tablet/mobile
    $(".menu-box .navigation").clone(false).find("ul,li").removeAttr("id").remove(".sub-menu").appendTo($(".mobile-menu"));
    $(".mobile-menu .sub-menu").remove();
    $('.mobile-menu').on('show.bs.collapse', function() {
        $('body').on('click', function() {
            $('.mobile-menu').collapse('hide');
        })
    })

    //toggle menu
    $('.menu-btn').on('click', function() {
        $('.mobile-menu').collapse({
            toggle: false
        });
    })

    //menu for tablet/mobile,slider button, about button scrolling
    $('.mobile-menu a').on('click', function() {
        var $anchor = $(this);

        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 92
        }, 800, 'linear');
        event.preventDefault();
    });



    // script prettyphoto
    $("a[data-rel^='prettyPhoto']").prettyPhoto({
        hook: 'data-rel',
        deeplinking: false
    });

    //image background for team
    $(".team-bg").each(function() {
        var imG = $(this).data('background');
        $(this).css('background-image', "url('" + imG + "') "

        );
    });

    // Video responsive
    $("body").fitVids();




    //background ticker (bg2/testimonial)
    $('.big-ticker:has(>div:eq(1))').list_ticker({
        speed: 5000,
        effect: 'fade'
    });

    //add class on touch device
    if (Modernizr.touch) {
        $('body').addClass('no-para');

    }

})(jQuery);