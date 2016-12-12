module.exports = function (grunt) {

    var targets = {
        bower: {
            files: ['bower.json'],
            tasks: ['wiredep']
        },
        gruntfile: {
            files: ['Gruntfile.js']
        },
        livereload: {
            options: {
                livereload: true
            },
            files: [
                '<%= yeoman.app %>/**/{,*/}*.html',
                '<%= yeoman.app %>/**/{,*/}*.js',
                '<%= yeoman.app %>/styles/{,*/}*.{css,scss}',
                '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
            ],
            tasks: ['copy:dev', 'includeSource:dev']
        }
    };

    // Watches files for changes and runs tasks based on the changed files
    grunt.config('watch', targets);

};

