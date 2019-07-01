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
        .factory('BTSSaveService', BTSEntry);

    BTSEntry.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function BTSEntry($state, http, ui, validation) {
        var self = this;
        var controller;
        function goToListPage() {
            $state.go('app.btsList');
        }
        self.create = function (model) {
            http.post('bts', model).then(function (res) {
                debugger;
                if (res.success) {
                    ui.alert.success(res.message);
                    //$state.go('app.btsEntry', { id: res.data.model.bts_pk });
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('bts', model).then(function (res) {
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
            if (model.bts_pk === 0) {
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