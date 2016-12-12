'use strict';

module.exports = function (grunt) {

    // Automatically load required npm module for Grunt tasks
    require('jit-grunt')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths for the application
    var appConfig = {
        app: require('./bower.json').appPath || 'app',
        tmp: {js: '.tmp/js', root: '.tmp', scripts: '.tmp/scripts'},
        dist: '.dist'
    };

    // Define the configuration for all the tasks
    // can be used like this: grunt.config.get('testMode')
    grunt.initConfig({
        // Project settings
        yeoman: appConfig,

        // Renames files for browser caching purposes
        filerev: {
            dist: {
                src: [
                    '<%= yeoman.dist %>/scripts/{,*/}*.js',
                    '<%= yeoman.dist %>/styles/{,*/}*.css',
                    '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                    '<%= yeoman.dist %>/styles/fonts/*'
                ]
            }
        },

        app: {
            // Application variables
            scripts: [
                "**/*.js"
            ]
        }

    });


    //run all tasks from directory /grunt-tasks
    grunt.loadTasks('grunt-tasks');

    //use this task for developing mode only
    grunt.registerTask('serve', [
        'clean:dev',
        'copy:dev',
        'wiredep',
        'includeSource:dev',
        'connect',
        'watch'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'copy:dev',
        'wiredep',
        'includeSource',
        'imagemin',
        'useminPrepare',
        'concat',   //puts results to .tmp/concat
        'ngAnnotate',
        'copy:dist',
        'cssmin',
        'uglify',
        'filerev',
        'usemin',
        'htmlmin',
        'clean:server'
    ]);

    grunt.registerTask('default', ['build']);
};