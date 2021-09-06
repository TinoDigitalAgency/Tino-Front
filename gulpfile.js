let gulp = require('gulp');
let sass = require('gulp-sass');
let browserSync = require('browser-sync').create();
let autoprefixer = require('gulp-autoprefixer');
let plumber = require('gulp-plumber');
let cssmin = require('gulp-cssmin');
let rigger = require('gulp-rigger');
let jsmin = require('gulp-uglify');
let babel = require('gulp-babel');
let concat = require('gulp-concat');
let order = require("gulp-order");

gulp.task('online', ['sass', 'svg|png|jpg' , 'html', 'jsmin'], function () {

    browserSync.init({
        port:8080,
        open:true,
        notify:false,
        tunnel:false,
        proxy:'localhost/Tino-Front/dest'
    });

    gulp.watch('build/assets/css/*.+(scss|css)', ['sass']);
    gulp.watch('build/assets/images/*.+(svg|png|jpg)', ['svg|png|jpg']);
    gulp.watch('build/html/**/*.html', ['html']);
    gulp.watch('build/assets/js/*.js', ['jsmin']);
});

gulp.task('sass',function () {
    gulp.src('build/assets/css/*.+(scss|css)')
        .pipe(plumber())
        .pipe(order([
            '**/*'
        ]))
        .pipe(concat('main.min.css'))
        .pipe(sass({outputStyle:'compressed'}))
        .pipe(sass({errLogToConsole:true}))
        .pipe(autoprefixer({
            browsers:['last 50 versions'],
            cascade:false
        }))
        .pipe(cssmin())
        .pipe(gulp.dest('dest/assets/css/'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('jsmin', function () {
    gulp.src('build/assets/js/*.js')
        .pipe(order([
            '**/*'
        ]))
        .pipe(concat('main.min.js'))
        // .pipe(babel({
        //     presets: ['@babel/env']
        // }))
        .pipe(jsmin())
        .pipe(gulp.dest('dest/assets/js/'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('svg|png|jpg', function () {
   gulp.src('build/assets/images/*')
       .pipe(gulp.dest('dest/assets/images/'))
       .pipe(browserSync.reload({stream:true}));
});

gulp.task('html',function () {
    gulp.src('build/html/pages/*.html')
        .pipe(rigger())
        .pipe(gulp.dest('dest/'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('default',['online']);