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
        .factory('BTSImportExcelUploadService', BTSImportExcelUploadService);

    BTSImportExcelUploadService.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function BTSImportExcelUploadService($state, http, ui, validation) {
        var self = this;
        var btsImportExcelCtrl;

        function goToListPage() {
            $state.go('app.btsList');
        }

        self.save = function (model) {
            http.post('bts/import', model).then(function (res) {
                btsImportExcelCtrl.uploadResults = res.data;
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
            btsImportExcelCtrl = ctrl;
            angular.element('#uploadButton').on('click', function () {
                self.save(btsImportExcelCtrl.model);
            });
        };

        return self;
    }

})();