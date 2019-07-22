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
        .factory('technologyViewService', technologyViewService);

    technologyViewService.$inject = ['HttpService', '$state', 'uiService'];

    function technologyViewService(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.technologyEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#technology tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.technology_pk);
            });

            //$("#technology tbody").on("dblclick", "tr", function () {
            //    var data = controller.datatable.row(this).data();
            //    var id = data["technology_pk"];
            //    self.view(id);
            //});
        };

        return self;
    }

})();