(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.service:dashboardService
     * @description
     * # dashboardService
     * Service of the app
     */

    angular
        .module('global-solusindo')
        .factory('btsMapService', btsMapService);

    btsMapService.$inject = ['HttpService', '$state', 'uiService'];

    function btsMapService(http, $state, ui) {
        var self = this;

        function initMap() {
            // The location of indonesia
            var indonesia = { lat: -2.548926, lng: 118.0148634 };
            // The map, centered at indonesia
            var map = new google.maps.Map(
                document.getElementById('map'), { zoom: 4, center: indonesia });
            // The markers, positioned at indonesia
            setMarkers(map);
        }

        var cities = [];
        //[
        //    ['Jakarta', -6.121435, 106.774124, 4],
        //    ['Bogor', -6.595038, 106.816635, 5],
        //    ['Banjarmasin', -3.316694, 114.590111, 5],
        //    ['Medan', 3.597031, 98.678513, 5],
        //];

        function setMarkers(map) {
            for (var i = 0; i < cities.length; i++) {
                var city = cities[i];
                var name = city[0];
                var operator = city[4];
                var status = city[5];
                var marker = new google.maps.Marker({
                    position: { lat: city[1], lng: city[2] },
                    map: map,
                    title: name + ', ' + operator + ', ' + status + '(' + city[1] + ', ' + city[2] + ')',
                    zIndex: city[3]
                });
            }
        }

        self.init = function (citiesArg) {
            cities = citiesArg;
            initMap();
        };

        return self;
    }

})();