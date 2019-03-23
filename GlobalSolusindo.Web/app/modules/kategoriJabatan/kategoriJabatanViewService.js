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
        .factory('kategoriJabatanViewService', kategoriJabatanView);

    kategoriJabatanView.$inject = ['HttpService', '$state', 'uiService'];

    function kategoriJabatanView(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.kategoriJabatanEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#kategoriJabatan tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.kategoriJabatan_pk);
            });

            $("#kategoriJabatan tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["kategoriJabatan_pk"];
                self.view(id);
            });
        };

        return self;
    }

})();