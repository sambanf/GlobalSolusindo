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
        .factory('sowViewService', sowView);

    sowView.$inject = ['HttpService', '$state', 'uiService'];

    function sowView(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.sowEntry', {
                id: data
            });
        };

        self.info = function (data) {
            $state.go('app.sowInfo', {
                id: data
            });
        };

        self.approval = function (data) {
            $state.go('app.sowApproval', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#sow tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.sow_pk);
            });

            $('#sow tbody').on('click', '#info', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.info(data.sow_pk);
            });

            $('#sow tbody').on('click', '#approval', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.approval(data.sow_pk);
            });

            $("#sow tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["sow_pk"];
                self.view(id);
            });
        };

        return self;
    }

})();