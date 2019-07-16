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

        self.downloadTpl = function () {
            http.downloadFile('bts/export', { keyword: '' }).then(function (data) {
                var contentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
                var linkElement = document.createElement('a');
                try {
                    var blob = new Blob([data], { type: contentType });
                    var url = window.URL.createObjectURL(blob);

                    linkElement.setAttribute('href', url);
                    linkElement.setAttribute("download", "BTSUpload.xlsx");

                    var clickEvent = new MouseEvent("click", {
                        "view": window,
                        "bubbles": true,
                        "cancelable": false
                    });
                    linkElement.dispatchEvent(clickEvent);
                } catch (ex) {
                    console.log(ex);
                }
            });


        };

        self.init = function (ctrl) {
            btsImportExcelCtrl = ctrl;
            angular.element('#uploadButton').on('click', function () {
                self.save(btsImportExcelCtrl.model);
            });

            angular.element('#downloadButton').on('click', function () {
                self.downloadTpl();
            });
        };

        return self;
    }

})();