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
        .factory('roleDtService', role);

    role.$inject = ['DatatableService','HttpService'];

    function role(ds, http) {
        var self = this;

        var view = 'hidden';
        var show = 'hidden';
        var dlt = 'hidden';

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var readRole = "Role_Edit";
            var updateRole = "Role_Edit";
            var deleteRole = "Role_Delete";

            if (setRole(res.data, updateRole)) {
                view = 'visible';
            }
            if (setRole(res.data, deleteRole)) {
                dlt = 'visible';
            }
            if (setRole(res.data, readRole)) {
                show = 'visible';
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
            return ds.init("#role", "role/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [1, "asc"],
                columns: [
                    {
                        "orderable": false,
                        "data": "role_pk"
                    },
                    {
                        "data": "title"
                    },
                    {
                        "data": "description"
                    },
                    {
                        "orderable": false,
                        "className": "text-center",
                        "render": function (data) {
                            return "<button id='show' rel='tooltip' title='Detail' data-placement='left' class='btn btn-success' style='visibility:" + show +"'><i class='fa fa-info'></i></button> " +
                                "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning' style='visibility:" + view +"'><i class='fas fa-pencil-alt'></i></button> " +
                                "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger' style='visibility:" + dlt +"'><i class='fa fa-trash-alt'></i></button>"
                        }
                    }
                ],
                exportButtons: {
                    columns: [1, 2],
                    title: "Role"
                }
            });
        };
        return self;
    }

})();