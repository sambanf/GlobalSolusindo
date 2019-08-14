(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.controller:sowEntryCtrl
     * @description
     * # dashboardCtrl
     * Controller of the app
     */

    angular
        .module('global-solusindo')
        .controller('SOWEntryCtrl', SOWEntryCtrl);

    SOWEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'SOWSaveService', 'SOWBindingService', 'FormControlService', 'SOWSelect2Service', 'HttpService', 'sowMapService', 'kmlService', 'uiService'];

    function SOWEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, SOWSelect2Service, http, map, kml, ui) {
        var self = this;
        self.stateParam = sParam;

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var isTL = setRole(res.data, "SOW_Edit_IsTL");
            var isDTCoor = setRole(res.data, "SOW_Edit_IsDTCoor");

            if (isTL == true) {
                document.getElementById('sowName').disabled = false;
                document.getElementById('project_fk').disabled = false;
                document.getElementById('bts_fk').disabled = false;
                document.getElementById('codate').disabled = false;
                document.getElementById('tglMulai').disabled = false;
                document.getElementById('technology_fk').disabled = false;
                document.getElementById('duid').disabled = false;
                document.getElementById('tipePekerjaan_fk2').disabled = false;
                document.getElementById('tipePekerjaan_fk1').disabled = false;
                document.getElementById('kmlFile1').disabled = false;
                document.getElementById('kmlFile2').disabled = false;
            }
            else if (isDTCoor == true) {
                document.getElementById('sowName').disabled = true;
                document.getElementById('project_fk').disabled = true;
                document.getElementById('bts_fk').disabled = true;
                document.getElementById('codate').disabled = true;
                document.getElementById('tglMulai').disabled = true;
                document.getElementById('technology_fk').disabled = true;
                document.getElementById('duid').disabled = true;
                document.getElementById('tipePekerjaan_fk2').disabled = true;
                document.getElementById('tipePekerjaan_fk1').disabled = true;
                document.getElementById('kmlFile1').disabled = true;
                document.getElementById('kmlFile2').disabled = true;
            }
            else {
                document.getElementById('sowName').disabled = false;
                document.getElementById('project_fk').disabled = false;
                document.getElementById('bts_fk').disabled = false;
                document.getElementById('codate').disabled = false;
                document.getElementById('tglMulai').disabled = false;
                document.getElementById('technology_fk').disabled = false;
                document.getElementById('duid').disabled = false;
                document.getElementById('tipePekerjaan_fk2').disabled = false;
                document.getElementById('tipePekerjaan_fk1').disabled = false;
                document.getElementById('kmlFile1').disabled = false;
                document.getElementById('kmlFile2').disabled = false;
            }

            bindingService.init(self, isDTCoor, isTL).then(function (res) {
                formControlService.setFormControl(self);
                saveService.init(self);
                SOWSelect2Service.init(self);

                self.getUsers = function (jabatanFk, keyword) {
                    var requestData = {
                        pageIndex: 1,
                        pageSize: 10000,
                        keyword: keyword,
                        kategoriJabatan_fk: jabatanFk
                    };

                    http.get('user/search', requestData)
                        .then(function (response) {
                            self.formData.users = response.data.records;
                        });
                };

                try {
                    addEventListenerOnImageChanged1();
                    addEventListenerOnImageChanged2();
                    map.init(self);
                } catch (e) {
                    console.log(e);
                }
            });
        })

        function setRole(roles, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }

            return role
        }

        function readFile1() {
            if (this.files && this.files[0]) {
                var FR = new FileReader();
                var fileName = this.files[0].name;
                FR.readAsText(this.files[0]);
                FR.addEventListener("load", function (e) {
                    try {

                        //showRouteInMaps;
                        var xmlString = e.target.result;
                        var routes = kml.createRoutes(xmlString);
                        map.setRoute1(routes);

                        //showFileNameInTextbox
                        document.getElementById("fileName1").innerHTML = fileName;

                        //setSowTracksModel; 
                        if (self.model.sowTracks[0].tipePekerjaan_fk) {
                            self.model.sowTracks[0].route = e.target.result;

                            $scope.$apply();
                        }
                        else {
                            ui.alert.error('Please pick job type first');
                        }

                    } catch (e) {
                        console.log(e);
                    }
                });
            }
        }

        function addEventListenerOnImageChanged1() {

            document.getElementById("kmlFile1").addEventListener("change", readFile1);
        }

        function readFile2() {
            if (this.files && this.files[0]) {
                var FR = new FileReader();
                var fileName = this.files[0].name;
                FR.readAsText(this.files[0]);
                FR.addEventListener("load", function (e) {
                    if (!self.model.sowTracks[1]) {
                        ui.alert.error('Please pick job type first');
                        return;
                    }

                    try {

                        //showRouteInMaps;
                        var xmlString = e.target.result;
                        var routes = kml.createRoutes(xmlString);
                        map.setRoute2(routes);

                        //showFileNameInTextbox
                        document.getElementById("fileName2").innerHTML = fileName;

                        //setSowTracksModel; 
                        self.model.sowTracks[1].route = e.target.result; 
                        $scope.$apply();
                    } catch (e) {
                        console.log(e);
                    }

                });
            }
        }

        function addEventListenerOnImageChanged2() {
            document.getElementById("kmlFile2").addEventListener("change", readFile2);
        }

        

        return self;
    }
})();