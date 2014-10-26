PanoJS.MSG_BEYOND_MIN_ZOOM = null;
PanoJS.MSG_BEYOND_MAX_ZOOM = null;
var viewer = null;

function createViewer( viewer, dom_id, url, prefix, w, h ) {
    if (viewer) return;
  
    var MY_URL      = url;
    var MY_PREFIX   = prefix;
    var MY_TILESIZE = 256;
    var MY_WIDTH    = w;
    var MY_HEIGHT   = h;
    var myPyramid = new ImgcnvPyramid( MY_WIDTH, MY_HEIGHT, MY_TILESIZE);
    
    var myProvider = new PanoJS.TileUrlProvider('','','');
    myProvider.assembleUrl = function(xIndex, yIndex, zoom) {
        return MY_URL + '/' + MY_PREFIX + myPyramid.tile_filename( zoom, xIndex, yIndex );
    }    
    
    viewer = new PanoJS(dom_id, {
        tileUrlProvider : myProvider,
        tileSize        : myPyramid.tilesize,
        maxZoom         : myPyramid.getMaxLevel(),
        imageWidth      : myPyramid.width,
        imageHeight     : myPyramid.height,
        blankTile       : 'images/blank.gif',
        loadingTile     : 'images/progress.gif'
    });

    Ext.EventManager.addListener( window, 'resize', callback(viewer, viewer.resize) );
    viewer.init();
}

createViewer( viewer, 'viewer', 'images/', 'unseen_', 3730, 3730 );