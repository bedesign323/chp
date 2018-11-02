Drupal.behaviors.init = {
	attach: function (context, settings) {
		(function ($) {
 			
 			
			// MENU TWEAKS!!!
 			//===================================
 			$('.menu-toggle').click(function(){
				$('#header-container #menu').slideToggle(300);
				return false;
			});

			var topTrigger = $('#back-to-top');

			topTrigger.click(function(){
			    $("html, body").animate({ scrollTop: 0 }, 800);
			    return false;
			});

			$(window).scroll(function(event) {
				var top = $(window).scrollTop();

				if(top > 200){
					topTrigger.addClass('active');
				}else{
					topTrigger.removeClass('active');
				}
			});


 			// MASONRY!!!
 			// ===================================
			var masonry_container = $('.image-grid');
			
			masonry_container.imagesLoaded(function(){
				masonry_container.masonry({
				  itemSelector: 'li'
				});
			});


			// SKROLR!!!
 			//===================================
			// if($(window).width() > 500){
	 		//		var s = skrollr.init({
	 		// 		forceHeight: false,
	 		// 	});
	 		// }


		}(jQuery));
	}	
}


