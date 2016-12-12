module.exports = function (grunt) {

    //Include source files into HTML files automatically (js, css , .. other files ) wich haves the section  <!-- include --> .. <!-- /include -->
    grunt.config('includeSource', {
        options: {
            basePath: 'app'
        },
        dev: {
            files: [{
                expand: true,
                cwd: '<%= yeoman.app %>',
                src: ['**/*.html', '!prototype/**'],  //ignore /prototype directory
                dest: '<%= yeoman.tmp.root %>'
            }]
        },
        dist: {
            files: [{
                expand: true,
                cwd: '<%= yeoman.app %>',
                src: ['**/*.html', '!prototype/**'],
                dest: '<%= yeoman.dist %>'
            }]
        }
    });

};

