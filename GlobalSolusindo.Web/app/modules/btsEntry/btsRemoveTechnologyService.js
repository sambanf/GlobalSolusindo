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
        .factory('BTSRemoveTechnologyService', BTSRemoveTechnologyService);

    BTSRemoveTechnologyService.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function BTSRemoveTechnologyService($state, http, ui, validation) {
        var self = this;
        var controller;

        function removeTechnology(index) {
            controller.model.btsTechnologies.splice(index, 1);
        }

        self.init = function (ctrl) {
            controller = ctrl;
            controller.removeTechnology = removeTechnology;
        };

        return self;
    }

})();