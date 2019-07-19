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
        .factory('asetKategoriViewService', asetKategoriView);

    asetKategoriView.$inject = ['HttpService', '$state', 'uiService'];

    function asetKategoriView(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.asetKategoriEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#asetKategori tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.asetKategori_pk);
            });

            //$("#asetKategori tbody").on("dblclick", "tr", function () {
            //    var data = controller.datatable.row(this).data();
            //    var id = data["asetKategori_pk"];
            //    self.view(id);
            //});
        };

        return self;
    }

})();