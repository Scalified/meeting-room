mrBaseModule.component('addNewCard', {
    bindings: {
        $router: '<'
    },
    templateUrl: 'scripts/mrBaseModule/components/addNewCard/addNewCard.html',
    controller: function ($datePickerOptions, $meetingRoomService) {
        "use strict";

        var self = this;

        self.datepicker = {
            options: angular.copy($datePickerOptions),
            opened: false,
            onOpen: function () {
                self.datepicker.opened = true;
            }
        };

        self.$onInit = function () {
            self.newCardModel = {date: new Date()};

            var weekAgo = new Date();
            weekAgo.setDate(weekAgo.getDate() - 7);

            // Options for datapicker
            self.datepicker.options.minDate = new Date(weekAgo);
            self.datepicker.options.maxDate = new Date();
        };

        self.addCard = function (model) {
            $meetingRoomService.addNewCard(model)
                .then(self.onAddCardSuccess);
        };

        self.onAddCardSuccess = function () {
            self.$router.navigate(['Home']);
        }
    }
});

