
<div id="header-container">
	<div id="header">
		<div id="logo"><a href="/">Christian Horan Photography</a></div>
		
		<div id="main-nav">
			<div class="menu-toggle icon-list"></div>

			<div id="menu">
				<?php print render($page['nav_main']); ?>
				
			</div>
		</div> 

		
	</div>
</div>

<div id="main-container">
	<div class="main">
		<?php if(isset($messages)): ?>
			<div id="messages"><?php echo $messages; ?></div>
		<?php endif; ?>
	
		<div id="content">
			<?php print render($page['content']); ?>
		</div>
	</div>
</div>

<div id="footer-container">
	<div  id="footer">
		<div class="inner">
			
			<div class="footer-left">
				<div class="logo-big">
					<img src="/sites/all/themes/base/images/CHP-logo-light.svg" alt="Christian Horan Photography logo light">
				</div>
				<?php print render($page['footer_left']); ?>
			</div>
			<div class="footer-main"><?php print render($page['footer_main']); ?></div>
			<div class="footer-right"><?php print render($page['footer_right']); ?></div>
		</div>
		<div class="copy">
			&copy; <?php echo date('Y') . " Christian Horan Photography, Inc." ?> &mdash; Site Design: <a href="http://thronecreative.com" target="_blank">THRONE CREATIVE</a>
		</div>
	</div>
</div>

<div id="back-to-top"><div><span class="icon-arrow-up"></span></div></div>