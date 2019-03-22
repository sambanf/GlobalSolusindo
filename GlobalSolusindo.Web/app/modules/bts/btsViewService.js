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
        .factory('btsViewService', btsView);

    btsView.$inject = ['HttpService', '$state', 'uiService'];

    function btsView(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.btsEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#bts tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.bts_pk);
            });

            $("#bts tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["bts_pk"];
                self.view(id);
            });
        };

        return self;
    }

})();