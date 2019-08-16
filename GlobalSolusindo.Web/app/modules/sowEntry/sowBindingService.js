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
        .factory('SOWBindingService', SOWBindingService);

    SOWBindingService.$inject = ['HttpService', '$state'];

    function SOWBindingService(http, $state) {
        var self = this;
        var controller = {};
        
        self.applyBinding = function (id) {
            return http.get('sow/form/' + id);
        };
        
        function applyConversion(model, isDTCoor, isTL) {
            if (model && model.sowTracks) {
                model.sowTracks.forEach(function (sowTrack, index) {
                    sowTrack.tipePekerjaan_fk = sowTrack.tipePekerjaan_fk + '';
                });
            }
            if (model && model.sowAssigns) {
                model.sowAssigns.forEach(function (sowAssign, index) {
                    if (isDTCoor == true) {
                        if (index < 3) {
                            sowAssign.createdBy = true;
                        }
                        else {
                            sowAssign.createdBy = false;
                        }
                    }
                    else if (isTL == true) {

                        if (index > 0) {
                            sowAssign.createdBy = false;
                        }
                        else {
                            sowAssign.createdBy = true;
                        }
                    }
                    else {
                        sowAssign.createdBy = false;
                    }
                });
            }
        }

        self.init = function (ctrl, isDTCoor, isTL) {
            controller = ctrl;
            var id = ctrl.stateParam.id;
            return new Promise(function (resolve, reject) {
                self.applyBinding(id).then(function (res) {
                    controller.formData = res.data.formData;

                    applyConversion(res.data.model, isDTCoor, isTL);
                    controller.model = res.data.model;
                    controller.formData.users = [];
                    controller.formControls = res.data.formControls;
                    resolve(res);
                });
            });
        };

        return self;
    }

})();