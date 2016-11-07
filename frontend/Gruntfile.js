module.exports = function(grunt) {

    // Tasks
    grunt.initConfig({
        // Concat Task
        concat: {
            main: {
                src: [
                    'js/**/*.js'  // all JS-files in the folder
                ],
                dest: 'build/scripts.js'
            }
        },
        // Compress Task
        uglify: {
            main: {
                files: {
                    // result of the concat task
                    'build/scripts.min.js': '<%= concat.main.dest %>'
                }
            }
        }
    });

    // load installed plugins via npm
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // default Task
    grunt.registerTask('default', ['concat', 'uglify']);
};