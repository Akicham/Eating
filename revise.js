$(function() {
	$('.header-right-menu a').click(function(){
   
   var href= $(this).attr("href");

   // var target = $(href == "#" || href == "" ? 'html' : href);
   
   // var position = target.offset().top;

   $('body,html').animate({scrollTop:$(href).offset().top}, 400);
    return false;
  });


 	$('.eating-item').hover(

	    function(){
	    $(this).find('.eating-text').fadeIn();

	    },

	    function(){
	    $(this).find('.eating-text').fadeOut();

    });

	$('.property-item').hover(function(){
	 if($(this).hasClass('active')){
	  $(this).removeClass('active');
	  $(this).find('.property-answer').fadeOut();

	 }else{

	  $(this).addClass('active').find('.property-answer').fadeIn();
	 }

	});




});