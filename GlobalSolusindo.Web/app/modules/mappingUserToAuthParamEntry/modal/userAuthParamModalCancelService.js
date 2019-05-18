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
        .factory('userAuthParamModalCancelService', userAuthParamModalCancelService);

    userAuthParamModalCancelService.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function userAuthParamModalCancelService($state, http, ui, validation) {
        var self = this;
        var controller;
        self.init = function (ctrl) {
            controller = ctrl;
            angular.element('#cancelButton').on('click', function () {
                controller.modalInstance.close();
            });
        };

        return self;
    }
})();