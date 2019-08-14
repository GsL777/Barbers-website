jQuery(document).ready(function($){

	// Sticky Header
	$(window).scroll(function() {
		if ($(window).scrollTop() > 100) {
			$('.navigation').addClass('sticky');
		} else {
			$('.navigation').removeClass('sticky');
		}
	});


	// Mobile Navigation
	$('.nav-toggle').click(function() {
		if ($('.navigation').hasClass('open-nav')) {
			$('.navigation').removeClass('open-nav');
		} else {
			$('.navigation').addClass('open-nav');
		}
	});

	$('.navigation li a').click(function() {
		if ($('.navigation').hasClass('open-nav')) {
			$('.navigation').removeClass('open-nav');
			$('.navigation').removeClass('open-nav');
		}
	});


	// Navigation Scroll
	$('.nav a').click(function(event) {
		var id = $(this).attr("href");
		var offset = 70;
		var target = $(id).offset().top - offset;
		$('html, body').animate({
			scrollTop: target
		}, 400);
		event.preventDefault();
	});


	/*Number count for stats, using jQuery animate START*/
	$('.counting').each(function() {
		var $this = $(this),
		countTo = $this.attr('data-count');
	  
		$({ countNum: $this.text()}).animate({
			countNum: countTo },
		{
			duration: 5000,
			easing:'linear',
			step: function() {
				$this.text(Math.floor(this.countNum));
			},
			complete: function() {
				$this.text(this.countNum);
				//alert('finished');
			}
		});
	});
	/*Number count for stats, using jQuery animate START*/


	/*Smooth scroll animation START*/
	$('.smooth-scroll').click(function(e){
		e.preventDefault();
		var target = $($(this).attr('href'));
		if(target.length){
			var scrollTo = target.offset().top;
			$('body, html').animate({scrollTop: scrollTo+'px'}, 800);
		}
	});
	/*Smooth scroll animation END*/


	/*Contact form START*/
	(function($) {
	// Detect when form-control inputs are not empty
		$(".contact-form .form-control").on("input", function() {
			if ($(this).val()) {
				$(this).addClass("hasValue");
			} else {
				$(this).removeClass("hasValue");
			}
		});
	})(jQuery); // End of use strict
	/*Contact form END*/


	/*Cookie bar START*/
	$(document).ready(function(){   
		setTimeout(function () {
			$("#cookie").fadeIn(200);
		}, 4000);
		$("#cookie-close, .cookie-agree").click(function() {
			$("#cookie").fadeOut(200);
		}); 
	});
	/*Cookie bar END*/
});