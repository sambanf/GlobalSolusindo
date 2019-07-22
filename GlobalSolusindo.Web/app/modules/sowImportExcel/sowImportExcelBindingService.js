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
        .factory('SOWImportExcelBindingService', SOWImportExcelBindingService);

    SOWImportExcelBindingService.$inject = ['HttpService', '$state'];

    function SOWImportExcelBindingService(http, $state) {
        var self = this;
        var controller = {};
       
        self.init = function (ctrl) {
            controller = ctrl; 
            controller.model = {};
            controller.model.file = {};
            controller.uploadResuls = [];
        };

        return self;
    }

})();