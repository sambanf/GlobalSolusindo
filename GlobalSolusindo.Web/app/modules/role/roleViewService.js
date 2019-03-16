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
        .factory('roleViewService', roleView);

    roleView.$inject = ['HttpService', '$state', 'uiService'];

    function roleView(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.role-entry', {
                id: data
            })
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#role tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.role_pk);
            });

            $("#role tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["role_pk"];
                self.view(id)
            });
        }

        return self;
    }

})();