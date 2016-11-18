"use strict";

var mrBaseModule = angular.module('mrBase',['ngComponentRouter'])
    .controller('appController',function () {
       var self = this;
        console.log('this is appController');
    })

    /*.value('$routerRootComponent', 'app')*/

    .component('app', {
        template: '<div style="color:red; text-align: center; margin-top: 20px; "><strong>This is the template of Meeting Room</strong>' +
        '</div>'
    });
