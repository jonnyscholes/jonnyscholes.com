if (!navigator.getUserMedia)
	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

if (navigator.getUserMedia){
	navigator.getUserMedia({audio:true}, success, function(e) {
		alert('Error capturing audio.');
	});
} else {
	alert('getUserMedia not supported in this browser.');
}

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

var audioContext = window.AudioContext || window.webkitAudioContext;

var actx = new audioContext();
var analyser = actx.createAnalyser();
var distortion = actx.createWaveShaper();
var gainNode = actx.createGain();
var biquadFilter = actx.createBiquadFilter();

var stage = document.getElementsByClassName('container')[0];

analyser.fftSize = 64;

navigator.getUserMedia({ audio: true }, success, function(err) { console.log('The following gUM error occured: ' + err); });

function success(stream) {
	window.source = actx.createMediaStreamSource(stream); // @hack: store globally to work around FF bug #934512
	var dataArray = new Uint8Array(analyser.frequencyBinCount);

	source.connect(analyser);
	analyser.connect(distortion);
	distortion.connect(biquadFilter);
	biquadFilter.connect(gainNode);
	gainNode.connect(actx.destination); // connecting the different audio graph nodes together

	(function animloop(){
		analyser.getByteFrequencyData(dataArray);

		requestAnimFrame(animloop);
		render(getAverageVolume(dataArray));
	})();
}

function render(volume) {
	stage.setAttribute('style', 'width: ' + volume*10 +'px; height: ' + volume*10 +'px;');
}


function getAverageVolume(array) {
	var values = 0;

	for (var i = 0; i < array.length; i++) {
		values += array[i];
	}

	return values / array.length;
}
