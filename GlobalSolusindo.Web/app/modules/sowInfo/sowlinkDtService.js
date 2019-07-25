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
        .factory('sowlinkDtService', sowlinkDtService);

    sowlinkDtService.$inject = ['DatatableService','HttpService'];

    function sowlinkDtService(ds, http) {
        var self = this;
        var controller = {};

        self.init = function (ctrl) {
            controller = ctrl;
            var titleColumnIndex = 1;
            var dt = ds.init("#link", "sow/link", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10,
                    sow_fk: controller.stateParam.id
                },
                order: [titleColumnIndex, "asc"],
                columns: [{
                    "data": "jabatan"
                },
                {
                    "data": "nama"
                },
                {
                    "data": "link"
                },
                {
                    "data": "ssv"
                }
                ]
            });
            controller.datatable = dt;
            return dt;
        };


        return self;
    }

})();