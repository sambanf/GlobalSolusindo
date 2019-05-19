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
        .factory('assetViewService', assetView);

    assetView.$inject = ['HttpService', '$state', 'uiService'];

    function assetView(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.asset-entry', {
                id: data
            })
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#asset tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.asset_pk);
            });

            $("#asset tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["asset_pk"];
                self.view(id)
            });
        }

        return self;
    }

})();