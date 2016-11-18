module.exports = function (grunt) {

    //grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.config('imagemin', {
        dist: {
            files: [{
                expand: true,
                cwd: '<%= yeoman.app %>/images',
                src: '{,*/}*.{png,jpg,jpeg,gif}',
                dest: '<%= yeoman.dist %>/images'
            }]
        }
    });

};

