module.exports = function (grunt) {

    // Empties folders to start fresh
    grunt.config('clean', {
        options: {
            force: true
        },
        dist: {
            files: [{
                dot: true,
                src: [
                    //'.tmp',
                    '<%= yeoman.tmp.root %>/{,*/}*',    //delete all files in .tmp /directory
                    '<%= yeoman.dist %>/{,*/}*',
                    '!<%= yeoman.dist %>/.git{,*/}*'    /* don't delete .git/ folder */
                ]
            }]
        },
        server: ['.sass-cache', '.tscache', '.tmp']

    });

};
