var gulp = require('gulp');
var ts = require('gulp-typescript');
var runSequence = require('run-sequence');
var gulpCopy = require('gulp-copy');
var rename = require("gulp-rename");
var tsProject = ts.createProject('tsconfig.json');
var watch = require('gulp-watch');
var del = require('del');

/* gulp.task('default', function (callback) {
    return runSequence('clean', 'ts', 'copy-files', function (error) {
        if (error) {
            console.error(error);
        }
        callback(error);
    });
}); */

gulp.task('clean', function (callback) {
    return del([
        'dist/'
    ]);
})

gulp.task('ts', function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('dist'));
});

gulp.task('win', function() {
    return gulp.src('./dist/main.js')
    .pipe(gulp.dest('./main.js'));
});

gulp.task('copy-files', function () {
    return gulp.src('src/**/*')
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function (callback) {
    return watch('src/**/*.ts', function () {
        runSequence('ts', function (error) {
            if (error) {
                console.error(error);
            }
            callback(error);
        });
    });
});

gulp.task('main', gulp.series('clean', 'ts', 'copy-files', 'win', function (done) {
    done();
}));