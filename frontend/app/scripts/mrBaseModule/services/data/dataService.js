mrBaseModule.service('$dataService', function ($resource, $config) {
    'use strict';

    var self = this;

    return {
        meetingCards: $resource($config.serverUrl + 'cards', {}, {
            'get': {method: 'GET'},
            'query': {method: 'GET', isArray: true},
            'create': {method: 'POST'},
            'update': {method: 'PUT'},
            'delete': {method: 'DELETE'}
        })
    }
});