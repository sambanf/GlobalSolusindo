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
        .factory('costDtService', costDtService);

    costDtService.$inject = ['DatatableService','HttpService'];

    function costDtService(ds, http) {
        var self = this;
        var controller = {};

        var view = 'hidden';
        var dlt = 'hidden';

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var updateRole = "Cost_Edit";
            var deleteRole = "Cost_Delete";

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

        self.init = function (ctrl) {
            controller = ctrl;
            var titleColumnIndex = 1;
            var dt = ds.init("#cost", "cost/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10,
                    sow_fk: controller.stateParam.id
                },
                order: [titleColumnIndex, "asc"],
                columns: [{
                    "orderable": false,
                    "data": "cost_pk"
                },
                {
                    "data": "kategoriCostTitle"
                },
                {
                    "data": "nominal"
                },
                {
                    "data": "deskripsi"
                },
                {
                    "data": "tanggal"
                },
                {
                    "orderable": false,
                    "className": "text-center",
                    "render": function (data) {
                        return "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning' style='visibility:" + view +"'><i class='fas fa-pencil-alt'></i></button> " +
                            "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger' style='visibility:" + dlt +"'><i class='fa fa-trash-alt'></i></button>"
                    }
                }
                ]
            });
            controller.datatable = dt;
            return dt;
        };

        self.init = function (ctrl) {
            controller = ctrl;
            var titleColumnIndex = 1;
            var dt = ds.init("#cost", "cost/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10,
                    sow_fk: controller.stateParam.id
                },
                order: [titleColumnIndex, "asc"],
                columns: [{
                    "orderable": false,
                    "data": "cost_pk"
                },
                {
                    "data": "kategoriCostTitle"
                },
                {
                    "data": "nominal"
                },
                {
                    "data": "deskripsi"
                },
                {
                    "data": "tanggal"
                },
                {
                    "orderable": false,
                    "className": "text-center",
                    "render": function (data) {
                        return "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning' style='visibility:" + view + "'><i class='fas fa-pencil-alt'></i></button> " +
                            "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger' style='visibility:" + dlt + "'><i class='fa fa-trash-alt'></i></button>"
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