if (!Number.prototype.getDecimals) {
  Number.prototype.getDecimals = function() {
    var num = this,
      match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    if (!match)
      return 0;
    return Math.max(0, (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0));
  }
}

function getRandomInRange(from, to, fixed) {
  return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
}

(function($){

  var container = $('.container');

  var letterMap = function (string, options){
    var self = this,
      contain = $('<div/>').addClass('contain'),
      mapC = $('<div/>').addClass('map'),
      coverC = $('<canvas/>').addClass('cover'),
      lat = options.lat,
      long = options.long,
      lastPos = 0;

    container.append(contain.append(coverC).append(mapC));

    self.init = function() {
      var mapOptions = {
        center: new google.maps.LatLng(lat, long),
        zoom: 8,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.SATELLITE
      };

      var map = new google.maps.Map(mapC[0], mapOptions);

      $(document).scroll(function(){
        lastPos++;
        if(lastPos % 10 === 0) {
          lat += (Math.floor(Math.random() * 10) + 1) / lat.getDecimals(),
          long += (Math.floor(Math.random() * 10) + 1) / long.getDecimals();

          var center = new google.maps.LatLng(lat, long);
          map.panTo(center);
        }
        return false;
      });

      self.paint();
    };

    self.paint = function(){
      coverC.attr({width:400, height:350});

      var ctx = coverC[0].getContext("2d");

      ctx.font = "Bold 400px 'Helvetica'";
      ctx.fillStyle = 'white';

      var width = ctx.measureText(string).width,
        height = ctx.measureText('M').width;

      contain.width(width).height(height-25);
      mapC.width(width).height(height-10);

      ctx.fillRect(0,0,width+5,height+5);
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillText(string, 0, height-35);

      container.width(container.width() + width);
    };

    self.init();
  };

  function appInit(){
    var tiles = 'herebedragons'.toUpperCase();

    getInitialPos(function(lat, long){
      for(var i = 0; i < tiles.length; i++){
        new letterMap(tiles[i], {lat: lat, long: long});
      }
    });
  }

  function getInitialPos(callback){
    var lat = getRandomInRange(-60, 90, 6),
      long = getRandomInRange(-180, 180, 6);

    var latlng = new google.maps.LatLng(lat, long),
      geocoder = new google.maps.Geocoder();

    geocoder.geocode({'latLng': latlng}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        console.log('Lat, long OK: '+lat+', '+long);
        callback(lat, long);
      } else {
        console.log('Lat, long returned zero results at: '+lat+', '+long);
        getInitialPos(callback);
      }
    });
  }

  google.maps.event.addDomListener(window, 'load', appInit);

})(jQuery)