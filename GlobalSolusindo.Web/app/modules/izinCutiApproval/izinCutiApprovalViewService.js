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
        .factory('izinCutiApprovalViewService', izinCutiApprovalViewService);

    izinCutiApprovalViewService.$inject = ['HttpService', '$state', 'uiService'];

    function izinCutiApprovalViewService(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.izinCutiApprovalEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#izinCutiApproval tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.izinCuti_pk);
            });

            $("#izinCutiApproval tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["izinCuti_pk"];
                self.view(id);
            });
        };

        return self;
    }

})();