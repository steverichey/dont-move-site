module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    // Set up tasks
    
    jshint: {
        all: ['src/js/*.js'],
        jshintrc: '.jshintrc'
    },
    csslint: {
        options: {
            csslintrc: '.csslintrc'
        },
        dist: {
            src: ['src/css/*.css']
        }
    },
    htmlangular: {
        dist: ['src/*.html']
    },
    concat: {
        dist: {
            src: 'src/js/*.js',
            dest: 'temp/concat.js'
        }
    },
    browserify: {
        dist: {
            src: 'temp/concat.js',
            dest: 'temp/browse.js',
        }
    },
    uglify: {
        dist: {
            files: {
                'temp/min.js': 'temp/browse.js'
            }
        }
    },
    htmlmin: {
        dist: {
            options: {
                removeComments: true,
                collapseWhitespace: true
            },
            files: {
                'dist/index.html': 'temp/embed.html'
            }
        }
    },
    imagemin: {
        dist: {
            src: ['src/img/**'],
            dest: 'temp/img/'
        }
    },
    copy: {
        dist: {
            expand: true,
            flatten: true,
            filter: 'isFile',
            src: ['src/img/**'],
            dest: 'temp/img/'
        }
    },
    concat_css: {
        dist: {
            src: ['src/css/*.css'],
            dest: 'temp/concat.css'
        }
    },
    imageEmbed: {
        dist: {
            src: [ "temp/concat.css" ],
            dest: "temp/embed.css",
            options: {
                maxImageSize: 0
            }
        }
    },
    cssmin: {
        dist: {
            files: [{
                src: ['temp/embed.css'],
                dest: 'temp/min.css'
            }]
        }
    },
    processhtml: {
        dist: {
            files: {
                'temp/process.html' : ['src/index.html']
            }
        }
    },
    embed: {
        options: {
            threshold: '200KB'
        },
        dist: {
            files: {
                'temp/embed.html': 'temp/process.html'
            }
        }
    },
    clean: {
        dist: {
            src: ['temp']
        }
    },
    watch: {
        files: 'src/*',
        tasks: ['default']
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-data-uri');
  grunt.loadNpmTasks('grunt-embed');
  grunt.loadNpmTasks('grunt-html-angular-validate');
  grunt.loadNpmTasks("grunt-image-embed");
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-uncss');

  // Specify tasks
  grunt.registerTask('default', [ 'jshint', 'csslint', 'htmlangular', 
                                  'concat', 'browserify', 'uglify', 
                                  'concat_css', 'copy', 'imageEmbed', 'cssmin', 
                                  'processhtml', 'embed', 'htmlmin', 'copy',
                                  'clean']);
  grunt.registerTask('noclean', [ 'jshint', 'csslint', 'htmlangular', 
                                  'concat', 'browserify', 'uglify', 
                                  'concat_css', 'copy', 'imageEmbed', 'cssmin',
                                  'processhtml', 'embed', 'htmlmin', 'copy',
                                  ]);
  grunt.registerTask('wipe', ['clean']);
  grunt.registerTask('watch', ['watch']);
};