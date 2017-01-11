module.exports = function (grunt) {

    // Copies remaining files to places other tasks can use
    grunt.config('copy', {
        dev: {
            files: [
                {
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.tmp.root %>',
                    src: [
                        '**/*.js',
                        '**/*.html',
                        '!prototype/**' //ignore /prototype directory
                    ]
                },
                {
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.tmp.root %>',
                    src: [
                        '**/*.css',
                        '**/*.scss'
                    ]
                }
            ]
        },
        dist: {
            files: [
                {
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>/styles/fonts/',
                    dest: '<%= yeoman.dist %>/styles/fonts/',
                    src: ['{,*/}*.*']
                },
                {
                    expand: true,
                    flatten: true,
                    dest: '<%= yeoman.dist %>/fonts/',
                    src: ['bower_components/font-awesome/fonts/*'],
                    filter: 'isFile'
                },
                {
                    expand: true,
                    flatten: true,
                    dest: '<%= yeoman.dist %>/fonts/',
                    src: ['bower_components/bootstrap/dist/fonts/*'],
                    filter: 'isFile'
                },
                {
                    expand: true,
                    cwd: '.tmp/images',
                    dest: '<%= yeoman.dist %>/images',
                    src: ['{,*/}*.*']
                }
            ]
        }
    });

};

