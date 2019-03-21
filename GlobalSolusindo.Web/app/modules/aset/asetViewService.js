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
        .factory('asetViewService', asetView);

    asetView.$inject = ['HttpService', '$state', 'uiService'];

    function asetView(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.asetEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#aset tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.aset_pk);
            });

            $("#aset tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["aset_pk"];
                self.view(id);
            });
        };

        return self;
    }

})();