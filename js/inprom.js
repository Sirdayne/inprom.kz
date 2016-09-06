$(document).ready(function(){        
    $('.burger-menu').click(function() {
        $(this).toggleClass('burger-active');
        $('.header-navigation').fadeToggle('fast');
    });
    
    $('.partners-logo img').click(function() {
        
        $('.offer-call').fadeIn('fast');
        $('.modal-back').fadeIn('fast');
        
    });
    
    $('.modal-back').click(function() {

        $('.offer-call').fadeOut('fast');
        $('.modal-back').fadeOut('fast'); 
        
    });
    
    $('#call').click(function() {

        $('.offer-call').fadeIn('fast');
        $('.modal-back').fadeIn('fast');
        
    });
    
    $('.order-call').click(function() {

        $('.offer-call').fadeIn('fast');
        $('.modal-back').fadeIn('fast');
        
    });
    
    
    $('.js-vodosnabjenie').click(function() {
        $('.prod-nav').removeClass('prod-nav-active');
        $(this).addClass('prod-nav-active');
        $('.js-section').fadeOut('fast');
        $('.section-vodosnabjenie').fadeIn('fast'); 
        
    });
    
    $('.js-teplosnabjenie').click(function() {
        $('.prod-nav').removeClass('prod-nav-active');
        $(this).addClass('prod-nav-active');
        $('.js-section').fadeOut('fast');
        $('.section-teplosnabjenie').fadeIn('fast'); 
        
    });
    
    $('.js-aggressive').click(function() {
        $('.prod-nav').removeClass('prod-nav-active');
        $(this).addClass('prod-nav-active');
        $('.js-section').fadeOut('fast');
        $('.section-aggressive').fadeIn('fast'); 
        
    });
    
    $('.js-gazosnabjenie').click(function() {
        $('.prod-nav').removeClass('prod-nav-active');
        $(this).addClass('prod-nav-active');
        $('.js-section').fadeOut('fast');
        $('.section-gazosnabjenie').fadeIn('fast'); 
        
    });
    
    $('.js-dobavki').click(function() {
        $('.chem-nav').removeClass('prod-nav-active');
        $(this).addClass('prod-nav-active');
        $('.js-section').fadeOut('fast');
        $('.section-dobavki').fadeIn('fast'); 
        
    });
    
    $('.js-remont').click(function() {
        $('.chem-nav').removeClass('prod-nav-active');
        $(this).addClass('prod-nav-active');
        $('.js-section').fadeOut('fast');
        $('.section-remont').fadeIn('fast'); 
        
    });
    
    $('.js-promy').click(function() {
        $('.chem-nav').removeClass('prod-nav-active');
        $(this).addClass('prod-nav-active');
        $('.js-section').fadeOut('fast');
        $('.section-promy').fadeIn('fast'); 
        
    });
    
    $('.js-hydro').click(function() {
        $('.chem-nav').removeClass('prod-nav-active');
        $(this).addClass('prod-nav-active');
        $('.js-section').fadeOut('fast');
        $('.section-hydro').fadeIn('fast'); 
        
    });
    
    $('.js-klei').click(function() {
        $('.chem-nav').removeClass('prod-nav-active');
        $(this).addClass('prod-nav-active');
        $('.js-section').fadeOut('fast');
        $('.section-klei').fadeIn('fast'); 
        
    });
    
    
	var $window = $(window);		//Window object
	
	var scrollTime = 0.75;			//Scroll time
	var scrollDistance = 350;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll
		
        if ($(window).width() > 1200) {
            $window.on("mousewheel DOMMouseScroll", function(event){

                event.preventDefault();	
          
                var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
                var scrollTop = $window.scrollTop();
                var finalScroll = scrollTop - parseInt(delta*scrollDistance);

                TweenMax.to($window, scrollTime, {
                    scrollTo : { y: finalScroll, autoKill:true },
                        ease: Power1.easeOut,	//For more easing functions see http://api.greensock.com/js/com/greensock/easing/package-detail.html
                        autoKill: true,
                        overwrite: 5							
                    });

            });
	   } 
});
