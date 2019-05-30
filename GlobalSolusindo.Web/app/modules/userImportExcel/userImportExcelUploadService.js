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
        .factory('UserImportExcelUploadService', UserImportExcelUploadService);

    UserImportExcelUploadService.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function UserImportExcelUploadService($state, http, ui, validation) {
        var self = this;
        var userImportExcelCtrl;

        function goToListPage() {
            $state.go('app.userList');
        }

        self.save = function (model) {
            http.post('user/import', model).then(function (res) {
                userImportExcelCtrl.uploadResults = res.data;
                if (res.success) {
                    ui.alert.success('Upload process complete.');
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.init = function (ctrl) {
            userImportExcelCtrl = ctrl;
            angular.element('#uploadButton').on('click', function () {
                self.save(userImportExcelCtrl.model);
            });
        };

        return self;
    }

})();