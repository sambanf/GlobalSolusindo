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
        .factory('authParamViewService', authParamView);

    authParamView.$inject = ['HttpService', '$state', 'uiService'];

    function authParamView(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.authParamEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#authParam tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.authParam_pk);
            });

            $("#authParam tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["authParam_pk"];
                self.view(id);
            });
        };

        return self;
    }

})();