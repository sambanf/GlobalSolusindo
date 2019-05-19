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
        .factory('mappingRoleToRoleGroupViewService', mappingRoleToRoleGroupView);

    mappingRoleToRoleGroupView.$inject = ['HttpService', '$state', 'uiService'];

    function mappingRoleToRoleGroupView(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.mappingRoleToRoleGroupEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#mappingRoleToRoleGroup tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.roleGroup_pk);
            });

            $("#mappingRoleToRoleGroup tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["roleGroup_pk"];
                self.view(id);
            });
        };

        return self;
    }

})();