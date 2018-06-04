var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('scss', function () {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./app/styles/'));
});

gulp.task('pug', function () {
    return gulp.src('./src/index.pug')
        .pipe(pug())
        .pipe(gulp.dest('./app'));
});

gulp.task('build', ['pug', 'scss']);