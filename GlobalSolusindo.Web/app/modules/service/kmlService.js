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
        .factory('kmlService', kmlService);

    kmlService.$inject = ['$state', '$cookies', 'uiService', '$window'];

    function kmlService($state, $cookies, ui, $window) {
        var self = this;

        function parseXml(xmlString) {
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(xmlString, "text/xml");
            return xmlDoc;
        }

        function getKmlNode(xmlDoc) {
            return xmlDoc.querySelector("kml");
        }

        function getDocumentNode(xmlDoc) {
            return getKmlNode(xmlDoc).querySelector("Document");
        }

        function getPlacemarkNodes(xmlDoc) {
            return getDocumentNode(xmlDoc).querySelectorAll("Placemark");
        }

        function getLineStringNode(placemark) {
            return placemark.querySelector("LineString");
        }

        function getCoordinatesCollection(placemark) {
            var coordinateString = getLineStringNode(placemark).querySelector("coordinates").innerHTML;
            function trim(coordinates) {
                return coordinates
                    .trim()
                    .replace(" ", "")
                    .replace("\t", "")
                    .replace("\n", "")
                    .replace("\r", "")
                    .replace("\v", "");
            }
            coordinateString = trim(coordinateString);

            var coordinateArray = coordinateString.split(",0 ");
            var coordinatesCollection = [];

            coordinateArray.forEach(function (coordinate) {
                var coordinates = coordinate.split(",");
                coordinatesCollection.push({
                    lat: parseFloat(coordinates[1]),
                    lng: parseFloat(coordinates[0])
                });
            });
            return coordinatesCollection;
        }

        self.createRoutes = function (xmlString) {
            var xmlDoc = parseXml(xmlString);
            var placemarks = getPlacemarkNodes(xmlDoc);

            var routes = [];

            placemarks.forEach(function (placemark) {
                var coordinatesCollection = getCoordinatesCollection(placemark);
                routes.push(coordinatesCollection);
            });

            return routes;
        }

        return self;
    }

})();