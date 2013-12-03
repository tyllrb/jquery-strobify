(function ($) {
	var interval = null;
	var pointer = 0;
	var originalBackground = null;

	$.fn.strobify = function (state, options) {

		var settings = {
			colors: ['#ffffff', '#000000'],
			speed: 100
		};

		if (options !== null)
			settings = $.extend(settings, options);

		dom = this;

		if (state == 'on') {
			originalBackground = dom.css ('background');

			interval = setInterval (function () {
				pointer = (pointer >= (settings.colors.length - 1)) ? 0 : pointer + 1;
				dom.css ('background', settings.colors [pointer]);
			}, settings.speed);
		}

		else if (state == 'off') {
			clearInterval (interval);
			dom.css ('background', originalBackground);
		}
	};
}(jQuery));
