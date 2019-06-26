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
        .factory('menuViewService', menuViewService);

    menuViewService.$inject = ['HttpService', '$state', 'uiService'];

    function menuViewService(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.menuEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#menu tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.menu_pk);
            });

            $("#menu tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["menu_pk"];
                self.view(id);
            });
        };

        return self;
    }

})();