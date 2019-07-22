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

    izinCutiApprovalDtService.$inject = ['DatatableService','HttpService'];

    function izinCutiApprovalDtService(ds, http) {
        var self = this;
        var controller = {};

        var view = 'hidden';

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var readRole = "IzinCutiApproval_ViewAll";

            if (setRole(res.data, readRole)) {
                view = 'visible';
            }
        })



        function setRole(roles, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            return role;
        }

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
                            return "<button id='view' rel='tooltip' title='Detail' data-placement='left' class='btn btn-info' style='visibility:" + view +"'>Detail</button>";
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