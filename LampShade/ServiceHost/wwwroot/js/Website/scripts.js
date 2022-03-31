(function($) {
    'use strict';

    // Mean Menu
	$('.mean-menu').meanmenu({
		meanScreenWidth: "991"
	});

	// Header Sticky
	$(window).on('scroll',function() {
		if ($(this).scrollTop() > 120){  
			$('.navbar-area').addClass("is-sticky");
		}
		else{
			$('.navbar-area').removeClass("is-sticky");
		}
	});

    // Search Overlay JS
	$(".nav-sidebar .search-box i").on("click", function(){
		$(".search-overlay").toggleClass("search-overlay-active");
	});
	$(".search-close").on("click", function(){
		$(".search-overlay").removeClass("search-overlay-active");
    });

    // Search Overlay JS
	$(".mobile-nav-area .search-box i").on("click", function(){
		$(".search-overlay").toggleClass("search-overlay-active");
	});
	$(".search-close").on("click", function(){
		$(".search-overlay").removeClass("search-overlay-active");
    });

	// Banner Slider
    $('.banner-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        rtl: true,
        dots: false,
        items: 1,
        autoplay: true,
        autoHeight:true,
        autoplayHoverPause: true,
        mouseDrag: false,
        touchDrag: false,
        navText: [
            "<i class='flaticon-left-arrow'></i>",
            "<i class='flaticon-right-arrow-angle'></i>"
        ],
        responsive:{
            0:{
                autoplay: false,
            },
            768:{
                autoplay: true,
            },
        }
    })

    $(".banner-slider").on("translate.owl.carousel", function(){
        $(".banner-item .banner-content span").removeClass("animated fadeInUp").css("opacity", "0");
        $(".banner-item .banner-content h1").removeClass("animated fadeInUp").css("opacity", "0");
        $(".banner-item .banner-content p").removeClass("animated fadeInUp").css("opacity", "0");
        $(".banner-item .banner-content .default-btn").removeClass("animated fadeInUp").css("opacity", "0");
    });
    $(".banner-slider").on("translated.owl.carousel", function(){
        $(".banner-item .banner-content span").addClass("animated fadeInUp").css("opacity", "1");
        $(".banner-item .banner-content h1").addClass("animated fadeInUp").css("opacity", "1");
        $(".banner-item .banner-content p").addClass("animated fadeInUp").css("opacity", "1");
        $(".banner-item .banner-content .default-btn").addClass("animated fadeInUp").css("opacity", "1");
    });

    // Banner Slider Two
    $('.banner-slider-two').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        items: 1,
        rtl: true,
        autoplay: true,
        autoHeight:true,
        autoplayHoverPause: true,
        mouseDrag: false,
        touchDrag: true,
        navText: [
            "<i class='flaticon-left-arrow'></i>",
            "<i class='flaticon-right-arrow'></i>"
        ],
        responsive:{
            0:{
                autoplay: false,
            },
            768:{
                autoplay: true,
            },
        }
    })

    $(".banner-slider-two").on("translate.owl.carousel", function(){
        $(".banner-item-two .banner-content-two span").removeClass("animated fadeInLeft").css("opacity", "0");
        $(".banner-item-two .banner-content-two h1").removeClass("animated fadeInLeft").css("opacity", "0");
        $(".banner-item-two .banner-content-two p").removeClass("animated fadeInLeft").css("opacity", "0");
        $(".banner-item-two .banner-content-two .default-btn").removeClass("animated fadeInLeft").css("opacity", "0");
    });
    $(".banner-slider-two").on("translated.owl.carousel", function(){
        $(".banner-item-two .banner-content-two span").addClass("animated fadeInLeft").css("opacity", "1");
        $(".banner-item-two .banner-content-two h1").addClass("animated fadeInLeft").css("opacity", "1");
        $(".banner-item-two .banner-content-two p").addClass("animated fadeInLeft").css("opacity", "1");
        $(".banner-item-two .banner-content-two .default-btn").addClass("animated fadeInLeft").css("opacity", "1");
    });

    // Testimonials Slider
    $('.testimonials-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        rtl: true,
        dots: false,
        autoplay: true,
        autoHeight:true,
        autoplayHoverPause: true,
        mouseDrag: false,
        touchDrag: false,
        navText: [
            "<i class='flaticon-left-arrow'></i>",
            "<i class='flaticon-right-arrow-angle'></i>"
        ],
        responsive:{
            0:{
                items: 1,
            },
            768:{
                items: 2,
            },
        }
    })

    // Gallery Slider
    $('.gallery-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        center: true,
        rtl: true,
        dots: false,
        autoplay: true,
        autoHeight:true,
        autoplayHoverPause: true,
        mouseDrag: false,
        touchDrag: false,
        navText: [
            "<i class='flaticon-arrow-pointing-to-left'></i>",
            "<i class='flaticon-arrow-pointing-to-right'></i>"
        ],
        responsive:{
            0:{
                items: 1,
            },
            768:{
                items: 2,
            },
        }
    })

    $('.gallery-style-slider-image').slick({
        dots:true,
        speed:500,
        fade:false,
        slide:'li',
        slidesToShow:1,
        rtl: true,
        autoplay:true,
        autoplaySpeed:4000,
        arrows:true,
        prevArrow: '<span class="prev-arrow"><i class="flaticon-arrow-pointing-to-left"></i></span>',
        nextArrow: '<span class="next-arrow"><i class="flaticon-arrow-pointing-to-right"></i></span>',
        responsive:[{breakpoint:800,
            settings:{
                arrows:true,
                centerMode:false,
                centerPadding:'40px',
                variableWidth:false,
                slidesToShow:1,
                dots:true
            },
            breakpoint:1200,settings:
            {
                arrows:true,
                centerMode:false,
                centerPadding:'40px',
                variableWidth:false,
                slidesToShow:1,
                dots:true
            }
        }],
        customPaging:function(slider,i){return '<button class="tab">'+$('.slick-thumbs li:nth-child('+(i+1)+')').html()+'</button>';}
    });

    // Brand Slider
    $('.brand-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        rtl: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 2
            },
            576:{
                items: 3
            },
            1000:{
                items: 5
            },
        }
    })

    // Popup Gallery 
    $('.gallery-photo').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] 
        }
    });

    // Popup Video 
    $('.play-btn').magnificPopup({
        disableOn: 0,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // Property Slider
    $('.property-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        rtl: true,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1
            },
            576:{
                items: 2
            },
            1000:{
                items: 3
            },
            1200:{
                items: 4
            },
        }
    })

    // Property Features Slider
    $('.property-features-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        rtl: true,
        items: 1,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
    })

    // Property Features Slider Two
    $('.property-features-slider-two').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        items: 1,
        rtl: true,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
    })

    // Tabs Single Page
    $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
    $('.tab ul.tabs li a').on('click', function (g) {
        var tab = $(this).closest('.tab'), 
        index = $(this).closest('li').index();
        tab.find('ul.tabs > li').removeClass('current');
        $(this).closest('li').addClass('current');
        tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
        tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
        g.preventDefault();
    });

    // FAQ Accordion JS
	$('.accordion').find('.accordion-title').on('click', function(){
		// Adds Active Class
		$(this).toggleClass('active');
		// Expand or Collapse This Panel
		$(this).next().slideToggle('fast');
		// Hide The Other Panels
		$('.accordion-content').not($(this).next()).slideUp('fast');
		// Removes Active Class From Other Titles
		$('.accordion-title').not($(this)).removeClass('active');		
    });

     // Skill JS
	$('.skill-bar').each(function() {
		$(this).find('.progress-content').animate({
		width:$(this).attr('data-percentage')
		},2000);
		
		$(this).find('.progress-number-mark').animate(
		{right:$(this).attr('data-percentage')},
		{
			duration: 2000,
			step: function(now, fx) {
			var data = Math.round(now);
			$(this).find('.percent').html(data + '%');
			}
		});  
	});

    // Count Time JS
	function makeTimer() {
		var endTime = new Date("October 30, 2021 17:00:00 PDT");			
		var endTime = (Date.parse(endTime)) / 1000;
		var now = new Date();
		var now = (Date.parse(now) / 1000);
		var timeLeft = endTime - now;
		var days = Math.floor(timeLeft / 86400); 
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }
		$("#days").html(days + "<span>Days</span>");
		$("#hours").html(hours + "<span>Hours</span>");
		$("#minutes").html(minutes + "<span>Minutes</span>");
		$("#seconds").html(seconds + "<span>Seconds</span>");
	}
    setInterval(function() { makeTimer(); }, 300);

    // Subscribe form
    $(".newsletter-form").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            // Handle The Invalid Form...
            formErrorSub();
            submitMSGSub(false, "Please enter your email correctly");
        } else {
            // Everything Looks Good!
            event.preventDefault();
        }
    });
    function callbackFunction (resp) {
        if (resp.result === "success") {
            formSuccessSub();
        }
        else {
            formErrorSub();
        }
    }
    function formSuccessSub(){
        $(".newsletter-form")[0].reset();
        submitMSGSub(true, "Thank you for subscribing!");
        setTimeout(function() {
            $("#validator-newsletter").addClass('hide');
        }, 4000)
    }
    function formErrorSub(){
        $(".newsletter-form").addClass("animated shake");
        setTimeout(function() {
            $(".newsletter-form").removeClass("animated shake");
        }, 1000)
    }
    function submitMSGSub(valid, msg){
        if(valid){
            var msgClasses = "validation-success";
        } else {
            var msgClasses = "validation-danger";
        }
        $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
    }
        
    // AJAX MailChimp
    $(".newsletter-form").ajaxChimp({
        url: "https://envyTheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
        callback: callbackFunction
    });

    // Nice Select JS
    $('select').niceSelect();

    //WOW JS
    new WOW().init();

    // Preloader JS
    $(window).on('load',function(){
        $(".preloader").fadeOut(500);
    });

    // Datetimepicker
    $('#datetimepicker').datepicker();

    // Odometer JS
    $('.odometer').appear(function(e) {
        var odo = $(".odometer");
        odo.each(function() {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
            
        });
    });

    // Back To Top
    $('body').append("<div class='go-top'><i class='bx bx-caret-up'></i></div>");
    $(window).on('scroll', function() {
        var scrolled = $(window).scrollTop();
        if (scrolled > 600) $('.go-top').addClass('active');
        if (scrolled < 600) $('.go-top').removeClass('active');
    });
    $('.go-top').on('click', function() {
        $('html, body').animate({
            scrollTop: '0',
        }, 500 );
    });

})($);