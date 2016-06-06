module.exports = function(grunt) {

    grunt.config('copy', {
        dev : {
            files : [
            // includes files within path and its sub-directories
            {
                expand : true,
                cwd : 'src/client/',
                src : ['**', '!**/*.less', '!**/*.scss'],
                dest : '<%= buildConf.dev.dest %>/'
            }]
        }
    });

};
