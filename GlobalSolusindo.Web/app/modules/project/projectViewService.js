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
        .factory('projectViewService', projectView);

    projectView.$inject = ['HttpService', '$state', 'uiService'];

    function projectView(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.projectEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#project tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.project_pk);
            });

            $("#project tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["project_pk"];
                self.view(id);
            });
        };

        return self;
    }

})();