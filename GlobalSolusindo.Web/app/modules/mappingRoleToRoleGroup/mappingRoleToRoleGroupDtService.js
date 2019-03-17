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
        .factory('mappingRoleToRoleGroupDtService', mappingRoleToRoleGroup);

    mappingRoleToRoleGroup.$inject = ['DatatableService'];

    function mappingRoleToRoleGroup(ds) {
        var self = this;

        self.init = function (ctrl) {
            var titleColumnIndex = 1;
            return ds.init("#mappingRoleToRoleGroup", "roleGroup/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [{
                    "orderable": false,
                    "data": "roleGroup_pk"
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
                        return "<button id='view'   title='View Role' data-placement='left' class='btn btn-success'>Role</button>";
                    }
                }
                ]
            });
        }
        return self;
    }

})();