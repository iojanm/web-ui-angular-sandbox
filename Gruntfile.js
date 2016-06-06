module.exports = function(grunt) {
    
    // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);
    
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        buildConf : grunt.file.readJSON('src/static/buildConf.json')
    });

    grunt.loadTasks('grunt-tasks/');
    grunt.loadTasks('grunt-tasks/configs');    

}; 