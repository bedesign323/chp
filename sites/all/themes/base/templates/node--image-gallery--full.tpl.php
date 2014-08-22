<div class="gallery full is-not-thumb">
	<div class="images">
		<?php echo $images; ?>
	</div>
	<div id="controls">
		
		<div class="icon-arrow-left item-last"></div>
		<div class="icon-arrow-right item-next"></div>
		<div class="extras">
			<div class="image-count"></div>
			<div class="thumbs-btn">thumbnails</div>
			<?php if(isset($body)): ?>
				<div class="details-btn">details</div>
			<?php endif; ?>
		</div>
		
	</div>
	
	<?php if(isset($body)): ?>
		<div class="details-holder">
			<div class="overlay"></div>
			<div class="details">
				<div class="close-btn">x</div>
				<h1><?php echo $title; ?></h1>
				<div class="body"><?php echo $body; ?></div>
			</div>
		</div>
	<?php endif; ?>
</div>