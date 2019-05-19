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
        .factory('UserImportCsvBindingService', UserImportCsvBindingService);

    UserImportCsvBindingService.$inject = ['HttpService', '$state'];

    function UserImportCsvBindingService(http, $state) {
        var self = this;
        var controller = {};
       
        self.init = function (ctrl) {
            controller = ctrl; 
            controller.model = {};
            controller.model.file = {};
        };

        return self;
    }

})();