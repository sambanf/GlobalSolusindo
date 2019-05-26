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
        .factory('dailyTaskSearchService', searchService);

    searchService.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function searchService($state, http, ui, validation) {
        var self = this;
        var controller;

        function goToListPage() {
            $state.go('app.role-list');
        }

        function search() {
            controller.datatable.requestData.user_fk = controller.model.user_fk;
            controller.datatable.requestData.status = controller.model.statusName;
            controller.datatable.draw();
        }

        self.init = function (ctrl) {
            controller = ctrl;
            angular.element('#searchButton').on('click', function () {
                search();
            });
        };

        return self;
    }

})();