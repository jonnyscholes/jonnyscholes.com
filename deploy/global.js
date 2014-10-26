window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
							  window.webkitRequestAnimationFrame || window.oRequestAnimationFrame;


(function($){
	var app = app || {};
	var $movers = $('.paralax .item');
	var ratelimit = 30;
	var currentFrame = ratelimit-1;
	var isAnimationMode = true;

	app.pictureMoles = function() {
		var canvasImages = ['/images/stripe1.jpg','/images/stripe2.jpg','/images/stripe3.jpg','/images/stripe4.jpg','/images/stripe5.jpg'];

		var $canvasHolders = $('.top li');
		$canvasHolders.each(function(i, elm){
			var $currentCanvas = $(elm).find('canvas');
			var currentCtx = $currentCanvas[0].getContext('2d');

			var bgData = new Image();
			bgData.src = 'http://jonnyscholes.com'+canvasImages[i];

			fitToContainer($currentCanvas[0]);

			bgData.onload = function(){
				currentCtx.drawImage(bgData, 0, 0, $currentCanvas[0].width, $currentCanvas[0].height);
				startRender(currentCtx, $currentCanvas[0]);
			};
		});

		function startRender(ctx, canvas){
			$('body').mousemove(function (e){
				mole(ctx, canvas);
			});
		}

		function mole(stage, can){
			var size = getRandomInRange(1,1);
			var y = getRandomInRange(1,can.height);
			stage.drawImage(can, 0, y, can.width, size, 0, getRandomInRange(0,can.height), can.width, size);
		}
	};

	app.morphingMass = function() {
		var $entryLink = $('.entry');

		$entryLink.click(function(e){
			$('.page, .entry').toggleClass('is-active');
			$('.paralax').toggleClass('is-exploded');
			isAnimationMode = !isAnimationMode;
			e.preventDefault();
		});

		window.requestAnimationFrame(tick);

		function tick(timestamp) {
			currentFrame++;
			if(currentFrame === ratelimit && isAnimationMode) {
				render();
				currentFrame = 0;
			} else if(currentFrame === ratelimit) {
				currentFrame = 0;
			}
			window.requestAnimationFrame(tick);
		}

		function render() {
			$movers.eq(0).css('transform', 'translateY(' + getRandomInRange(1, 5) + '%) translateX(' + getRandomInRange(1, 5) + '%)');
			$movers.eq(1).css('transform', 'translateY(' + getRandomInRange(1, 5) + '%) translateX(' + getRandomInRange(1, 5) + '%)');
			$movers.eq(2).css('transform', 'translateY(' + getRandomInRange(1, 5) + '%) translateX(' + getRandomInRange(1, 5) + '%)');
			$movers.eq(3).css('transform', 'translateY(' + getRandomInRange(1, 5) + '%) translateX(' + getRandomInRange(1, 5) + '%)');
			$movers.eq(4).css('transform', 'translateY(' + getRandomInRange(1, 5) + '%) translateX(' + getRandomInRange(1, 5) + '%)');
			$movers.eq(5).css('transform', 'translateY(' + getRandomInRange(1, 5) + '%) translateX(' + getRandomInRange(1, 5) + '%)');
			$movers.eq(6).css('transform', 'translateY(' + getRandomInRange(1, 5) + '%) translateX(' + getRandomInRange(1, 5) + '%)');
			$movers.eq(7).css('transform', 'translateY(' + getRandomInRange(1, 5) + '%) translateX(' + getRandomInRange(1, 5) + '%)');
			$movers.eq(8).css('transform', 'translateY(' + getRandomInRange(1, 5) + '%) translateX(' + getRandomInRange(1, 5) + '%)');
		}
	};


	app.pictureMoles();
	app.morphingMass();

}(jQuery));



function getRandomInRange(from, to) {
	return (Math.random() * (to - from) + from).toFixed(0) * 1;
}

function fitToContainer(canvas){
	canvas.style.width='100%';
	canvas.style.height='100%';
	canvas.width  = canvas.offsetWidth;
	canvas.height = canvas.offsetHeight;
}