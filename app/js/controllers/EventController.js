'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {
        $scope.sortorder = 'name';
        $scope.event = {
            name: 'Angular boot Camp',
            date: new Date(2013,0,13),
            time: '10:30 am',
            location: {
                address: 'Google Headquarters',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directives Masterclass introductory',
                    creatorName: 'Bob Swith',
                    duration: 1,
                    level: 'advanced',
                    abstract: 'In this session you will learn the ins and outs of directives.',
                    upVoteCount: 0,
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'John Doe',
                    duration: 2,
                    level: 'introductory',
                    abstract: 'This session will take a cleaner look at scopes',
                    upVoteCount: 0,
                },
                {
                    name: 'Well Behaved Controllers',
                    creatorName: 'Jane Doe',
                    duration: 4,
                    level: 'intermediate',
                    abstract: 'Controllers are the beggining of everithing Angular does',
                    upVoteCount: 0,
                }
            ],
        };
        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        }
    });