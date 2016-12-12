module.exports = function (grunt) {

    // Empties folders to start fresh
    grunt.config('clean', {
        options: {
            force: true
        },
        dev: {
            files: [{
                dot: true,
                src: ['.dist', '.tmp']
            }]
        },
        dist: {
            files: [{
                dot: true,
                src: [
                    '<%= yeoman.tmp.root %>',              //delete directory  .tmp
                    '<%= yeoman.dist %>/{,*/}*'
                ]
            }]
        },
        server: ['.tmp']

    });

};
