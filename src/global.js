(function($){
	var picIndex = getRandomInRange(1,10);

	var bgPath = 'http://jonnyscholes.com/images/'+picIndex+'.jpg',
		rawStage = $('#stage')[0],
		stageCtx = rawStage.getContext('2d');

	$('#stage').height($(window).height()).width($(window).width());


	var bgData = new Image();
	bgData.src = bgPath;

	bgData.onload = function(){
		stageCtx.drawImage(bgData, 0, 0, rawStage.width, rawStage.height);
		start();
	};

	function start(){
		$('body').mousemove(function (e){
			new Mole(stageCtx, e.pageX, e.pageY);
		});
	}

	var Mole = function (stage, x, y){
		var size = getRandomInRange(1,1);
		stage.drawImage(rawStage, 0, y, rawStage.width, size, 0, getRandomInRange(0,rawStage.height), rawStage.width, size);
	};

}(jQuery));

function getRandomInRange(from, to) {
	return (Math.random() * (to - from) + from).toFixed(0) * 1;
}