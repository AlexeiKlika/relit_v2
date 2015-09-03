var gulp = require('gulp'),
	concat = require('gulp-concat'),
	fileinclude = require('gulp-file-include'),
	del = require('del'),
	watch = require('gulp-watch');


/*
gulp.task('clean', function(){
	del(['build/*']);
	console.log('finished cleaning build directory');
});

*/

gulp.task('getcss', function() {
	return gulp.src([
		'./css/bootstrap/css/bootstrap.min.css',
		'./css/styles.css'])
	.pipe(concat('styles.css'))
	.pipe(gulp.dest('./relittraining.com/css/'));
});

gulp.task('getjs', function() {
	return gulp.src([
		'./css/bootstrap/js/bootstrap.min.js',
		'./js/script.js'])
	.pipe(concat('script.js'))
	.pipe(gulp.dest('./relittraining.com/js/'));
}); 



gulp.task('buildpages', function() {
  gulp.src([
  	'index.html',
  	'details.html',
  	'testimonials.html',
  	'resources.html',
  	'parish-review.html',
  	'michael-dopp.html'
  	])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./relittraining.com/'));
});

gulp.task('default', ['getcss', 'getjs', 'buildpages']);