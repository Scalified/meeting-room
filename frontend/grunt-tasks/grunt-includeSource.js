module.exports = function (grunt) {

    // include .js scripts to index.html
    grunt.config('includeSource', {
        options: {
            basePath: 'app'
            //baseUrl: '',
            /*templates: {
                html: {
                    js: '<script src="{filePath}"></script>',
                    css: '<link rel="stylesheet" type="text/css" href="{filePath}" />'
                }
            }*/
        },
        dev: {
            files: [{
                //'<%= yeoman.tmp.root %>/index.html': '<%= yeoman.app %>/index.html'
                expand: true,
                cwd: '<%= yeoman.app %>',
                src: ['**/*.html'],
                dest: '<%= yeoman.tmp.root %>'
            },
            {
                expand: true,
                cwd: '<%= yeoman.app %>',
                src: ['**/*.js'],
                dest: '<%= yeoman.tmp.root %>'
             }
           ]
        },
        dist: {
            files: [{
                //'<%= yeoman.dist %>/index.html': '<%= yeoman.app %>/index.html'

                expand: true,
                cwd: '<%= yeoman.app %>',
                src: ['**/*.html'],
                dest: '<%= yeoman.dist %>'
            }]
        }
    });

};

