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
        .factory('izinCutiApprovalSaveService', izinCutiApprovalSaveService);

    izinCutiApprovalSaveService.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function izinCutiApprovalSaveService($state, http, ui, validation) {
        var self = this;
        var controller; 

        function goToIzinCutiApprovalList() {
            $state.go('app.izinCutiApprovalList');
        }

        self.approve = function (model) {
            http.put('izinCuti/approval', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    goToIzinCutiApprovalList();
                } else {
                    ui.alert.error(res.message);
                    validation.serverValidation(res.data.errors);
                }
            });
        }; 

        self.reject = function (model) {
            http.put('izinCuti/approval', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    goToIzinCutiApprovalList();
                } else {
                    ui.alert.error(res.message);
                    validation.serverValidation(res.data.errors);
                }
            });
        }; 

        self.init = function (ctrl) {
            controller = ctrl;

            var approved = 1;
            var rejected = 2;
            var waiting = 3;

            angular.element('#approveButton').on('click', function () {
                self.approve({
                    izinCuti_pk: ctrl.stateParam.id,
                    izinCutiStatus: approved
                });
            });

            angular.element('#rejectButton').on('click', function () {
                self.reject({
                    izinCuti_pk: ctrl.stateParam.id,
                    izinCutiStatus: rejected
                });
            });

            //angular.element('#waitingButton').on('click', function () {
            //    self.approve({
            //        izinCuti_pk: ctrl.sParam.id,
            //        izinCutiStatus: waiting
            //    });
            //});
        };

        return self;
    }

})();