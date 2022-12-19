const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
// ----------------------------------------------

gulp.task("sass", async function () {
    return gulp.src(['./src/bootstrap-table.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
});
