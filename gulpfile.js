var gulp = require('gulp');

gulp.task('html', function () {
    return gulp.src('index.html')
        .pipe(gulp.dest('build'));
});

gulp.task('css', function () {
    return gulp.src('styles/style.css')
        .pipe(gulp.dest('build/styles'));
});

gulp.task('images', function () {
    return gulp.src('images/*/*')
        .pipe(gulp.dest('build/images'));
});

gulp.task('font', function () {
    return gulp.src('fonts/*')
        .pipe(gulp.dest('build/fonts'));
});