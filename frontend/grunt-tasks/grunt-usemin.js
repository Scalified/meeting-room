module.exports = function (grunt) {

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    grunt.config('useminPrepare', {
        // changed from app to dist, to take index.html processed by includeSource in dist
        html: '<%= yeoman.app %>/index.html',
        options: {
            dest: '<%= yeoman.dist %>',
            root: '<%= yeoman.tmp.js %>',
            flow: {
                html: {
                    steps: {
                        js: ['concat', 'uglifyjs'],
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
            ],
            patterns: {
                js: [[/(images\/[^''""]*\.(png|jpg|jpeg|gif|webp|svg))/g, 'Replacing references to images']]
            }
        }
    });
};
