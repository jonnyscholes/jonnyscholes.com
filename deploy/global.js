window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
							  window.webkitRequestAnimationFrame || window.oRequestAnimationFrame;



(function($){
//	var picIndex = getRandomInRange(1,10);
//
//	var bgPath = 'http://jonnyscholes.com/images/'+picIndex+'.jpg',
//		rawStage = $('#stage')[0],
//		stageCtx = rawStage.getContext('2d');
//
//	$('#stage').height($(window).height()).width($(window).width());
//
//
//	var bgData = new Image();
//	bgData.src = bgPath;
//
//	bgData.onload = function(){
//		stageCtx.drawImage(bgData, 0, 0, rawStage.width, rawStage.height);
//		start();
//	};
//
//	function start(){
//		$('body').mousemove(function (e){
//			new Mole(stageCtx, e.pageX, e.pageY);
//		});
//	}
//
//	var Mole = function (stage, x, y){
//		var size = getRandomInRange(1,1);
//		stage.drawImage(rawStage, 0, y, rawStage.width, size, 0, getRandomInRange(0,rawStage.height), rawStage.width, size);
//	};
//	var videoInput = document.getElementById('inputVideo');
//	var canvasInput = document.getElementById('inputCanvas');
//	var htracker = new headtrackr.Tracker(
//		{
//			ui: false
//		}
//	);
//
//	htracker.init(videoInput, canvasInput);
//	htracker.start();
//
//	var $strips = $('.strip .bg');
//
//	var wy = $('#inputVideo').height();
//	var wx = $('#inputVideo').width();
//
//	document.addEventListener('facetrackingEvent',
//		function (event) {
//			var yp = (event.y / wy  * 100);
//			var xp = (event.x / wx  * 100);
//			$strips.css('transform', 'translateY('+yp*0.3+'%) translateX(-'+xp*0.3+'%)');
//		}
//	);
//
//	document.addEventListener('headtrackingEvent',
//		function (event) {
//			var scale = 1 - event.z / 100;
//			$container.css('transform', 'translateY(-50%) translateX(-50%) scale('+scale+')');
//		}
//	);
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
			bgData.src = 'http://localhost:9100'+canvasImages[i];

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

//	var $navItems = $('.primary-navigation a');
//	var $contentZones = $('.page-contain .page-content');
//	var $closeLinks = $contentZones.find('.close');
//
//	$navItems.click(function(e){
//		$contentZones.removeClass('active').addClass('inactive');
//		$contentZones.eq($(this).parent().index()).addClass('active').removeClass('inactive');
//		e.preventDefault();
//	});
//
//	$closeLinks.click(function(e){
//		$contentZones.removeClass('active').addClass('inactive');
//		e.preventDefault();
//	});


//	function startRender(ctx, canvas){
//		$('body').mousemove(function (e){
//			mole(ctx, canvas);
//		});
//
//		function tick(timestamp) {
//			currentFrame++;
//			if(currentFrame === ratelimit) {
//				render();
//				currentFrame = 0
//			}
//			window.requestAnimationFrame(tick);
//		}
//	}
//
//	function mole(stage, can){
//		var size = getRandomInRange(1,1);
//		var y = getRandomInRange(1,can.height);
//		stage.drawImage(can, 0, y, can.width, size, 0, getRandomInRange(0,can.height), can.width, size);
//
//		window.requestAnimationFrame(function(){ mole(stage, can); });
//	}
//
//	window.requestAnimationFrame(tick);

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