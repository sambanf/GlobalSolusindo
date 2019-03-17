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
        .factory('userViewService', userView);

    userView.$inject = ['HttpService', '$state', 'uiService'];

    function userView(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.userEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#user tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.user_pk);
            });

            $("#user tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["user_pk"];
                self.view(id);
            });
        };

        return self;
    }

})();