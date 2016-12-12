"use strict";

var mrBaseModule = angular.module('mrBaseModule', [
    'ngComponentRouter', 
    'ngRoute',
    'ngResource'
])
    .controller('appController', function ($timeout) {
        var self = this;
        $timeout(function () {
            console.log('this is appController of Angular ');
        }, 2000);
    })
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/meetingRoom", {
                templateUrl: "scripts/mrBaseModule/meetingRoom.html"
            })
            .when("/addNewCard", {
                templateUrl: "scripts/mrBaseModule/newCard.html"
            })
            .when("/", {
                templateUrl: "scripts/mrBaseModule/home.html"
            })
            .otherwise({
                template: "<h3>Sorry, there is not such a path</h3>"
            });

        // use the HTML5 History API
        $locationProvider.html5Mode({enabled: true});

    })
    .component('app', {
        template: '<div style="color:red; text-align: center; margin-top: 20px; "><strong>This is the template of Meeting Room </strong>' +
        '</div>'
    });
