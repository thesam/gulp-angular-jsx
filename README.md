# gulp-angular-jsx
Gulp plugin for [angular-jsx](https://www.github.com/thesam/angular-jsx).

Based on the gulpPrefixer example plugin.
## Installation
```
npm install gulp-angular-jsx
```
## Usage
```
var gulp = require('gulp');
var angularjsx = require('gulp-angular-jsx')

gulp.task('default', function () {
    return gulp.src('js/*.js')
        .pipe(angularjsx())
        .pipe(gulp.dest('outputdir'))
});
```
