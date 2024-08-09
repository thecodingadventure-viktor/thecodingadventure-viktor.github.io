const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');

// SCSS fájlok fordítása CSS fájlokká
gulp.task('sass', function () {
  return gulp.src('styles/main.scss') // Az SCSS fájl elérési útvonala
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('style.css')) // A kimeneti CSS fájl neve
    .pipe(gulp.dest('./')); // Kimeneti könyvtár
});

// Figyelés a SCSS fájlok változásaira
gulp.task('watch', function () {
  gulp.watch('styles/**/*.scss', gulp.series('sass'));
});

// Alapértelmezett feladat
gulp.task('default', gulp.series('sass', 'watch'));
