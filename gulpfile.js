var gulp = require('gulp');
gulp.task('css', () => {
    const postcss = require('gulp-postcss')
    const sourcemaps = require('gulp-sourcemaps')

    return gulp.src('css/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([require('autoprefixer')]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/'))
})

