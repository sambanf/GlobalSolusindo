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
        .factory('timesheetEngineerDetailDtService', timesheetEngineerDetailDtService);

    timesheetEngineerDetailDtService.$inject = ['DatatableService'];

    function timesheetEngineerDetailDtService(ds) {
        var self = this;
        var controller = {};

        self.init = function (ctrl) {
            controller = ctrl;
            var titleColumnIndex = 1;
            var dt = ds.init("#timesheetEngineerDetail", "report/timesheetDetail", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10,
                    user_fk: controller.stateParam.id
                },
                order: [titleColumnIndex, "asc"],
                columns: [{
                    "orderable": false,
                    "data": "user_fk"
                },
                {
                    "data": "bulan"
                },
                {
                    "data": "bulanName",
                    "visible": false
                },
                {
                    "data": "tahun"
                },
                {
                    "orderable": false,
                    "className": "text-center",
                    "render": function (data) {
                        return "<button id='view' rel='tooltip' title='Detail' data-placement='left' class='btn btn-info'>Detail</button>";
                    }
                }
                ],
                ajaxCallback: function (response) {
                    controller.user = response.data.user;
                }
            });
            controller.datatable = dt;
            return dt;
        };

        return self;
    }

})();