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
        .factory('POImportExcelUploadService', poImportExcelUploadService);

    poImportExcelUploadService.$inject = ['$state', 'HttpService', 'uiService', 'validationService', '$http'];

    function poImportExcelUploadService($state, http, ui, validation, $http) {
        var self = this;
        var userImportExcelCtrl;



        self.save = function (model) {
            http.post('po/import', model).then(function (res) {
                userImportExcelCtrl.uploadResults = res.data.map(function (item) { return item.model });

                if (res.success) {
                    ui.alert.success('Upload process complete.');
                    window.location.reload();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.downloadTpl = function () {
            http.downloadFile('po/export', { keyword: '' }).then(function (data) {
                var contentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
                var linkElement = document.createElement('a');
                try {
                    var blob = new Blob([data], { type: contentType });
                    var url = window.URL.createObjectURL(blob);

                    linkElement.setAttribute('href', url);
                    linkElement.setAttribute("download", "POUpload.xlsx");

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
            userImportExcelCtrl = ctrl;
            angular.element('#uploadButton').on('click', function () {
                self.save(userImportExcelCtrl.model);
            });

            angular.element('#downloadButton').on('click', function () {
                self.downloadTpl();
            });
        };

        return self;
    }

})();