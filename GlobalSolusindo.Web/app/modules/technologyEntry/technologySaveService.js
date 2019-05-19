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
        .factory('TechnologySaveService', TechnologySaveService);

    TechnologySaveService.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function TechnologySaveService($state, http, ui, validation) {
        var self = this;
        var controller;

        function goToListPage() {
            $state.go('app.technologyList');
        }

        self.create = function (model) {
            http.post('technology', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    //$state.go('app.technologyEntry', { id: res.data.model.technology_pk });
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('technology', model).then(function (res) {
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
            if (model.technology_pk === 0) {
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