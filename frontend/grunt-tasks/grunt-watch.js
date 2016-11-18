module.exports = function (grunt) {


    grunt.config('watch', {

        livereload: {
            options: {
                livereload: true
            },
            files: ['<%= yeoman.app %>/**/*']
        },
        src : {
            files: ['<%= yeoman.app %>/**/*'],
            task: ['serve']
        }
    });
};

