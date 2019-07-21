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
        .factory('mappingUserToAuthParamEntryDtService', mappingUserToAuthParamEntryDtService);

    mappingUserToAuthParamEntryDtService.$inject = ['DatatableService','HttpService'];

    function mappingUserToAuthParamEntryDtService(ds, http) {
        var self = this;
        var controller;
        var datatable;

        var dlt = 'hidden';

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var deleteRole = "MappingUserToAuthParam_Delete";

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

        self.reloadDatatable = function () {
            console.log(controller);
            controller.datatable.draw();
            console.log('finish');
        };

        self.init = function (ctrl) {
            controller = ctrl;
            var authParam_pk = ctrl.stateParam.id;

            var titleColumnIndex = 1;
            var dt = ds.init("#mappingUserToAuthParam", "mappingUserToAuthParam/search", {
                extendRequestData: {
                    authParam_pk: authParam_pk,
                    pageIndex: 2,
                    pageSize: 5
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
                        "orderable": false,
                        "data": "authParam_pk"
                    },
                    {
                        "orderable": false,
                        "data": "user_pk"
                    },
                    {
                        "data": "userCode"
                    },
                    {
                        "data": "userUsername"
                    },
                    {
                        "data": "userName"
                    },
                    {
                        "data": "kategoriJabatanName"
                    },
                    {
                        "orderable": false,
                        "className": "text-center",
                        "render": function (data) {
                            return "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger' style='visibility:" + dlt +"'><i class='fa fa-trash-alt'></i></button>";
                        }
                    }
                ]
            });

            ctrl.userDt = dt;
            return dt;
        };
        return self;
    }

})();