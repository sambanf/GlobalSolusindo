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
        .factory('checkInMapService', checkInMapService);

    checkInMapService.$inject = ['HttpService', '$state', 'uiService', 'kmlService'];

    function checkInMapService(http, $state, ui, kml) {
        var self = this;

        var checkInCtrl = {};

        function initMap() {
            // The location of indonesia
            var indonesia = { lat: -2.548926, lng: 118.0148634 };
            // The map, centered at indonesia
            var map1 = new google.maps.Map(document.getElementById('map1'), {
                zoom: 2,
                center: indonesia //{ lat: 0, lng: -180 }
            }); 
        }

        self.setRoute1 = function (routes) {
            
            if (routes) {
                
                var map = new google.maps.Map(document.getElementById('map1'), {
                    zoom: 14,
                    center: { lat: routes[0].lat, lng: routes[0].lng }
                });
                var flightPath = new google.maps.Polyline({
                    path: routes,
                    geodesic: true,
                    strokeColor: '#FF0000',
                    strokeOpacity: 1.0,
                    strokeWeight: 2
                }); 
                flightPath.setMap(map);
            }
        };
 

        self.init = function (ctrl) {
            checkInCtrl = ctrl;
            initMap();
            if (checkInCtrl && checkInCtrl.model && checkInCtrl.model.sowTracks && checkInCtrl.model.sowTracks[0]) {
                var xmlString = checkInCtrl.model.sowTracks[0].route;
                var routes = kml.createRoutes(xmlString);
                self.setRoute1(routes);
            }

            if (checkInCtrl && checkInCtrl.model && checkInCtrl.model.SOWTrackResults && checkInCtrl.model.SOWTrackResults[0]) {
                
                var routeResult = [];
                var coordinates = JSON.parse(checkInCtrl.model.SOWTrackResults[0].routeResult);
                coordinates.forEach(function (coordinate) {
                    routeResult.push({
                        lat: coordinate.latitude,
                        lng: coordinate.longitude
                    });
                });
                self.setRoute1(routeResult);
            } 
        };

        return self;
    }

})();