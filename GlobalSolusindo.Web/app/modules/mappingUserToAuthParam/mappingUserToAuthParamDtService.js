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
        .factory('mappingUserToAuthParamDtService', MappingUserToAuthParam);

    MappingUserToAuthParam.$inject = ['DatatableService'];

    function MappingUserToAuthParam(ds) {
        var self = this;

        self.init = function (ctrl) {
            var titleColumnIndex = 1;
            return ds.init("#mappingUserToAuthParam", "authParam/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [{
                    "orderable": false,
                    "data": "authParam_pk"
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
                        return "<button id='view' title='View Users' data-placement='left' class='btn btn-success'>User</button>";
                    }
                }
                ]
            });
        }
        return self;
    }

})();