(function ($) {
	$(document).ready(function () {
		var $toFixElms = $('.container');
		var count = $toFixElms.length;

		function checkAndUpdate() {
			var currentFixedSize = 0;
			$toFixElms.each(function (i, el) {
//				if($(el).offset().top <= $(document).scrollTop()) {
				console.log($(document).scrollTop(), $(el).offset().top, currentFixedSize);
//				if(($(el).offset().top + ($(el).height() - ($(el).height()/count) )) <= $(document).scrollTop() + (i * ($(el).height()/count)) ) {

				if($(el).offset().top + ($(el).height() - (currentFixedSize + $(el).data('size'))) <= $(document).scrollTop()) {
					currentFixedSize += $(el).data('size');
					$(el).addClass('has-fixed');
				} else {
					if(currentFixedSize > 0) {
						currentFixedSize -= $(el).data('size');
					}
					$(el).removeClass('has-fixed');
				}
			});
			requestAnimationFrame(checkAndUpdate);
		}

		requestAnimationFrame(checkAndUpdate);
	});
})(jQuery);