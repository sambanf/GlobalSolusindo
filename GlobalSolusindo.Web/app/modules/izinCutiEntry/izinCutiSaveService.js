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
        .factory('IzinCutiSaveService', IzinCutiEntry);

    IzinCutiEntry.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function IzinCutiEntry($state, http, ui, validation) {
        var self = this;
        var controller;

        function goToListPage() {
            $state.go('app.izinCutiList');
        }

        self.create = function (model) {
            http.post('izinCuti', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    //$state.go('app.izinCutiEntry', { id: res.data.model.izinCuti_pk });
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('izinCuti', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.save = function (model) {
            validation.clearValidationErrors({});
            if (model.izinCuti_pk === 0) {
                return self.create(model);
            } else {
                return self.update(model);
            }
        };

        self.init = function (ctrl) {
            controller = ctrl;
            angular.element('#saveButton').on('click', function () {
                self.save(controller.model);
            });
        };

        return self;
    }

})();