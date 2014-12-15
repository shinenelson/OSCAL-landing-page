
module.exports = function (grunt) {
  grunt.initConfig({
    // Watch task config
    watch: {
      sass: {
        files: "app/sass/*.sass",
        tasks: ['sass']
      }
    },
    // SASS task config
    sass: {
      dev: {
        files: {
          // destination         // source file
          "dist/css/styles.css" : "app/sass/base.sass"
        }
      }
    },
    browserSync: {
      default_options: {
        bsFiles: {
          src: [
          "dist/css/*.css",
          "*.html"
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: "./"
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  // Launch BrowserSync + watch task
  grunt.registerTask('default', ['browserSync', 'watch']);
};
