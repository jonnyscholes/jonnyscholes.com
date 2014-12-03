(function ($) {
	$(document).ready(function () {
		$('#gradient').on('change paste keyup', function () {
			console.log($(this).val());
		});
	});
})(jQuery);