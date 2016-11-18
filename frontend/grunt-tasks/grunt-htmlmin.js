module.exports = function (grunt) {

    grunt.config('htmlmin', {
        dist: {
            options: {
                collapseWhitespace: true,
                conservativeCollapse: true,
                collapseBooleanAttributes: false,
                removeCommentsFromCDATA: true
            },
            files: [{
                expand: true,
                cwd: '<%= yeoman.dist %>',
                src: ['**/*.html'],
                dest: '<%= yeoman.dist %>'
            }]
        }
    });

};

