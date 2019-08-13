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
        .factory('ProjectSaveService', ProjectEntry);

    ProjectEntry.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function ProjectEntry($state, http, ui, validation) {
        var self = this;
        var controller;

        function goToListPage() {
            $state.go('app.projectList');
        }

        self.create = function (model) {
            http.post('project', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    //$state.go('app.projectEntry', { id: res.data.model.project_pk });
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        var error = changeValueValidation(res.data.errors)
                        validation.serverValidation(error);
                        //validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('project', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        var error = changeValueValidation(res.data.errors)
                        validation.serverValidation(error);
                }
            });
        };

        self.save = function (model) {
            validation.clearValidationErrors({});
            if (model.project_pk === 0) {
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

        function changeValueValidation(data)
        {
            for (var i = 0; i < data.length; i++) {
                if (data[i].propertyName == 'Operator_FK'){
                    data[i].message = 'The Operator field is required'
                }
                if (data[i].propertyName == 'Vendor_FK') {
                    data[i].message = 'The Vendor field is required'
                }
                if (data[i].propertyName == 'DeliveryArea_FK') {
                    data[i].message = 'The Delivery Area field is required'
                }
                if (data[i].propertyName == 'User_FK') {
                    data[i].message = 'The User field is required'
                }
            }
            return data;
        }

        return self;
    }

})();