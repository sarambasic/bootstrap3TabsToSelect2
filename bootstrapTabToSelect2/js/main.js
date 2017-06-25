$(document).ready(function() {

	$('.js-select-dd').select2().on('change', function () {
		$('.js-bootstarp-tabs li a').eq($(this).val()).tab('show');
	});

	$('.js-bootstarp-tabs li a').on('click', function() {
		$this = $(this);
		dataSelectVal = $this.attr('data-select-value');

		console.log(dataSelectVal);

		$('select').val(dataSelectVal).trigger('change');
	});

});
