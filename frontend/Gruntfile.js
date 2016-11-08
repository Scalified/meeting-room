'use strict';

module.exports = function(grunt) {

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths for the application
    var appConfig = {
        app: require('./bower.json').appPath || 'app',
        tmp: {js: '.tmp/js', root: '.tmp'},
        dist: 'dist'
    };

    // Define the configuration for all the tasks
    // can be used like this: grunt.config.get('testMode')
    grunt.initConfig({
        // Project settings
        yeoman: appConfig
    });

    grunt.loadTasks('grunt-tasks');

    grunt.registerTask('build',[
        /*'useminPrepare',
        'concat',
        'cssmin',
        'uglify',
        'filerev',
        'usemin'*/

        'useminPrepare',
        'concat:generated',
        'cssmin:generated',
        'uglify:generated',
        'filerev',
        'usemin'
    ]);

    grunt.registerTask('default',['build'], function () {
        grunt.log.write('default task ...');
    });
};