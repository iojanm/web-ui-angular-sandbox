module.exports = function(grunt) {

    grunt.config('watch', {        
        dev: {
            files: ['<%= buildConf.global.srcFolder %>/**/*.*'],
            tasks: ['build-dev']
        }
    });

    grunt.event.on('watch', function(action, filepath, target) {
        grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });

};
