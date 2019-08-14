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
        .factory('asetHistoriDtService', asetHistori);

    asetHistori.$inject = ['DatatableService', '$stateParams','HttpService'];

    function asetHistori(ds, $stateParams, http) {
        var self = this;
        var controller = {};

        var show = 'hidden';
        var view = 'hidden';
        var dlt = 'hidden';

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var readRole = "AsetHistori_ViewAll";
            var updateRole = "AsetHistori_Edit";
            var deleteRole = "AsetHistori_Delete";

            if (setRole(res.data, readRole)) {
                show = 'visible';
            }
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
            var titleColumnIndex = 1;
            controller = ctrl;
            return ds.init("#asetHistori", "asetHistori/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10,
                    user_fk: $stateParams.user_fk,
                    SortName:'tglSelesai',
                    SortDir:'ASC'
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
                        "orderable": false,
                        "data": "asetHistori_pk"
                    },
                    {
                        "data": "asetKategoriTitle"
                    },
                    {
                        "data": "asetID"
                    },
                    {
                        "data": "asetName"
                    },
                    {
                        "data": "tglMulai",
                        "render": function (data) { return data ? moment(data).format("DD-MM-YYYY") : "-"; }
                    },
                    {
                        "data": "tglSelesai",
                        "render": function (data) { return data ? moment(data).format("DD-MM-YYYY") : "-"; }
                    },
                    {
                        "data": "description"
                    },
                    {
                        "data": "tglSelesai",
                        "orderable": false,
                        "className": "text-center",
                        "render": function (data) {
                            if (data == null) { return "<button id='return' rel='tooltip' title='return' data-placement='left' class='btn btn-success'><i class='fa fa-arrow-left'></i></button> " }
                            else
                            { return "" }

                        }
                    },
                    {
                        "orderable": false,
                        "className": "text-center",
                        "render": function (data) {
                            return "<button id='show' rel='tooltip' title='Detail' data-placement='left' class='btn btn-success' style='visibility:" + show + "'><i class='fa fa-info'></i></button> " +
                                "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning' style='visibility:" + view +"'><i class='fas fa-pencil-alt'></i></button> " +
                                "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger' style='visibility:" + dlt +"'><i class='fa fa-trash-alt'></i></button>"
                               
                        }
                    }
                ],
                ajaxCallback: function (response) {
                    controller.user = response.data.user;
                },
                exportButtons: {
                    columns: [1, 2, 3],
                    title: "AsetHistori"
                }
            });
        };
        return self;
    }

})();