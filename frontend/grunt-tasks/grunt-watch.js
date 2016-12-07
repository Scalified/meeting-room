module.exports = function (grunt) {

    var targets = {
        bower: {
            files: ['bower.json'],
            tasks: ['wiredep']
        },
        gruntfile: {
            files: ['Gruntfile.js']
        },
        includeSource: {
            files: [
                //'<%= yeoman.app %>/**/*.html',
                '<%= yeoman.app %>/**/{,*/}*.html',
                '<%= yeoman.app %>/**/{,*/}*.js'
            ],
            tasks: ['includeSource:dev', 'copy:js']
        },
        livereload: {
            options: {
                livereload: '<%= connect.options.livereload %>'
            },
            files: [
                '<%= yeoman.app %>/**/{,*/}*.html',
                '<%= yeoman.app %>/**/{,*/}*.js',
                '<%= yeoman.app %>/styles/{,*/}*.{css,scss}',
                '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
            ],
            tasks: ['copy:styles']
        }
    };

    // Watches files for changes and runs tasks based on the changed files
    grunt.config('watch', targets);

};

