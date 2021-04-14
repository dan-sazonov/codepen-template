const gulp = require('gulp');
const {src, dest} = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function css () {
  return src('style.scss').pipe(sass()).pipe(dest('./css')).pipe(browserSync.stream());
}

function reload () {
  return src('./').pipe(browserSync.stream());
}

gulp.task('browser_sync', function () {
  browserSync.init({
    server: {
      baseDir: './'
    },
    port: 3000,
  });
});

gulp.task('watchFiles', function () {
  gulp.watch('style.scss', css);
  gulp.watch('index.html', reload);
  gulp.watch('main.js', reload);
});

gulp.task('default', gulp.parallel(css, 'watchFiles', 'browser_sync'));
