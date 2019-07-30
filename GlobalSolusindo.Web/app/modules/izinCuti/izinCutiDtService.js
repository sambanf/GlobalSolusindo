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

    izinCuti.$inject = ['DatatableService', 'HttpService', "userInfoService"];

    function izinCuti(ds, http, userInfo) {
        var self = this;
        var controller = {};

        var view = 'hidden';
        var dlt = 'hidden';

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var updateRole = "IzinCuti_Edit";
            var deleteRole = "IzinCuti_Delete";

            if (setRole(res.data, updateRole)) {
                view = 'visible';
            }
            if (setRole(res.data, deleteRole)) {
                dlt = 'visible';
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
        var userId = JSON.parse(userInfo.getUserInfo()).user_pk;
        self.init = function (ctrl) {
            controller = ctrl;
            var tanggalColumnIndex = 5;
            var dt = ds.init("#izinCuti", "izinCuti/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 20,
                    userId: userId
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
                            return "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning' style='visibility:" + view +"'><i class='fas fa-pencil-alt'></i></button> " +
                                "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger' style='visibility:" + dlt +"'><i class='fa fa-trash-alt'></i></button>"
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