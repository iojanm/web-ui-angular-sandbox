module.exports = function(grunt) {

    grunt.registerTask('serve-dev', [
        'env:dev', 
        'express',
        'watch:dev'
    ]);

};
