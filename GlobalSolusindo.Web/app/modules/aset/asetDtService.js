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
        .factory('asetDtService', aset);

    aset.$inject = ['DatatableService','HttpService'];

    function aset(ds, http) {
        var self = this;

        var show = 'hidden';
        var view = 'hidden';
        var userHistory = 'hidden';
        var dlt = 'hidden';

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var updateRole = "Aset_Edit";
            var readRole = "Aset_ViewAll";
            var deleteRole = "Aset_Delete";
            var userHistoryRole = "UserHistori_ViewAll";

            if (setRole(res.data, updateRole)) {
                view = 'visible';
            }
            if (setRole(res.data, readRole)) {
                show = 'visible';
            }
            if (setRole(res.data, userHistoryRole)) {
                userHistory = 'visible';
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
            return ds.init("#aset", "aset/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
                        "orderable": false,
                        "data": "aset_pk"
                    },
                    {
                        "data": "asetId"
                    },
                    {
                        "data": "kategoriAsetName"
                    },
                    {
                        "data": "name"
                    },
                    {
                        "data": "status",
                        "render": function (data) {
                            if(data.length>0)
                                return "Not Available"
                            else
                                return "Available"
                        }
                    },
                    {
                        "orderable": false,
                        "className": "text-center",
                        "render": function (data) {
                            return "<button id='show' rel='tooltip' title='Detail' data-placement='left' class='btn btn-success' style='visibility:" + show +"'><i class='fa fa-info'></i></button> " +
                                "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning' style='visibility:" + view +"'><i class='fas fa-pencil-alt'></i></button> " +
                                "<button id='userHistory' rel='tooltip' title='Asset History' data-placement='left' class='btn btn-success' style='visibility:" + userHistory +"'><i class='fas fa-book'></i></button> " +
                                "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger' style='visibility:" + dlt +"'><i class='fa fa-trash-alt'></i></button>"
                        }
                    }
                ],
                exportButtons: {
                    columns: [1, 2, 3],
                    title: "Aset"
                }
            });
        };
        return self;
    }

})();