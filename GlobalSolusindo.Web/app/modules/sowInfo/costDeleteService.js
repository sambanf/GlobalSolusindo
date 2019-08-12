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
        .factory('costDeleteService', costDeleteService);

    costDeleteService.$inject = ['HttpService', 'uiService'];

    function costDeleteService(http, ui) {
        var self = this;
        var controller;

        function deleteRecords(ids) {
            return http.delete('cost', ids).then(function (response) {
                var res = response;
                if (res.success) {
                    controller.costDt.draw();
                    ui.alert.success(res.message, 'popup');
                } else {
                    ui.alert.error(res.message);
                }
            });
        }

        self.delete = function (data) {
            var ids = [data.cost_pk];
            ui.alert.confirm("Are you sure want to delete cost '" + data.kategoriCostTitle + "'?", function () {
                return deleteRecords(ids);
            });
        };
 
        self.init = function (ctrl) {
            controller = ctrl;

            //Row delete button event
            $('#cost tbody').on('click', '#delete', function () {
                var selectedRecord = controller.costDt.row($(this).parents('tr')).data();
                self.delete(selectedRecord);
            }); 
        };

        return self;
    }

})();