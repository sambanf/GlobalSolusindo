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
        .factory('userDtService', user);

    user.$inject = ['DatatableService','HttpService'];

    function user(ds,http) {
        var self = this;

        var show = 'hidden';
        var view = 'hidden';
        var assetHistory = 'hidden';
        var inactivate = 'hidden';
        var dlt = 'hidden';

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {
            
            var updateRole = "User_Edit";
            var readRole = "User_ViewAll";
            var asetHistoryRole = "AsetHistori_ViewAll";
            var deleteRole = "User_Delete";
            var activateRole = "User_Activate";
            var deactivateRole = "User_Deactivate";
            
            if (setRole(res.data, updateRole)) {
                view = 'visible';
            }
            if (setRole(res.data, readRole)) {
                show = 'visible';
            }
            if (setRole(res.data, asetHistoryRole)) {
                assetHistory = 'visible';
            }
            if (setRole(res.data, deactivateRole)) {
                inactivate = 'visible';
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
            return ds.init("#user", "user/list", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
                        "orderable": false,
                        "data": "user_pk"
                    },
                    {
                        "data": "userCode"
                    },
                    {
                        "data": "name"
                    },
                    {
                        "data": "kategoriJabatanTitle"
                    },
                    //{
                    //    "data": "roleGroupTitle"
                    //},
                    {
                        "data": "noHP"
                    },
                    {
                        "data": "status_fk",
                        "render": function (status) {
                            switch (status) {
                                case 1:
                                    return "Active";
                                case 2:
                                    return "Inactive";
                                case 3:
                                    return "Deleted";
                                default:
                                    return "Active";
                            }
                        }
                    },
                    {
                        "data": "status_fk",
                        "orderable": false,
                        "className": "text-center",
                        "render": function (statusFk) {
                            var activateClassName = statusFk == 1 ? "btn btn-danger" : "btn btn-primary";
                            var activateTitle = statusFk == 1 ? "Deactivate User" : "Activate User";
                            var activateIcon = statusFk == 1 ? "fas fa-user-times" : "fas fa-user";

                            return "<button id='show' rel='tooltip' title='Detail' data-placement='left' class='showButton btn btn-success' style='visibility:"+ show +"'><i class='fa fa-info'></i></button> " +
                                "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning' style='visibility:" + view +"'><i class='fas fa-pencil-alt'></i></button> " +
                                "<button id='assetHistory' rel='tooltip' title='Asset History' data-placement='left' class='btn btn-success' style='visibility:" + assetHistory +"'><i class='fas fa-book'></i></button> " +
                                "<button id='inactivate' rel='tooltip' title='" + activateTitle + "' data-placement='left' class='" + activateClassName + "' style='visibility:" + inactivate +"'><i class='" + activateIcon + "'></i></button> " +
                                "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger' style='visibility:" + dlt +"'><i class='fa fa-trash-alt'></i></button>";
                        }
                    }
                ], 
                exportButtons: {
                    columns: [1, 2, 3, 4],
                    title: "Users"
                }
            });
        };
        return self;
    }
})();