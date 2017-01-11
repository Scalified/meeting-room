module.exports = function (grunt) {

    var env = grunt.option('env') || 'dev';

    grunt.config('replace', {
        env: {
            options: {
                patterns: [{
                    json: grunt.file.readJSON('./config/' + env + '.json')
                }]
            },
            files: [{
                expand: true,
                flatten: true,
                src: [
                    '<%= yeoman.app %>/scripts/mrBaseModule/mrBaseModule.js'
                ],
                dest: '<%= yeoman.tmp.root %>/scripts/mrBaseModule/'
            }]
        }
    });

};

