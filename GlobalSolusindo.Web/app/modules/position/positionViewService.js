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
        .factory('positionViewService', positionView);

    positionView.$inject = ['HttpService', '$state', 'uiService'];

    function positionView(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.positionEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#position tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.position_pk);
            });

            $("#position tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["position_pk"];
                self.view(id);
            });
        };

        return self;
    }

})();