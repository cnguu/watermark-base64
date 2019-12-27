const gulp = require('gulp')
const injectVersion = require('gulp-inject-version')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')

gulp.task('build', function () {
  gulp.src('src/watermark-base64.js')
    .pipe(injectVersion())
    .pipe(gulp.dest('dist/'))
    .pipe(uglify({
      preserveComments: 'license',
    }))
    .pipe(rename('watermark-base64.min.js'))
    .pipe(gulp.dest('dist/'))
})
