mrBaseModule.service('$meetingRoomService', function ($dataService, $q) {
    'use strict';

    var self = this;

    self.getMeetingCards = function (date) {
        var queryDate = date.toISOString().slice(0, 10);
        return $dataService.meetingCards.query({date: queryDate}).$promise;
    };

    self.addNewCard = function (model) {
        var defer = $q.defer();

        if (model.date) {
            var newCard = angular.copy(model);
            newCard.date = model.date.toISOString().slice(0, 10);

            $dataService.meetingCards.create(newCard);
            defer.resolve();
        }
        return defer.promise;
    };

});
