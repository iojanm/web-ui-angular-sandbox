module.exports = function(grunt) {
    
    grunt.config('less', {
        dev : {
            options : {
                banner : '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */',
                paths : ['**/*']
            },
            files : [{
                expand : true,
                cwd : 'src/client',
                src : ['**/*/*.less', '!**/*/_*.less'],
                dest : '<%= buildConf.dev.dest %>/',
                ext : '.css',
                rename: function(destBase, destPath) {
                    return destBase+'/'+destPath.replace('.css', '.less.css');
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
