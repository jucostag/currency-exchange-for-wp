var gulp = require("gulp");
var embedTemplates = require("gulp-angular-embed-templates");
var jshint = require("gulp-jshint");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var rename = require("gulp-rename");
var sass = require("gulp-ruby-sass");
var maps = require("gulp-sourcemaps");
var src = {
  scripts: ["assets/scripts/app.js", "assets/scripts/currenciesApi.js", "assets/scripts/yahooFinanceApi.js", "assets/scripts/ceCalculator.js"],
  sass: "assets/sass/*.s*ss"
};

gulp.task("css", function () {
  return sass(src.sass, {
    style: "compressed",
    sourcemap: true })
    .pipe(rename({
      basename : "currencyExchange",
      extname : ".min.css"
    }))
    .pipe(maps.write("./"))
    .pipe(gulp.dest("./"));
  }
);

gulp.task("js", function() {
  gulp.src(src.scripts)
  .pipe(jshint())
  .pipe(jshint.reporter("default"))
  .pipe(concat("currencyExchange.min.js"))
  .pipe(uglify())
  .pipe(embedTemplates({sourceType:"html"}))
  .pipe(gulp.dest("./"));
});

gulp.task("watch",function() {
  gulp.watch(src.sass, ["css"]);
  gulp.watch(src.scripts, ["js"]);
});

gulp.task("default", ["css", "js", "watch"]);