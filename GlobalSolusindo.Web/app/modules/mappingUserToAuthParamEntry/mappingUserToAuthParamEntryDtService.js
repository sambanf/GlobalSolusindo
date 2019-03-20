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
        .factory('MappingUserToAuthParamEntryDtService', MappingUserToAuthParamEntryDtService);

    MappingUserToAuthParamEntryDtService.$inject = ['DatatableService'];

    function MappingUserToAuthParamEntryDtService(ds) {
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
            var roleGroup_pk = ctrl.stateParam.id;

            var titleColumnIndex = 1;
            datatable = ds.init("#mappingUserToAuthParamEntry", "MappingUserToAuthParam/search", {
                extendRequestData: {
                    roleGroup_pk: roleGroup_pk,
                    pageIndex: 2,
                    pageSize: 5
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
                        "orderable": false,
                        "data": "roleGroup_pk"
                    },
                    {
                        "orderable": false,
                        "data": "user_pk"
                    },
                    {
                        "data": "username"
                    },
                    {
                        "data": "name"
                    },
                    {
                        "data": "position"
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

            return datatable;
        };

        return self;
    }

})();