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
        .factory('mappingUserToRoleGroupDeleteService', mappingUserToRoleGroup);

    mappingUserToRoleGroup.$inject = ['HttpService', 'uiService'];

    function mappingUserToRoleGroup(http, ui) {
        var self = this;
        var controller;

        function deleteRecords(data) {
            return http.delete('mappingUserToRoleGroup', data).then(function (response) {
                var res = response;
                if (res.success) {
                    controller.userDt.draw();
                    ui.alert.success(res.message);
                } else {
                    ui.alert.error(res.message);
                }
            });
        }

        self.delete = function (data) {
            ui.alert.confirm("Are you sure want to delete selected user '" + data.userUsername + "'?", function () {
                return deleteRecords(data);
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;

            //Row delete button event
            $('#mappingUserToRoleGroup tbody').on('click', '#delete', function () {
                var selectedRecord = controller.userDt.row($(this).parents('tr')).data();
                self.delete(selectedRecord);
            });
        };

        return self;
    }

})();