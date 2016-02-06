'use strict';

describe('eventData', function () {
    beforeEach(module('eventsApp'));

    it('should issue a GET request to /data/event/11 when getevent is called and the id is 11', function () {
        inject(function (eventData, $httpBackend) {
            $httpBackend.expectGET('/data/event/11');
            $httpBackend.when('GET', '/data/event/11').respond({});
            eventData.getEvent(11);
            $httpBackend.flush();
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });
    });


    it('should return the correct data when getEvent is called', function () {
        inject(function (eventData, $httpBackend) {
            $httpBackend.when('GET', '/data/event/11').respond({ name: 'My Event' });
            var event = eventData.getEvent(11);
            $httpBackend.flush();
            expect(event.name).toBe('My Event');
        });
    });


    it('should  set the id 999  when save is called', function () {
        inject(function (eventData, $httpBackend) {
            $httpBackend.when('POST','/data/event/999').respond({});
            var event = {name: 'My Event'};
            eventData.saveEvent(event);
            expect(event.id).toBe(999);
        });
    });

    it('should issue a GET event to date/event when getAllEvents is called', function () {
        inject(function (eventData, $httpBackend) {
            $httpBackend.when('GET','/data/event').respond([{name: 'My Event'}]);
            var events = eventData.getAllEvents();
            $httpBackend.flush();
            expect(events[0].name).toBe('My Event');
        });
    });
    

});
    