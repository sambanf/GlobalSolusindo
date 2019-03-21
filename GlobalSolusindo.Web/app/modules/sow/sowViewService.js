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
        .factory('SOWViewService', SOWView);

    SOWView.$inject = ['HttpService', '$state', 'uiService'];

    function SOWView(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.sow-entry', {
                id: data
            })
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#SOW tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.SOW_pk);
            });

            $("#SOW tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["SOW_pk"];
                self.view(id);
            });
        }

        return self;
    }

})();