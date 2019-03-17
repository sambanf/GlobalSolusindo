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
        .factory('MappingRoleToRoleGroupSaveService', MappingRoleToRoleGroupEntry);

    MappingRoleToRoleGroupEntry.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function MappingRoleToRoleGroupEntry($state, http, ui, validation) {
        var self = this;
        var controller;

        self.create = function (model) {
            http.post('mappingRoleToRoleGroup', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    $state.go('app.mappingRoleToRoleGroupEntry', { id: res.data.model.mappingRoleToRoleGroup_pk });
                } else {
                    ui.alert.error(res.message);
                    validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('mappingRoleToRoleGroup', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                } else {
                    ui.alert.error(res.message);
                    validation.serverValidation(res.data.errors);
                }
            });
        };

        self.save = function (model) {
            validation.clearValidationErrors({});
            if (model.mappingRoleToRoleGroup_pk === 0) {
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