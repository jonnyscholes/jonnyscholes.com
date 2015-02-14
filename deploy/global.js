window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
							  window.webkitRequestAnimationFrame || window.oRequestAnimationFrame;


(function($){
	var app = app || {};
	var $movers = $('.paralax .item');
	var ratelimit = 30;
	var currentFrame = ratelimit-1;
	var isAnimationMode = true;

	$(document).ready(function(){
		app.loadPictures(function(images){
			app.pictureMoles(images);
			$('body').removeClass('is-loading').addClass('has-loaded');
		});
		app.morphingMass();
	});

	app.loadPictures = function(callback) {
		var canvasImages = ['/images/stripe1.jpg','/images/stripe2.jpg','/images/stripe3.jpg','/images/stripe4.jpg','/images/stripe5.jpg'];
		var loadedImages = 0;
		var imageArray = [];

		$(canvasImages).each(function(i, imgPath){
			var bgData = new Image();
			bgData.src = 'http://jonnyscholes.com'+imgPath;

			bgData.onload = function(){
				imageArray.push(bgData);
				loadedImages++;

				if(loadedImages === canvasImages.length){
					callback(imageArray);
				}
			};
		});
	};

	app.pictureMoles = function(imageArray) {
		var $canvasHolders = $('.moler--single');

		$canvasHolders.each(function(i, elm){
			var $currentCanvas = $(elm).find('canvas');
			var currentCtx = $currentCanvas[0].getContext('2d');

			fitToContainer($currentCanvas[0], elm);

			var ratio = $currentCanvas[0].width / imageArray[i].width;
			var newHeight = imageArray[i].height * ratio;
			var adjustment = parseInt(($currentCanvas[0].height - newHeight) / 2);

			currentCtx.drawImage(imageArray[i], 0, adjustment, $currentCanvas[0].width, newHeight);
			startRender(currentCtx, $currentCanvas[0]);
		});

		function startRender(ctx, canvas){

			if ($(window).width() >= 1025) {
				// Naieve 'isTabletOrPhone'
				$('body').mousemove(function (e){
					mole(ctx, canvas);
				});
				$(window).scroll(function (e){
					mole(ctx, canvas);
				});
			} else {
				window.requestAnimationFrame(moleTick);
			}

			function moleTick(timestamp) {
				mole(ctx, canvas);
				window.requestAnimationFrame(moleTick);
			}
		}

		function mole(stage, can){
			var size = getRandomInRange(1,1);
			var y = getRandomInRange(1,can.height);
			stage.drawImage(can, 0, y, can.width, size, 0, getRandomInRange(0,can.height), can.width, size);
		}
	};

	app.morphingMass = function() {
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

}(jQuery));



function getRandomInRange(from, to) {
	return (Math.random() * (to - from) + from).toFixed(0) * 1;
}

function fitToContainer(canvas, container){
	canvas.style.width='100%';
	canvas.style.height='100%';
	canvas.width  = $(container).width();
	canvas.height = $(container).height();
}