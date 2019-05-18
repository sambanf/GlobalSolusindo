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
        .factory('deliveryAreaViewService', deliveryAreaView);

    deliveryAreaView.$inject = ['HttpService', '$state', 'uiService'];

    function deliveryAreaView(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.deliveryAreaEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#deliveryArea tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.deliveryArea_pk);
            });

            $("#deliveryArea tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["deliveryArea_pk"];
                self.view(id);
            });
        };

        return self;
    }

})();