$(document).ready(function(){        
        $('.burger-menu').click(function() {
            $(this).toggleClass('burger-active');
            $('.header-navigation').slideToggle('fast');
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
        
});
