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
        .factory('taskEngineerSearchService', tasksearchService);

    tasksearchService.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function tasksearchService($state, http, ui, validation) {
        var self = this;
        var controller;

        //function goToListPage() {
        //    $state.go('app.role-list');
        //}

        

        self.search = function (ctrl) {
            controller = ctrl;
            console.log(controller);
            //user_fk, bts_fk, tglMulai, tglSelesai, periode, timeFilter
            controller.datatable.requestData.user_fk = controller.model.user_fk;
            controller.datatable.requestData.bts_fk = controller.model.bts_fk;
            controller.datatable.requestData.tglMulai = controller.model.tglMulai;
            controller.datatable.requestData.tglSelesai = controller.model.tglAkhir;
            controller.datatable.requestData.timeFilter = controller.model.timePeriod;
            controller.datatable.requestData.periode = controller.model.bulan_fk;
            controller.datatable.draw();
        }

        self.init = function (ctrl) {
            controller = ctrl;
            angular.element('#searchButton').on('click', function () {
            });
        };

        return self;
    }

})();