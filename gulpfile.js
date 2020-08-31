const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const minifycss  = require('gulp-uglifycss');
function style() {

    return gulp.src('./scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(sourcemaps.write({ includeContent: false }))
        .pipe(sourcemaps.init({ loadMaps: false }))
        .pipe(sourcemaps.write('.'))
        .pipe(browserSync.reload({ stream: true }))
        .pipe(gulp.dest('./css/'))
      

}

function stylebuild() { 

    return gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer('last 2 versions'))
         .pipe(browserSync.reload({ stream: true }))
         .pipe(minifycss({
                                    //maxLineLen: 80//(length of string to be in one line css)
                                }))
                     .pipe(gulp.dest('./css/'))
         .pipe(gulp.dest('./css/'))

}




function watch() {
    browserSync.init({
        server: {
            baseDir: "./",

        },

    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./*.js/**/*.js').on('change', browserSync.reload);

}

function watchbuild() {
    browserSync.init({
        server: {
            baseDir: "./",

        },

    });
    gulp.watch('./scss/**/*.scss', stylebuild);
    gulp.watch('./*.html').on('change', browserSync.reload);

}
exports.style = style;
exports.watch = watch;
exports.watchbuild = watchbuild;