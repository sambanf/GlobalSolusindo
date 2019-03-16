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
        .factory('roleDeleteService', role);

    role.$inject = ['HttpService', 'uiService'];

    function role(http, ui) {
        var self = this;
        var controller;

        self.delete = function (data) {
            return http.delete('role', data).then(function (response) {
                var res = response;
                if (res.success) {
                    controller.datatable.draw();
                    ui.alert.success(res.message);
                } else {
                    ui.alert.error(res.message);
                }
            });
        };

        self.init = function(ctrl){
            controller = ctrl; 
            $('#role tbody').on( 'click', '#delete', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.delete([data.role_pk]);
            } );
        }

        return self;
    }

})();