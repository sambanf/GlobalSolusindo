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
        .factory('UserImportCsvUploadService', UserImportCsvUploadService);

    UserImportCsvUploadService.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function UserImportCsvUploadService($state, http, ui, validation) {
        var self = this;
        var userImportCsvCtrl;

        function goToListPage() {
            $state.go('app.userList');
        }

        self.save = function (model) {
            http.post('user/import', model).then(function (res) {
                if (res.success) {

                    var successCount = 0;
                    res.data.forEach(function (result) {
                        if (result.success)
                            successCount += 1;
                    });
                    if (successCount > 0) {
                        ui.alert.success(successCount + ' record(s) successfully imported.');
                    }
                    else {
                        ui.alert.error(res.message);
                    }

                    //$state.go('app.userImportCsv', { id: res.data.model.userImportCsv_pk });
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.init = function (ctrl) {
            userImportCsvCtrl = ctrl;
            angular.element('#uploadButton').on('click', function () {
                self.save(userImportCsvCtrl.model);
            });
        };

        return self;
    }

})();