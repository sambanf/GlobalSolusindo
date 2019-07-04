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
        .factory('AsetHistoriSaveService', AsetHistoriEntry);

    AsetHistoriEntry.$inject = ['$state', '$stateParams', 'HttpService', 'uiService', 'validationService'];

    function AsetHistoriEntry($state, $stateParams, http, ui, validation) {
        var self = this;
        var controller;

        function goToListPage() {
            $state.go('app.asetHistoriList', { user_fk: $stateParams.user_fk });
        }

        self.create = function (model) {
            model.user_fk = $stateParams.user_fk;
            http.post('asetHistori', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    // $state.go('app.asetHistoriEntry', { id: res.data.model.asetHistori_pk });
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            model.user_fk = $stateParams.user_fk;
            http.put('asetHistori', model).then(function (res) {
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
            if (model.asetHistori_pk === 0) {
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

            angular.element('#backButton').on('click', function () {
                goToListPage();
            });
        };

        return self;
    }

})();