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
        .factory('myTaskListDtService', myTaskListDtService);

    myTaskListDtService.$inject = ['DatatableService','HttpService'];

    function myTaskListDtService(ds, http) {
        var self = this;
        var controller = {};

        var view = 'hidden';

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var updateRole = "MyTaskList_ViewAll";

            if (setRole(res.data, updateRole)) {
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
            var titleColumnIndex = 1;
            var dt = ds.init("#myTaskList", "myTaskList/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
                        "orderable": false,
                        "data": "checkIn_pk"
                    },
                    {
                        "data": "userName"
                    },
                    {
                        "data": "kategoriJabatanTitle"
                    },
                    {
                        "data": "sowName"
                    },
                    {
                        "data": "btsName"
                    },
                    {
                        "data": "btsAddress"
                    },
                    {
                        "data": "checkInTime",
                        "render": function (data) { return data ? moment(data).format("DD-MM-YYYY HH:mm") : "-"; }
                    },
                    {
                        "data": "waktuCheckOut",
                        "render": function (data) { return data ? moment(data).format("DD-MM-YYYY HH:mm") : "-"; }
                    },
                    {
                        "data": "fileSubmitted"
                    },
                    {
                        "data": "status"
                    },
                    {
                        "orderable": false,
                        "className": "text-center",
                        "render": function (data) {
                            return "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning' style='visibility:" + view +"'><i class='fas fa-pencil-alt'></i></button> ";
                        }
                    }
                ],
                exportButtons: {
                    columns: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                    title: "MyTaskList"
                }
            });
            controller.datatable = dt;
            return dt;
        };

        return self;
    }

})();