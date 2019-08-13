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
        .factory('sowDtService', sow);

    sow.$inject = ['DatatableService','HttpService'];

    function sow(ds, http) {
        var self = this;
        var controller = {};

        var show = 'hidden';
        var view = 'hidden';
        var dlt = 'hidden';
        var approval = 'hidden';
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

            http.get('dashboard/getRole', {
                dashboard: ''
            }, true).then(function (res) {

                var readRole = "SOW_ViewAll";
                var updateRole = "SOW_Edit";
                var deleteRole = "SOW_Delete";
                var approvalRole = "SOW_Approval";

                if (setRole(res.data, updateRole)) {
                    view = 'visible';
                }
                if (setRole(res.data, deleteRole)) {
                    dlt = 'visible';
                }
                if (setRole(res.data, readRole)) {
                    show = 'visible';
                }
                if (setRole(res.data, approvalRole)) {
                    approval = 'visible';
                }

                controller = ctrl;
                var sortColumnIndex = 3;
                var dt = ds.init("#sow", "sow/search", {
                    extendRequestData: {
                        pageIndex: 1,
                        pageSize: 10
                    },
                    order: [sortColumnIndex, "desc"],
                    columns: [
                        {
                            "orderable": false,
                            "data": "sow_pk"
                        },
                        {
                            "data": "sowName"
                        },
                        {
                            "data": "btsName"
                        },
                        {
                            "data": "tglMulai",
                            "render": function (data) { return data ? moment(data).format("DD-MM-YYYY") : "-"; }
                        },
                        {
                            "data": "sowStatusTitle"
                        },
                        {
                            "orderable": false,
                            "className": "text-center",
                            "render": function (data) {
                                return "<button id='info' rel='tooltip' title='Detail' data-placement='left' class='btn btn-success' style='visibility:" + show + "'><i class='fa fa-info'></i></button> " +
                                    "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning' style='visibility:" + view + "'><i class='fas fa-pencil-alt'></i></button> " +
                                    "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger' style='visibility:" + dlt + "'><i class='fa fa-trash-alt'></i></button>"
                            }
                        },
                        {
                            "orderable": false,
                            "className": "text-center",
                            "render": function (data) {
                                return "<button id='approval' rel='tooltip' title='Approval' data-placement='left' class='btn btn-info' style='visibility:" + approval + "'>Approval</button>";
                            }
                        }
                    ]
                });
                controller.datatable = dt;
                return dt;
            })

        };

        return self;
    }

})();