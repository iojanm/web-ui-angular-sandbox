module.exports = function(grunt) {

    grunt.config('clean', {
        css : ['<%= buildConf.dev.dest %>/**/*.css', '<%= buildConf.dev.dest %>/**/*.css.map'],
        all : ['<%= buildConf.dev.dest %>/**']
    });

};
