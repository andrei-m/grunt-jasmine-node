'use strict';

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-jasmine-node');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.initConfig({

    clean: {
        all: ['.tmp']
    },

    // Tests for server-side node components
    jasmine_node: {
        specFolders: ["./spec" ],
        projectRoot: "./app",
        // if 'deploy.project' is given, the build is running in TeamCity
        teamcity: !!grunt.option('deploy.project')
     }
  });

  grunt.registerTask('default', [
      'clean',
      'jasmine_node',
      'clean'
  ]);
};

