$(document).ready(function(){

	var menuBtn = $('#open-nav');
	var menu = $('#nav-content');

	$(menuBtn).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
	$(window).resize(function() {
		var wind = $(window).width();
		if(wind > 480 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});


});