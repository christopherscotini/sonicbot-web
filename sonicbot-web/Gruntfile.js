/*global module:false */
module.exports = function(grunt) {
  "use strict";
  var config, tasks;

  config = {

    clean: {
      main: ['static/images/', 'static/js/*.js', 'static/styles/*.css']
    },

    concat: {
      basic: {
        src: ['src/styles/main.css'],
        dest: 'static/styles/main.css',
      },
      extras: {
        src: ['bower_components/bootstrap/dist/css/*.min.css', 'bower_components/components-font-awesome/css/font-awesome.min.css'],
        dest: 'static/styles/concat.css'
      },
    },

    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'static/styles/main.css': 'src/styles/main.scss'
            }
        }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
            cwd: 'static/styles',
            src: ['*.css'],
            dest: 'static/styles',
            ext: '.min.css'
        }]
      }
    },

    uglify: {
        options: {
            compress: {
                //drop_console: true
            }
        },
        main: {
            files: [ 
           {
            'static/js/main.js': [                
                'bower_components/jquery/dist/jquery.min.js',
                // 'bower_components/angular/angular.min.js',
                // 'src/main/webapp/resources/js/angular/app.js', 
                'bower_components/boostrap-sass/assets/javascripts/bootstrap.min.js',
                'bower_components/widgster/widgster.js',
                'bower_components/underscore/underscore.js',
                // 'src/main/webapp/resources/js/angular/prediction/service/games_service.js',
                // 'src/main/webapp/resources/js/angular/prediction/controller/games_controller.js',
                'bower_components/jquery-ui/jquery-ui.js',
                'bower_components/bootstrap/dist/js/bootstrap.min.js',              
                'src/scripts/main.js'
              ]
            }
          ]
        }
    },

    imagemin: {
        main: {
            files: [{
                expand: true,
                cwd: 'src/images',
                src: ['**/*.{png,jpg,gif,ttf}'],
                dest: 'static/images'
            }]
        }
    },
    watch: {
      options: {
        livereload: true
      },
      images: {
        files: ['src/**/*.{png,jpg,gif}'],
        tasks: ['imagemin']
      },
      css: {
        files: ['static/**/*.css']
      },
      js: {
        files: ['src/scripts/**/*.js'],
        tasks: ['uglify']
      },
      
      grunt: {
        files: ['Gruntfile.js']
      }
    }
  };


  tasks = {
    build: ['clean', 'concat', 'sass', 'cssmin', 'imagemin', 'uglify', 'watch']
  };

  grunt.initConfig(config);

  grunt.loadNpmTasks('grunt-concat', 'grunt-contrib-cssmin');

  grunt.registerTask('default', tasks.build);  

  require('load-grunt-tasks')(grunt);

};
