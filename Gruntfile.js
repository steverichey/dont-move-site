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
                'temp/index.html': 'src/index.html'
            }
        }
    },
    cssmin: {
        dist: {
            files: [{
                src: ['src/css/*.css'],
                dest: 'temp/min.css'
            }]
        }
    },
    iconizr: {
        options: {
            // options
        },
        dist: {
            src: ['src/img'],
            dest: 'temp'
        },
    },
    embed: {
        options: {
            threshold: '10KB'
        },
        dist: {
            files: {
                'dist/index.html': 'temp/index.html'
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
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-embed');
  grunt.loadNpmTasks('grunt-html-angular-validate');
  grunt.loadNpmTasks('grunt-iconizr');

  // Specify tasks
  grunt.registerTask('default', ['jshint', 'csslint', 'htmlangular', 'concat', 'browserify', 'uglify', 'htmlmin', 'cssmin', 'iconizr', 'embed', 'clean']);
  grunt.registerTask('noclean', ['jshint', 'csslint', 'htmlangular', 'concat', 'browserify', 'uglify', 'htmlmin', 'cssmin', 'iconizr', 'embed']);
  grunt.registerTask('wipe', ['clean']);
  grunt.registerTask('watch', ['watch']);
};