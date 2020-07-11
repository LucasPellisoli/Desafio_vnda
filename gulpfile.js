"use strict";
var gulp = require("gulp");
var sass = require("gulp-sass");
var cssnano = require("gulp-cssnano");
var sourcemaps = require("gulp-sourcemaps");
var sourcemaps = require("gulp-sourcemaps");
var concat = require("gulp-concat");
const babel = require("gulp-babel");
const minify = require("gulp-minify");

sass.compiler = require("node-sass");

gulp.task("sass", function () {
  return gulp
    .src("./src/styles/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(cssnano())
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./dist/css"));
});

gulp.task("script", function () {
  return gulp
    .src("./src/scripts/**/*.js")
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(minify())
    .pipe(gulp.dest("./dist/js"));
});

gulp.task("sass:watch", function () {
  gulp.watch("./src/styles/**/*.scss", gulp.parallel(["sass"]));
});

gulp.task("script:watch", function () {
  gulp.watch("./src/scripts/**/*.js", gulp.parallel(["script"]));
});

gulp.task("dev", gulp.parallel(["sass:watch", "script:watch"]));
