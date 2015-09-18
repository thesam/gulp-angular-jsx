# gulp-angular-jsx
Gulp plugin for [angular-jsx](https://www.github.com/thesam/angular-jsx).

## Example
### Input
```
angular.module("foo").directive("bar",
    function() {
        return {
            template: <div>This is a simple example.</div>
        };
    }
);
```
### Output
```
angular.module("foo").directive("bar",
    function() {
        return {
            template: "<div>This is a simple example.</div>"
        };
    }
);
```
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
