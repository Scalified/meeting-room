module.exports = function (grunt) {
    var pushState = require('grunt-connect-pushstate/lib/utils').pushState;
    var serveStatic = require('serve-static');

    // The actual grunt server settings
    grunt.config('connect', {
        options: {
            port: 3000,
            livereload: 35729,
            hostname: 'localhost'
        },
        livereload: {
            options: {
                open: true,
                middleware: function (connect) {
                    return [
                        pushState(),
                        serveStatic('.tmp'),
                        serveStatic('.tmp/scripts'),

                        connect().use(
                            '/bower_components',
                            serveStatic('./bower_components')
                        ),
                        connect().use(
                            '/app/styles',
                            serveStatic('./app/styles')
                        ),
                        /**Map $fa-font-path to original folder instead of copying**/
                        connect().use(
                            '/styles/fonts',
                            serveStatic('./bower_components/font-awesome/fonts')
                        ),
                        serveStatic('app')
                    ];
                }
            }
        }
    });
};
