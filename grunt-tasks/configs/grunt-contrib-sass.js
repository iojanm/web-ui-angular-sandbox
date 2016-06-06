module.exports = function(grunt) {
    
    grunt.config('sass', {
        dev : {
            options : {
                
            },                
            files : [{
                expand : true,
                cwd : 'src/client',
                src : ['**/*/*.scss', '!**/*/_*.scss'],
                dest : '<%= buildConf.dev.dest %>',
                ext : '.css',
                rename: function(destBase, destPath) {
                    return destBase+'/'+destPath.replace('.css', '.scss.css');
                }
            }]
        }

        /* production: {
         options: {
         paths: ['assets/css'],
         plugins: [
         new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]}),
         new (require('less-plugin-clean-css'))(cleanCssOptions)
         ],
         modifyVars: {
         imgPath: '"http://mycdn.com/path/to/images"',
         bgColor: 'red'
         }
         },
         files: {
         'path/to/result.css': 'path/to/source.less'
         }
         }*/

    });
  
};
