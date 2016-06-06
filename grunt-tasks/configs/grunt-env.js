module.exports = function(grunt) {

    grunt.config('env', {

        options : {
            //Shared Options Hash
        },
        dev : {
            NODE_ENV : 'development',
            DEST : 'dist'
        },
        build : {
            NODE_ENV : 'production',
            DEST : 'dist',
            concat : {
                PATH : {
                    'value' : 'node_modules/.bin',
                    'delimiter' : ':'
                }
            }
        }
    });

};
