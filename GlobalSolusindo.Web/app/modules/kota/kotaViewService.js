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
        .factory('kotaViewService', kotaView);

    kotaView.$inject = ['HttpService', '$state', 'uiService'];

    function kotaView(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.kotaEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#kota tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.kota_pk);
            });

            $("#kota tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["kota_pk"];
                self.view(id);
            });
        };

        return self;
    }

})();