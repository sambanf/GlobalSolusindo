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
        .factory('areaViewService', areaView);

    areaView.$inject = ['HttpService', '$state', 'uiService'];

    function areaView(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.areaEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#area tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.area_pk);
            });

            $("#area tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["area_pk"];
                self.view(id);
            });
        };

        return self;
    }

})();