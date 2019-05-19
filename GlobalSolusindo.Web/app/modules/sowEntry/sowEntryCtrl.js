(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.controller:userEntryCtrl
     * @description
     * # dashboardCtrl
     * Controller of the app
     */

    angular
        .module('global-solusindo')
        .controller('SOWEntryCtrl', SOWEntryCtrl);

    SOWEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'SOWSaveService', 'SOWBindingService', 'FormControlService', 'SOWSelect2Service', 'HttpService', 'sowMapService', 'kmlService'];

    function SOWEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, SOWSelect2Service, http, map, kml) {
        var self = this;
        self.stateParam = sParam;

        function setSowTracksModel(data) {
            self.model.sowTracks = [];
            self.model.sowTracks.push({
                route: data
            });
        }

        function showFileNameInTextbox(fileName) {
            document.getElementById("fileName").innerHTML = fileName;
        }

        function addEventListenerOnImageChanged() {
            document.getElementById("kmlFile").addEventListener("change", readFile);
        }

        function showRouteInMaps(e) {
            var xmlString = e.target.result;
            var routes = kml.createRoutes(xmlString);
            map.setRoute(routes);
        }

        function readFile() {
            if (this.files && this.files[0]) {
                var FR = new FileReader();
                var fileName = this.files[0].name;
                FR.readAsText(this.files[0]);
                FR.addEventListener("load", function (e) {
                    try {
                        showRouteInMaps(e);
                    } catch (e) {

                    }
                    showFileNameInTextbox(fileName);
                    setSowTracksModel(e.target.result);
                });
            }
        }

        addEventListenerOnImageChanged();

        bindingService.init(self).then(function (res) {
            formControlService.setFormControl(self);
            saveService.init(self);
            SOWSelect2Service.init(self);

            self.getUsers = function (jabatanFk, keyword) {
                http.get('user/search', {
                    pageIndex: 1,
                    pageSize: 10000,
                    keyword: keyword,
                    kategoriJabatan_fk: jabatanFk
                }).then(function (response) {
                    self.formData.users = response.data.records;
                });
            };

            try {
                map.init(self);

            } catch (e) {

            }
        });

        return self;
    }
})();