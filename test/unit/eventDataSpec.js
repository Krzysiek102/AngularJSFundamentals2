'use strict';

describe('eventData', function() {
    beforeEach(module('eventsApp'));
    it('should issue a GET request to /data/event/11 when getevent is called and the id is 11', function() {
       inject(function(eventData, $httpBackend){
          $httpBackend.expectGET('/data/event/11');
          $httpBackend.when('GET', '/data/event/11').respond({});
          eventData.getEvent(11); 
          $httpBackend.flush();
          $httpBackend.verifyNoOutstandingExpectation();
          $httpBackend.verifyNoOutstandingRequest();
       });
    });
});
    