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
        .factory('timesheetEngineerViewService', timesheetEngineerViewService);

    timesheetEngineerViewService.$inject = ['HttpService', '$state', 'uiService'];

    function timesheetEngineerViewService(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.timesheetEngineerDetail', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#timesheetEngineer tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.user_pk);
            });

            $("#timesheetEngineer tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["user_pk"];
                self.view(id);
            });
        };

        return self;
    }

})();