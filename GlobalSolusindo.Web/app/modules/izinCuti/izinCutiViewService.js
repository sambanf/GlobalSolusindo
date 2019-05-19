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
        .factory('izinCutiViewService', izinCutiView);

    izinCutiView.$inject = ['HttpService', '$state', 'uiService'];

    function izinCutiView(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.izinCutiEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#izinCuti tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.izinCuti_pk);
            });

            $("#izinCuti tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["izinCuti_pk"];
                self.view(id);
            });
        };

        return self;
    }

})();