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
        .factory('sowMapService', sowMapService);

    sowMapService.$inject = ['HttpService', '$state', 'uiService', 'kmlService'];

    function sowMapService(http, $state, ui, kml) {
        var self = this;

        var sowCtrl = {};

        function initMap() {
            // The location of indonesia
            var indonesia = { lat: -2.548926, lng: 118.0148634 };
            // The map, centered at indonesia
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 2,
                center: indonesia //{ lat: 0, lng: -180 }
            });
        }

        self.setRoute = function (routes) {
            if (routes && routes[0] && routes[0][0]) {
                var map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 14,
                    center: { lat: routes[0][0].lat, lng: routes[0][0].lng }
                });
                routes.forEach(function (route) {
                    var flightPath = new google.maps.Polyline({
                        path: route,
                        geodesic: true,
                        strokeColor: '#FF0000',
                        strokeOpacity: 1.0,
                        strokeWeight: 2
                    });
                    flightPath.setMap(map);
                });
            }
        };

        self.init = function (ctrl) {
            sowCtrl = ctrl;
            initMap();
            if (sowCtrl && sowCtrl.model && sowCtrl.model.sowTracks && sowCtrl.model.sowTracks[0]) {
                var xmlString = sowCtrl.model.sowTracks[0].route;
                var routes = kml.createRoutes(xmlString);
                self.setRoute(routes);
            }

            if (sowCtrl && sowCtrl.model && sowCtrl.model.SOWTrackResults && sowCtrl.model.SOWTrackResults[0]) {
                var routeResult = [];
                var coordinates = JSON.parse(sowCtrl.model.SOWTrackResults[0].routeResult);
                coordinates.forEach(function (coordinate) {
                    routeResult.push({
                        lat: coordinate.latitude,
                        lng: coordinate.longitude
                    });
                })
                self.setRoute(routeResult);
            }
        };

        return self;
    }

})();