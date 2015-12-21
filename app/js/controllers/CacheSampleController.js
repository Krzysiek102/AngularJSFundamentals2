'use strict';

eventsApp.controller('CacheSampleController',
    function CacheSampleController($scope, myCache) {
        $scope.addToCache = function (key, vale) {
            myCache.put(key, vale);
        };
        $scope.readFromCache = function (key) {
            return myCache.get(key);
        };
        $scope.getCacheStats = function () {
            return myCache.info();
        }
});