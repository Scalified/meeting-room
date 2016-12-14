"use strict";

var mrBaseModule = angular.module('mrBaseModule', [
    'ngComponentRouter',
    'ngResource'
])
    .controller('appController', function ($timeout) {
        var self = this;
        $timeout(function () {
            console.log('this is appController of Angular ');
        }, 2000);
    })
    .value('$routerRootComponent', 'app') // Configure the top level routed (app Component)
    .config(function ($locationProvider) { //$routeProvider

        // use the HTML5 History API
        $locationProvider.html5Mode({enabled: true});

    });
