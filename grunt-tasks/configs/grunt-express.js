module.exports = function(grunt) {
    
    grunt.config('express', {
            localServer: {
                options:
                {
                    port: 8626,
                    bases: './',
                    debug: true,
                    hostname: 'localhost',
                    server: '<%= buildConf.dev.serverPath %>'
                }
            }

            
        });
    
};
