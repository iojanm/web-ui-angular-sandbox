module.exports = function(grunt) {

    grunt.config('cleanempty', {
        options : {
            force : true,
        },
        dev : {
            options : {
                files : false,
            },
            src : ['<%= buildConf.dev.dest %>/**/*']
        }
    });

};
