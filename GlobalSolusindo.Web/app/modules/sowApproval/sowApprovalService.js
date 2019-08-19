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
        .factory('SOWApprovalService', SOWApprovalService);

    SOWApprovalService.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function SOWApprovalService($state, http, ui, validation) {
        var self = this;
        var controller;

        function goToListPage() {
            $state.go('app.sowList');
        }

        self.approve = function (model, statusSow_fk) {
            var request = {
                "sow_pk": model.sow_pk,
                "statusSow_fk": statusSow_fk
            };
            http.put('sow/approval', request).then(function (res) {
                if (res.success) {
                    ui.alert.success("Data successfuly updated.");
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            angular.element('#closebutton').on('click', function () {
                self.approve(controller.model, 4);
            });
        };

        return self;
    }

})();