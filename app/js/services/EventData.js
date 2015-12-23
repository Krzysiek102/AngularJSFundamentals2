eventsApp.factory('eventData', function ($resource) {
    var resource = $resource('/data/event/:id', { id: '@id' }, { "getAll": { method: "GET", isArray: true } });
    return {
        getEvent: function () {
            return resource.get({ id: 1 });
        },
        saveEvent: function (event) {
            event.id = 999;
            return resource.save(event);
        },
        getAllEvents: function () {
            return resource.query();
        }
    };
});