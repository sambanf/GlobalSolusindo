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
        .factory('poviewDtService', poviewDtService);

    poviewDtService.$inject = ['DatatableService', 'HttpService'];

    function poviewDtService(ds, http) {
        var self = this;
        var controller = {};

        self.init = function (ctrl) {
            controller = ctrl;
            var titleColumnIndex = 1;
            var dt = ds.init("#poview", "po/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10,
                },
                order: [titleColumnIndex, "asc"],
                columns: [{
                    "data": "PO_PK"
                },
                {
                    "data": "Account"
                },
                {
                    "data": "ProjectCode"
                },
                {
                    "data": "SiteIDImp"
                },
                {
                    "data": "SiteID"
                },
                {
                    "data": "SiteName"
                },
                {
                    "data": "DUID"
                },
                {
                    "data": "PMOUniq"
                },
                {
                    "data": "SOWAct"
                },
                {
                    "data": "System"
                },
                {
                    "data": "SOWPO"
                },
                {
                    "data": "ItemDesc"
                },
                {
                    "data": "PONo"
                },
                {
                    "data": "ShipmentNo"
                },
                {
                    "data": "Qty"
                },
                {
                    "data": "POStatus"
                },
                {
                    "data": "status_fk"
                }
                ]
            });
            controller.datatable = dt;
            return dt;
        };


        return self;
    }

})();