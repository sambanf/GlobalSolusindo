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
        .factory('SOWExportExcel', SOWExportExcel);

    SOWExportExcel.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function SOWExportExcel($state, http, ui, validation) {
        var self = this;
        var sowCtrl;

        self.downloadTpl = function () {
            debugger;
            http.downloadFile('sow/exportviewall', { keyword: '' }).then(function (data) {
                var contentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
                var linkElement = document.createElement('a');
                try {
                    var blob = new Blob([data], { type: contentType });
                    var url = window.URL.createObjectURL(blob);

                    linkElement.setAttribute('href', url);
                    linkElement.setAttribute("download", "SOWViewAll.xlsx");

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
            sowCtrl = ctrl

            angular.element('#downloadButtonViewall').on('click', function () {
                self.downloadTpl();
            });
        };

        return self;
    }

})();