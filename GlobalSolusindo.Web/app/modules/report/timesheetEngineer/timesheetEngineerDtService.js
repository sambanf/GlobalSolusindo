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
        .factory('timesheetEngineerDtService', timesheetEngineerDtService);

    timesheetEngineerDtService.$inject = ['DatatableService'];

    function timesheetEngineerDtService(ds) {
        var self = this;
        var controller = {};

        self.init = function (ctrl) {
            controller = ctrl;
            var titleColumnIndex = 1;
            var dt = ds.init("#timesheetEngineer", "user/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
                        "orderable": false,
                        "data": "user_pk"
                    },
                    {
                        "data": "userCode"
                    },
                    {
                        "data": "name"
                    },
                    {
                        "data": "kategoriJabatanTitle"
                    },
                    {
                        "orderable": false,
                        "className": "text-center",
                        "render": function (data) {
                            return "<button id='view' rel='tooltip' title='Detail' data-placement='left' class='btn btn-info'>Detail</button>";
                        }
                    }
                ]
            });
            controller.datatable = dt;
            return dt;
        };
        return self;
    }

})();