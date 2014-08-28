Drupal.behaviors.init = {
	attach: function (context, settings) {
		(function ($) {
 			
 			
			// MENU TWEAKS!!!
 			//===================================
 			$('.menu-toggle').click(function(){
				$('#header-container #menu').slideToggle(300);
				return false;
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


