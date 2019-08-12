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
        .factory('sowissueDtService', sowissueDtService);

    sowissueDtService.$inject = ['DatatableService', 'HttpService'];

    function sowissueDtService(ds, http) {
        var self = this;
        var controller = {};

        self.init = function (ctrl) {
            controller = ctrl;
            var titleColumnIndex = 1;
            var dt = ds.init("#sowissue", "sow/issue", {
                extendRequestData: {
                    sow_fk: controller.stateParam.id
                },
                columns: [{
                    "data": "jabatan"
                },
                {
                    "data": "jabatan"
                },
                {
                    "data": "issuename"
                }
                ]
            });
            controller.datatable = dt;
            return dt;
        };


        return self;
    }

})();