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
        .factory('costKategoriViewService', costKategoriView);

    costKategoriView.$inject = ['HttpService', '$state', 'uiService'];

    function costKategoriView(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.costKategoriEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#costKategori tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.costKategori_pk);
            });

            $("#costKategori tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["costKategori_pk"];
                self.view(id);
            });
        };

        return self;
    }

})();