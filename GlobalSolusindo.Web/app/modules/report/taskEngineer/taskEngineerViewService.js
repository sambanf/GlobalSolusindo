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

        self.view = function (data) {
            $state.go('app.taskEngineerDetail', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#taskEngineer tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.sowAssign_fk);
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