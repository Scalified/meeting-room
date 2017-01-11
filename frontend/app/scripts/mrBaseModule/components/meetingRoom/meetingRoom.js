mrBaseModule.component('meetingRoom', {
        templateUrl: 'scripts/mrBaseModule/components/meetingRoom/meetingRoom.html',
        controller: function ($datePickerOptions, $meetingRoomService) {
            "use strict";

            var self = this;

            self.datepicker = {
                model: new Date(),
                options: angular.copy($datePickerOptions),
                opened: false,
                onOpen: function () {
                    self.datepicker.opened = true;
                }
            };

            self.meetingList = [];

            self.$onInit = function () {
                var weekAgo = new Date();
                weekAgo.setDate(weekAgo.getDate() - 7);

                // Options for datapicker
                self.datepicker.options.minDate = new Date(weekAgo);
                self.datepicker.options.maxDate = new Date();

                $meetingRoomService.getMeetingCards(self.datepicker.model)
                    .then(self.onGetCardsSuccess);
            };

            self.onGetCardsSuccess = function (data) {
                self.meetingList = data;
            };

            self.getMeeting = function (selectedDate) {
                $meetingRoomService.getMeetingCards(selectedDate)
                    .then(self.onGetCardsSuccess);
            };
        }
    }
);

