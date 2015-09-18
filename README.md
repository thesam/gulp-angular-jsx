# gulp-angular-jsx
Gulp plugin for [angular-jsx](https://www.github.com/thesam/angular-jsx).

## Example 1
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
## Example 2
### Input
```
angular.module("foo").directive("bar",
    function() {
        return {
            template: (
                <div>
                    <h1>Multi-line example</h1>
                    <div class="bar">This is a bit more <em>advanced</em>.</div>
                </div>
            )
        }
    }
);
```
### Output
```
angular.module("foo").directive("bar",
    function() {
        return {
            template: (
                "<div>\n    <h1>Multi-line example</h1>\n    <div class=\"bar\">This is a bit more <em>advanced</em>.</div>\n</div>"
            )
        }
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
