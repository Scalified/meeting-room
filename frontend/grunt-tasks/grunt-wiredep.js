module.exports = function (grunt) {

    // Automatically inject Bower components into the app into section <!-- bower:css --> or <!-- bower:js -->
    grunt.config('wiredep', {
        app: {
            src: ['<%= yeoman.app %>/index.html'],
            ignorePath: /\.\.\//,
            overrides: {
                "font-awesome": {
                    "main": "css/font-awesome.min.css"
                },
                "jquery": {
                    "main": "dist/jquery.min.js"
                },
                "bootstrap": {
                    "main": ["dist/css/bootstrap.css", "dist/js/bootstrap.min.js"]
                }
            }
        }
    });

};

