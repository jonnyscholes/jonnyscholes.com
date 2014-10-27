/*
Desired structure:

/package.json
/gulpfile.js

/index.jade

/posts ->
    /post1 ->
        /index.jade
        /page.js
        /images
        /page.scss
/global
    /templates
        /default.jade
        /default.jade
    /styles
        /global.scss
    /scripts
        /global.js



/deploy
  /index.html
  /global.js
  /global.css
  /posts ->
    /post1 ->
        /index.html
        /page.js
        /images
        /page.css

 */

var fs = require('fs');

var gulp = require('gulp');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var jade = require('gulp-jade');
var connect = require('gulp-connect');

var src = './src/';
var build = './deploy/';

// Templates
// @todo: add minification option
gulp.task('templates', function() {
  var menuStructure = {};
  var paths = fs.readdirSync(src);
  var folders = getFoldersFrom(paths);

  // This will only handle one level deep ie /posts/post-name or /page/page-name
  folders.forEach(function(firstLevelElm, i) {
    menuStructure[i] = { 'slug': firstLevelElm, 'items': [] };

    var paths = fs.readdirSync(src+'/'+firstLevelElm);
    var folders = getFoldersFrom(paths);

    folders.forEach(function(secondLevelElm) {
      menuStructure[i].items.push(secondLevelElm);
    });
  });

  return gulp.src([src+'**/*.jade', '!'+src+'**/_*.jade'])
    .pipe(jade({
      pretty: true,
      locals: {menu: menuStructure}
    })).on('error', gutil.log)
    .pipe(gulp.dest(build));
});

var autoprefixer = require('gulp-autoprefixer');

// Styles
// @todo: add minification option
gulp.task('styles', function () {
	return gulp.src(src + '**/*.scss')
		.pipe(sass({
			outputStyle: 'expanded',
			errLogToConsole: true,
			sourceComments: 'map',
			sourceMap: 'sass'
		})).on('error', gutil.log)
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest(build));
});


// Scripts
// @todo: add minification option
// @todo: add linting support
gulp.task('scripts', function () {
 return gulp.src(src + '**/*.js')
   .pipe(gulp.dest(build));
});


// Images
gulp.task('images', function () {
	return gulp.src(src + '**/images/**/*')
		.pipe(gulp.dest(build));
});

// Move Misc Files
gulp.task('move', function () {
	return gulp.src(src + 'keybase.txt')
		.pipe(gulp.dest(build));
});


// Static Server
gulp.task('connect', function() {
  connect.server({
    root: build,
    livereload: true,
    port: 9100
  });
});

gulp.task('watchfiles', function () {
  gulp.watch([src + '**/*.scss'], ['styles']);
  gulp.watch([src + '**/*.jade'], ['templates']);
	gulp.watch([src + '**/*.js'], ['scripts']);
	gulp.watch([src + 'images/*'], ['images']);
});

// Build
gulp.task('default', ['watch']);

// Build
gulp.task('build', ['templates', 'images', 'styles', 'scripts', 'move']);

// Watch
gulp.task('watch', ['build', 'connect', 'watchfiles']);


// Helpers
function getFoldersFrom(paths) {
  //@todo: Apparently fs.lstatSync('/the/path').isDirectory() is a thing - use that!!
  return paths.filter(isNotJade).filter(isNotJs).filter(isNotScss).filter(isNotCruft).filter(isNotTxt);
}

function isNotJade(element) {
  return element.indexOf('.jade') === -1;
}

function isNotJs(element) {
  return element.indexOf('.js') === -1;
}

function isNotTxt(element) {
  return element.indexOf('.txt') === -1;
}

function isNotScss(element) {
  return element.indexOf('.scss') === -1;
}

function isNotCruft(element) {
  return element.indexOf('.DS_Store') === -1;
}