var gulp = require('gulp');
var del = require('del');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

var paths = {
  src: 'src/theming/prebuild-themes/*.scss',
  dist: 'dist/themes/'
};

gulp.task('clean-themes', function() {
  return del([paths.dist]); 
});

gulp.task('build-themes', function() {
  return gulp.src(paths.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('build-pure-themes', gulp.series('clean-themes', 'build-themes'));
