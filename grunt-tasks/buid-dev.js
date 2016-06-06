module.exports = function(grunt) {

    grunt.registerTask('build-dev', [
        'env:dev', 
        'clean:all',
        'less:dev', 
        'sass:dev',
        'copy:dev'
    ]);

};
