'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, $log, $routeParams) {
        $scope.sortorder = 'name';
        $scope.event = event = eventData.getEvent($routeParams.eventId);
        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };
    });