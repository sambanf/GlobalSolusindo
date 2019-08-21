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
        .factory('taskEngineerViewService', taskEngineerViewService);

    taskEngineerViewService.$inject = ['HttpService', '$state', 'uiService'];

    function taskEngineerViewService(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data, datacheckIn_fk) {
            $state.go('app.taskEngineerDetail', {
                id: data,
                checkIn_fk: datacheckIn_fk
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#taskEngineer tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                var checkIn_fk = data.checkin_fk;
                if (!checkIn_fk) { checkIn_fk = 0 }
                self.view(data.sowAssign_fk, checkIn_fk);
            });

            $("#taskEngineer tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["sowAssign_fk"];
                self.view(id);
            });
        };

        return self;
    }

})();