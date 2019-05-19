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
        .factory('MyTaskListSaveService', MyTaskListSaveService);

    MyTaskListSaveService.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function MyTaskListSaveService($state, http, ui, validation) {
        var self = this;
        var controller;

        function goToListPage() {
            $state.go('app.myTaskListList');
        }

        self.submit = function (model) {
            var request = {
                "checkInID": model.checkIn_pk,
                "description": model.SOWResult.description
            };
            http.post('mobile/doSubmitUrl', request).then(function (res) {
                if (res.status == true) {
                    ui.alert.success("Data successfuly updated.");
                    //$state.go('app.myTaskListEntry', { id: res.data.model.myTaskList_pk });
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
            angular.element('#submitButton').on('click', function () {
                self.submit(controller.model, true);
            }); 
        };

        return self;
    }

})();