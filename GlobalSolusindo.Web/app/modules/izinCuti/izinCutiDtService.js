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
        .factory('izinCutiDtService', izinCuti);

    izinCuti.$inject = ['DatatableService'];

    function izinCuti(ds) {
        var self = this;
        var controller = {};

        self.init = function (ctrl) {
            controller = ctrl;
            var tanggalColumnIndex = 5;
            var dt = ds.init("#izinCuti", "izinCuti/search", {
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
                        "data": "tglMulai",
                        "render": function (data) { return data ? moment(data).format("DD-MM-YYYY") : "-"; }
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
                            return "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning'><i class='fas fa-pencil-alt'></i></button> " +
                                "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger'><i class='fa fa-trash-alt'></i></button>"
                        }
                    }
                ],
                exportButtons: {
                    columns: [1, 2, 3, 4, 5, 6, 7],
                    title: "Izin Cuti"
                }
            });
            controller.datatable = dt;
            return dt;
        };

        return self;
    }

})();