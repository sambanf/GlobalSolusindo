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
        .factory('BTSAddTechnologyService', BTSAddTechnologyService);

    BTSAddTechnologyService.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function BTSAddTechnologyService($state, http, ui, validation) {
        var self = this;
        var controller; 

        self.init = function (ctrl) {
            controller = ctrl;
            angular.element('#btnAddTechnology').on('click', function () {
                ctrl.model.btsTechnologies.push({});
            });
        };

        return self;
    }

})();