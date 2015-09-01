var gulp = require('gulp'),
	concat = require('gulp-concat'),
	fileinclude = require('gulp-file-include'),
	del = require('del');

gulp.task('clean', function(){
	del(['build/*']);
});

gulp.task('build-home', function() {
  return gulp.src(['index.html'])
  	.pipe(fileinclude({
  		prefix: '@@',
  		basepath:'@file'
  	})).
  	.pipe(gulp.dest("./build/"));
});

gulp.task('default', ['build-home']);