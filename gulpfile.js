'use strict'

const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

gulp.task('browser-sync', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: './app'
    }
  });

  gulp.watch('./app/*.html', reload);
  gulp.watch('./scss/**/*.scss', ['css']);
  gulp.watch('./js/**/*.js', reload);
});

gulp.task('css', function() {
  return gulp.src('./app/scss/**/*.scss')
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(prefix())
  .pipe(gulp.dest('./app/css'))
  .pipe(browserSync.stream())
});

gulp.task('default', ['browser-sync', 'css']);