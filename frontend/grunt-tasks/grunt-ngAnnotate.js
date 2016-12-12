module.exports = function (grunt) {

    // ng-annotate tries to make the code safe for minification automatically
    // by using the Angular long form for dependency injection.
    grunt.config('ngAnnotate', {
        dist: {
            files: [{
                expand: true,
                cwd: '.tmp/concat/scripts',
                src: '*.js',
                dest: '.tmp/concat/scripts'
            }]
        }
    });
};

