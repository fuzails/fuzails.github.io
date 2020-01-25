(function($) {
	
	"use strict";
	
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}

	//Add One Page nav
	if($('.scroll-nav').length) {
		$('.scroll-nav ul').onePageNav();
	}

	$('[data-toggle="tooltip"]').tooltip();
	
	//Hide Bootstrap Onepage Menu On Click
	$('.mobile-menu .scroll-nav .navigation li a').on('click', function(){
		var windowWidth = $(window).width();
		if (windowWidth <= 1024) {
			$('.mobile-menu .navbar-toggle').trigger( "click" );
		}
	});

	$('.typed-title').typed({
		stringsElement: $('.typing-title'),
		backDelay: 1000,
		typeSpeed: 0,
		loop: true
	});

	

	$('.card-inner').mCustomScrollbar();


	/*
		Vars
	*/
	
	var width = $(window).width();
	var height = $(window).height();
	
	
	/*
		Header Menu Desktop
	*/
	
	var container = $('.card-outer .container');
	var innerbox = $('.card-outer .card-inner-box');
	var card_items = $('.card-item');
	var animation_in = container.data('animation-in');
	var animation_out = container.data('animation-out');
	
	$('.main-menu').on('click', 'a', function(){

		/* vars */
		var id = $(this).attr('href');
		var h = parseFloat($(id).offset().top);
		var card_item = $(id);
		var menu_items = $('.main-menu li');
		var menu_item_home = $('.main-menu li.home');
		var menu_item = $(this).closest('li');
		var d_lnk = $('.lnks .lnk.discover');
		
		/* if desktop */
		if(!menu_item.hasClass('active') & $('#home').length) {

			/* close card items */
			menu_items.removeClass('active');
			container.find(card_items).removeClass('animated '+animation_in);

			if($(container).hasClass('opened')) {
				container.find(card_items).addClass('animated '+animation_out);
			}

			/* open card item */
			menu_item.addClass('active');
			container.addClass('opened');
			container.find(card_item).removeClass('animated '+animation_out);
			container.find(card_item).addClass('animated '+animation_in);
			
			$(card_items).addClass('hide-item');
			
			$(card_item).removeClass('hide-item');
			$(card_item).addClass('active');
		}

		if(!menu_item_home.hasClass('active')) {
			$(innerbox).addClass('offsetleft');
		}else {
			$(innerbox).removeClass('offsetleft');
		}
		
		return false;
	});

	$('.main-menu li a').on('click', function(e) {
		
        var index = $('.main-menu li a').index(this);
        $('.portfolio-bg .image').removeClass('active').eq(index).addClass('active');
    });


	//Masonary
	function enableMasonry() {
		if($('.masonry-gallery').length){

			var winDow = $(window);
			// Needed variables
			var $container=$('.masonry-gallery .items-container');
			var $filter=$('.filter-btns');

			$container.isotope({
				filter:'*',
				 masonry: {
					columnWidth : 0
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});


			// Isotope Filter
			$filter.find('li').on('click', function(){
				var selector = $(this).attr('data-filter');

				try {
					$container.isotope({
						filter	: selector,
						animationOptions: {
							duration: 500,
							easing	: 'linear',
							queue	: false
						}
					});
				} catch(err) {

				}
				return false;
			});

 
			winDow.bind('resize', function(){
				var selector = $filter.find('li.active').attr('data-filter');

				$container.isotope({
					filter	: selector,
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});


			var filterItemA	= $('.filter-btns li');

			filterItemA.on('click', function(){
				var $this = $(this);
				if ( !$this.hasClass('active')) {
					filterItemA.removeClass('active');
					$this.addClass('active');
				}
			});
		}
	}

	enableMasonry();

	//Testimonial Carousel
	if ($('.testimonial-carousel').length) {
		$('.testimonial-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			smartSpeed: 700,
			autoplay: 4000,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				1024:{
					items:2
				},
			}
		});    		
	}

	//Clinet Carousel
	if ($('.client-carousel').length) {
		$('.client-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			smartSpeed: 700,
			autoplay: 4000,
			responsive:{
				0:{
					items:2
				},
				600:{
					items:3
				},
				1024:{
					items:4
				},
			}
		});    		
	}

	//Banner
	if ($('.banner-carousel').length) {
		$('.banner-carousel').owlCarousel({
			loop:true,
			items:1,
			margin:0,
			nav:false,
			smartSpeed: 700,
			autoplay: 4000
		});    		
	}
	
	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}
	
	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);
	
		});
	}
	
	
	//Progress Bar
	if($('.progress-levels .progress-box .bar-fill').length){
		$(".progress-box .bar-fill").each(function() {
			var progressWidth = $(this).attr('data-percent');
			$(this).css('width',progressWidth+'%');
			$(this).children('.percent').html(progressWidth/10+' yrs');
		});
	}

	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}

	// Video background
	$('.my-background-video').bgVideo({
		showPausePlay: false,
		pauseAfter: 1200
	});	
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}


	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
		enableMasonry();
	});

	

})(window.jQuery);

