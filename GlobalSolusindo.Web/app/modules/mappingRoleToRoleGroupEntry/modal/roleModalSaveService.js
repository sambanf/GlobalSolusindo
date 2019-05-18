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
        .factory('roleModalSaveService', roleModalSaveService);

    roleModalSaveService.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function roleModalSaveService($state, http, ui, validation) {
        var self = this;
        var controller;

        self.createOrUpdate = function (model) {
            http.post('mappingRoleToRoleGroup', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    controller.modalInstance.close();
                } else {
                    ui.alert.error(res.message);
                    validation.serverValidation(res.data.errors);
                }
            });
        };

        self.save = function (model) {
            validation.clearValidationErrors({});
            return self.createOrUpdate(model);
        };

        self.init = function (ctrl) {
            controller = ctrl;
            angular.element('#saveButton').on('click', function () {
                self.save(controller.model);
                //console.log(controller.model);
            });
        };

        return self;
    }

})();