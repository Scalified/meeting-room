"use strict";

var mrBaseModule = angular.module('mrBaseModule', [
    'ngComponentRouter',
    'ngResource'
])
    .value('$routerRootComponent', 'app') // Configure the top level routed (app Component is the root)
    .config(function ($locationProvider) {

        // use the HTML5 History API
        $locationProvider.html5Mode({enabled: true});

    });
