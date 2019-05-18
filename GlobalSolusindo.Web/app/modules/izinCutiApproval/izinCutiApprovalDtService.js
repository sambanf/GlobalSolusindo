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
        .factory('izinCutiApprovalDtService', izinCutiApprovalDtService);

    izinCutiApprovalDtService.$inject = ['DatatableService'];

    function izinCutiApprovalDtService(ds) {
        var self = this;
        var controller = {};

        self.init = function (ctrl) {
            controller = ctrl;
            var tanggalColumnIndex = 5;
            var dt = ds.init("#izinCutiApproval", "izinCuti/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [tanggalColumnIndex, "desc"],
                columns: [
                    {
                        "orderable": false,
                        "data": "izinCuti_pk"
                    },
                    {
                        "render": function (data) {
                            return '';
                        }
                    },
                    {
                        "data": "userIzinCutiName"
                    },
                    {
                        "data": "userIzinCutiJabatan"
                    },
                    {
                        "data": "alasan"
                    },
                    {
                        "data": "tglMulai"
                    },
                    {
                        "data": "izinCutiStatusTitle"
                    },
                    {
                        "data": "approvalByUserName"
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