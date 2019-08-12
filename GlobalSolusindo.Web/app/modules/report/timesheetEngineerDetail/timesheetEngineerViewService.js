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
        .factory('timesheetEngineerDetailViewService', timesheetEngineerDetailViewService);

    timesheetEngineerDetailViewService.$inject = ['HttpService', '$state', 'uiService'];

    function timesheetEngineerDetailViewService(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (user_fk, bulan, bulanName) {
            $state.go('app.engineerActivities', {
                id: user_fk,
                bulan: bulan,
                bulanName:bulanName
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#timesheetEngineerDetail tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.user_fk, data.bulan, data.bulanName);
            });

            $('#timesheetEngineerDetail tbody').on('click', '#download', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.user_fk, data.bulan, data.bulanName);
            });



            $("#timesheetEngineerDetail tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var user_fk = data["user_fk"];
                var bulan = data["bulan"];
                var bulanName = data["bulanName"];
                self.view(user_fk, bulan, bulanName);
            });

        };

        return self;
    }

})();