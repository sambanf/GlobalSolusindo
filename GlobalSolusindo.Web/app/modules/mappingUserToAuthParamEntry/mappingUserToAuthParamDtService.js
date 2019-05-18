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

    mappingUserToAuthParamEntryDtService.$inject = ['DatatableService'];

    function mappingUserToAuthParamEntryDtService(ds) {
        var self = this;
        var controller;
        var datatable;

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
                            return "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger'><i class='fa fa-trash-alt'></i></button>";
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