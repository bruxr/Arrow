var gulp = require('gulp');
var compass = require('gulp-compass');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(compass({
            css: 'css'
        }))
        /*.pipe(sass({
            errLogToConsole: true,
            includePaths: './sass'
        }))*/
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./css/'));
});

gulp.task('watch', function() {
    gulp.watch('sass/**/*.scss', ['styles']);
});