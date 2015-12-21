'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, $log, $anchorScroll) {
        $scope.sortorder = 'name';
        eventData.getEvent().
            $promise.then(
                    function (event) {
                        $scope.event = event;
                        console.log(event);
                }).catch(
                    function (response) {
                        console.log(response);
                    }
            );

        $scope.event = event = eventData.getEvent();
        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };

        $scope.scrollToSession = function () {
            $anchorScroll();
        };
    });