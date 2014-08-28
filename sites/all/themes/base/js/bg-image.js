Drupal.behaviors.bg_image = {
	attach: function (context, settings) {
		(function ($) {
 			
 			var images = Drupal.settings.bg_image;

 			$.backstretch(images);

 			//, {duration: 5000, fade: 1000}

		}(jQuery));
	}	
}