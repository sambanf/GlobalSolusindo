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
        .factory('POImportExcelBindingService', poImportExcelBindingService);

    poImportExcelBindingService.$inject = ['HttpService', '$state'];

    function poImportExcelBindingService(http, $state) {
        var self = this;
        var controller = {};
       
        self.init = function (ctrl) {
            controller = ctrl; 
            controller.model = {};
            controller.model.file = {};
            controller.uploadResults = [];

            http.get('po/search', {keyword:''}).then(function (res) {
                controller.uploadResults = res.data.records;
                //console.log('controller.uploadResults', controller.uploadResults);
            });
        };

        return self;
    }

})();