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
        .factory('MappingUserToRoleGroupSaveService', MappingUserToRoleGroupEntry);

    MappingUserToRoleGroupEntry.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function MappingUserToRoleGroupEntry($state, http, ui, validation) {
        var self = this;
        var controller;

        self.create = function (model) {
            http.post('mappingUserToRoleGroup', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    $state.go('app.mappingUserToRoleGroupEntry', { id: res.data.model.mappingUserToRoleGroup_pk });
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('mappingUserToRoleGroup', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.save = function (model) {
            validation.clearValidationErrors({});
            if (model.mappingUserToRoleGroup_pk === 0) {
                return self.create(model);
            } else {
                return self.update(model);
            }
        };

        //self.init = function (ctrl) {
        //    controller = ctrl;
        //    angular.element('#saveButton').on('click', function () {
        //        self.save(controller.model);
        //    });
        //};

        return self;
    }

})();