module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ['../javascripts/**/*.js'], //location of javascript files
      options: {
        browser: true,
        predef: ["document", "console", "$" ], //allows for predefined things not found in js
        esnext: true, //allows for ES6 
        globalstrict: true,
      }
    },
    watch: { //automatically watch for changes
      javascripts: {
        files: ['../javascripts/**/*.js'], 
        tasks: ['jshint']
      }
    }
  });



  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'watch']);
};