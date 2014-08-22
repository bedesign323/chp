Drupal.behaviors.intro_gallery = {
	attach: function (context, settings) {
		(function ($) {
 			
 			var images = Drupal.settings.intro_images;

 			$.backstretch(images[0]);

 			//, {duration: 5000, fade: 1000}

		}(jQuery));
	}	
}