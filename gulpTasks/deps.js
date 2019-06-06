const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('deps', ['deps.css', 'deps.fonts']);

gulp.task('deps.css', () => {
    return gulp.src([
        'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
    ])
        .pipe(concat('deps.min.css'))
        .pipe(gulp.dest('assets/css'))
});

gulp.task('deps.fonts', () => {
    return gulp.src([
        'node_modules/@fortawesome/fontawesome-free/webfonts/*.*',
    ])
        .pipe(gulp.dest('assets/webfonts'))
});
gulp.task('deps.js', () => {
    return gulp.src([
    ])
        .pipe(concat('deps.min.js'))
        .pipe(gulp.dest('assets/js'))
});