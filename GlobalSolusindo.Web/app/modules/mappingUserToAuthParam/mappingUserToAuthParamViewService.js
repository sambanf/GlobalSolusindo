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
        .factory('mappingUserToAuthParamViewService', mappingUserToAuthParamView);

    mappingUserToAuthParamView.$inject = ['HttpService', '$state', 'uiService'];

    function mappingUserToAuthParamView(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.mappingUserToAuthParamEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#mappingUserToAuthParam tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.authParam_pk);
            });

            $("#mappingUserToAuthParam tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["authParam_pk"];
                self.view(id);
            });
        };

        return self;
    }

})();