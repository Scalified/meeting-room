"use strict";

var mrBaseModule = angular.module('mrBaseModule', [
    'ngComponentRouter',
    'ngResource',
    'ui.bootstrap'
])
    .value('$routerRootComponent', 'app') // configure the top level routing of components (app Component is the root)
    .value('$datePickerOptions', {
        dateDisabled: function (data) { // Disable weekend selection
            var date = data.date,
                mode = data.mode;
            return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
        }
    })      // configure the options for datepicker
    .constant('$config', {
        //modify corresponding config within frontend/config/<env>.json  (is been doing by Grunt replace task)
        //Grunt replace task finds all variables that was marked like @@name and substitutes the correct values into them, that correspond to them
        serverUrl: '@@serverUrl'
    })
    .config(function ($locationProvider) {

        // use the HTML5 History API
        $locationProvider.html5Mode({enabled: true});

    });
