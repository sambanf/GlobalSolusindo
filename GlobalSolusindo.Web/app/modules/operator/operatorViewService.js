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
        .factory('operatorViewService', operatorView);

    operatorView.$inject = ['HttpService', '$state', 'uiService'];

    function operatorView(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.operatorEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#operator tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.operator_pk);
            });

            $("#operator tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["operator_pk"];
                self.view(id);
            });
        };

        return self;
    }

})();