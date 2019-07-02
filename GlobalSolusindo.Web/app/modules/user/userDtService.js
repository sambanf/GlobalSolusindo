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

    user.$inject = ['DatatableService'];

    function user(ds) {
        var self = this;

        self.init = function (ctrl) {
            var titleColumnIndex = 1;
            return ds.init("#user", "user/search", {
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

                            return "<button id='show' rel='tooltip' title='Detail' data-placement='left' class='btn btn-success'><i class='fa fa-info'></i></button> " +
                                "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning'><i class='fas fa-pencil-alt'></i></button> " +
                                "<button id='assetHistory' rel='tooltip' title='Asset History' data-placement='left' class='btn btn-success'><i class='fas fa-info'></i></button> " +
                                "<button id='inactivate' rel='tooltip' title='" + activateTitle + "' data-placement='left' class='" + activateClassName + "'><i class='" + activateIcon + "'></i></button> " +
                                "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger'><i class='fa fa-trash-alt'></i></button>";
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