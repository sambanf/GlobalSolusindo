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
        .factory('cabangViewService', cabangView);

    cabangView.$inject = ['HttpService', '$state', 'uiService'];

    function cabangView(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.cabangEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#cabang tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.cabang_pk);
            });

            //$("#cabang tbody").on("dblclick", "tr", function () {
            //    var data = controller.datatable.row(this).data();
            //    var id = data["cabang_pk"];
            //    self.view(id);
            //});
        };

        return self;
    }

})();