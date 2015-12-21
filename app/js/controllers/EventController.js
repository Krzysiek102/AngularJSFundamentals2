'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, $log) {
        $scope.sortorder = 'name';
        $scope.event = event = eventData.getEvent();
        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };
    });