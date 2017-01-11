mrBaseModule.component('app', {
    templateUrl: 'scripts/mrBaseModule/components/app/app.html',
    $routeConfig: [
        {path: '/', name: 'Home', component: 'home'},
        {path: '/meetingRoom', name: 'MeetingRoom', component: 'meetingRoom'},
        {path: '/addNewCard', name: 'AddNewCard', component: 'addNewCard'}
    ],
    controller: function () {
        "use strict";
    }
});
