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
        .factory('checkInViewService', checkInViewService);

    checkInViewService.$inject = ['HttpService', '$state', 'uiService'];

    function checkInViewService(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.checkInEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#checkIn tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.checkIn_pk);
            });

            $("#checkIn tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["checkIn_pk"];
                self.view(id);
            });
        };

        return self;
    }

})();