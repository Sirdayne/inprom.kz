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
        $('.thx').fadeOut('fast');
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
    
    
    $('#prod-select').change(function(){
      if($(this).val() == 'js-vodosnabjenie'){ 
        $('.js-section').fadeOut('fast');
        $('.section-vodosnabjenie').fadeIn('fast');  
      }
    });
    $('#prod-select').change(function(){
      if($(this).val() == 'js-teplosnabjenie'){ 
        $('.js-section').fadeOut('fast');
        $('.section-teplosnabjenie').fadeIn('fast');  
      }
    });
    $('#prod-select').change(function(){
      if($(this).val() == 'js-aggressive'){ 
        $('.js-section').fadeOut('fast');
        $('.section-aggressive').fadeIn('fast');  
      }
    });
    $('#prod-select').change(function(){
      if($(this).val() == 'js-gazosnabjenie'){ 
        $('.js-section').fadeOut('fast');
        $('.section-gazosnabjenie').fadeIn('fast');  
      }
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
    
    $('#chem-select').change(function(){
      if($(this).val() == 'js-dobavki'){ 
        $('.js-section').fadeOut('fast');
        $('.section-dobavki').fadeIn('fast');  
      }
    });
    $('#chem-select').change(function(){
      if($(this).val() == 'js-remont'){ 
        $('.js-section').fadeOut('fast');
        $('.section-remont').fadeIn('fast');  
      }
    });
    $('#chem-select').change(function(){
      if($(this).val() == 'js-promy'){ 
        $('.js-section').fadeOut('fast');
        $('.section-promy').fadeIn('fast');  
      }
    });
    $('#chem-select').change(function(){
      if($(this).val() == 'js-hydro'){ 
        $('.js-section').fadeOut('fast');
        $('.section-hydro').fadeIn('fast');  
      }
    });
    $('#chem-select').change(function(){
      if($(this).val() == 'js-klei'){ 
        $('.js-section').fadeOut('fast');
        $('.section-klei').fadeIn('fast');  
      }
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

$(window).load(function() {
    
    
    //
    if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) 
    {
        $('.loader_inner').fadeOut('500');
    }
    else
    {
        $('.loader_inner').addClass('animated flipOutY');
    }
    
    
    $('.loader').css('-webkit-animation', 'loader 1s linear');
    $('.loader').css('animation', 'loader 1s linear');
    
    $("html, body").animate({ scrollTop: 0 }, 1200);
    
    setTimeout(
        function() 
            {
                $(".loader-right").addClass('animated slideOutRight');
                $(".loader-left").addClass('animated slideOutLeft'); 
            }, 800);
            
});

