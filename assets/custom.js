
/* Header Mobile Menu jQuery */
$('.mobile-menu .btn--link').on('click',function() {
	$('.cm-site-header').toggleClass('menu-open');
});

$(window).scroll(function() {   
	var height = $(window).scrollTop(); 
	if(height  > 100) {
		$(".cm-site-header").addClass('sticky');
	} else{
		$(".cm-site-header").removeClass('sticky');
	}
});

/* Header Mobile Menu jQuery end */

/* Home Page jQuery */

if ($(window).width() > 767) {

	$('.template-index .cm-site-header').hover(function() {
		$('#shopify-section-footer').toggleClass('footer-open');
	});

}
/* Home Page jQuery end */


/* About Us Page jQuery */

$('.big-about-icon-slider-box').hover(function(){
	$('.big-about-icon-slider-box').removeClass('open');
	$(this).addClass('open');
});

/* About Us Page jQuery end */

/* Our Brands Page jQuery */

$(".big-brands-item").on("click", function(){
	var idOfContentToOpen = $(this).data('id');
	
	if($(this).hasClass('active')){
		$(".big-brands-item").removeClass('active');
		$(".brands-detail-box").slideUp();
		return false;
	}

	$(".big-brands-item").removeClass('active');
	$(this).addClass('active');

	$(".brands-detail-box").slideUp();
	$("#"+idOfContentToOpen).slideToggle();

});


$(".big-our-brands-row-one .big-brands-item").on("click", function(){
	$('html, body').animate({
		scrollTop:  $(".big-our-brands-row-detail").offset().top -130
	}, 1000);
});	
$(".big-our-brands-row-tow .big-brands-item").on("click", function(){
	$('html, body').animate({
		scrollTop:  $(".big-our-brands-row-detail").offset().top -55
	}, 1000);
});	

/* Mobile jQuery */
$(".mobile-big-brands-item").on("click", function(){
	
	$(this).toggleClass('active');
	$(".mobile-big-brands-item").removeClass('open');

	if($(this).hasClass('active'))
	{
		$(".mobile-big-brands-item").removeClass('active');
		$(".mobile-brands-detail-box").slideUp();
		$(this).addClass('active');

		$(this).find(".mobile-brands-detail-box").slideDown(500);

	} else {
		$(".mobile-brands-detail-box").slideUp(500);
		$(".mobile-big-brands-item").removeClass('active');
	}

});		

$.fn.isInViewport = function() {
	var elementTop = $(this).offset().top;
	var elementBottom = elementTop + $(this).outerHeight();

	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + 76;
  
  	return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('scroll', function() {
	$('.mobile-big-brands-item').each(function() {		


		if ($(this).isInViewport()) {
			$(".mobile-big-brands-item").removeClass('open');
			
			$(this).addClass('open');

		} else  {
			$(this).removeClass('open'); 		 
			
  		}

	});
});


/* Our Brands Page jQuery end */

/* Join The Team Page jQuery */

$(document).ready(function() {	
	$(".big-join-banner-perks-icons ul li").hover(function(){
		var idPerksIcon = $(this).data('tab');

		if($(this).hasClass('active'))
				return false;				

		$(".big-join-banner-perks-icons ul li").removeClass('active');
		$(this).addClass('active');
		
		$(".big-perks-icon-detail-right").slideUp(200);
		$("#"+idPerksIcon).stop().slideDown('slow');
		

	});

	$(document).on('click','.accordion-tab',function(){

		if($(this).parent().hasClass('active')) {
			$(this).parent().removeClass("active");
			$(this).parent().find(".accordion-content").slideUp();
			return false;
		}
				

		$(".accordion-tab").each(function(){
			$(this).parent().removeClass("active");
			$(this).removeClass("active");
			$(this).parent().find(".accordion-content").slideUp();
		});

		$(this).parent().addClass("active");
		$(this).parent().find(".accordion-content").slideDown();

	});

	$(".filter-title").click(function(){
		$(".big-filter-form").slideToggle('slow');
	});	

	if ($(window).width() < 768) { 

		$(".view-details").click(function() {
	  	$(".big-application-contant-mobile").removeClass('active');
	    $(this).parent().addClass('active');
		}); 
			

		}
	


});

/* Join The Team Page jQuery end */