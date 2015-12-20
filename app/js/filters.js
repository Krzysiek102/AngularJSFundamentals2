'use strict';

eventsApp.filter('durations', function(){
return function(duration){
    switch (duration) {
        case 1: return "Hour";
        case 2: return "Two hours";
        case 3: return "Three hours";
        case 4: return "Half a day";
        default: duration;
    }
}
})
