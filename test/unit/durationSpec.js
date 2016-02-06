'use strict';


describe('durations', function() {
    
    beforeEach(module('eventsApp'));
    
    
    it('Should return Half Hour when given 1', function() {
        inject(function(durationsFilter){
            expect(durationsFilter(1)).toEqual('Hour');
        });
    });
        
        
});
    