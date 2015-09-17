var through = require('through2');
var gutil = require('gulp-util');
var angularjsx = require("angular-jsx");
var PluginError = gutil.PluginError;

// consts
const PLUGIN_NAME = 'gulp-angular-jsx';

// plugin level function (dealing with files)
function gulpAngularJsx() {

    // creating a stream through which each file will pass
    var stream = through.obj(function(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        if (file.isBuffer()) {
            file.contents = new Buffer(angularjsx.convert(file.contents));
        }

        // make sure the file goes through the next gulp plugin
        this.push(file);

        // tell the stream engine that we are done with this file
        cb();
    });

    // returning the file stream
    return stream;
};

module.exports = gulpAngularJsx;