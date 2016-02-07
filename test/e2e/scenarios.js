'use strict';


describe('event registration app', function() {
    
    describe('events page', function() {
        beforeEach(function(){
            browser.get('http://localhost:8000/events/');
            
        })
        
        
        it('should have the correct title at first event', function() {
            var list = element.all(by.repeater('event in events'));
            expect(list.count()).toEqual(4);
            
        });
            
    });
        
});
    