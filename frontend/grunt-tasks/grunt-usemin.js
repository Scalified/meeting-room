module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-usemin');
    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    grunt.config('useminPrepare', {
        // changed from app to dist, to take index.html processed by includeSource in dist
        html: '<%= yeoman.tmp.root %>/index.html',
        options: {
            dest: '<%= yeoman.dist %>',
            flow: {
                html: {
                    steps: {
                        js: ['concat', 'uglify'],
                        css: ['concat', 'cssmin']
                    },
                    post: {}
                }
            }
        }
    });

    // Performs rewrites based on filerev and the useminPrepare configuration
    grunt.config('usemin', {
        html: ['<%= yeoman.dist %>/{,*/}*.html'],
        css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
        js: ['<%= yeoman.dist %>/scripts/{,*/}*.js'],
        options: {
            assetsDirs: [
                '<%= yeoman.dist %>',
                '<%= yeoman.dist %>/images',
                '<%= yeoman.dist %>/styles'
            ]
        }
    });
};
