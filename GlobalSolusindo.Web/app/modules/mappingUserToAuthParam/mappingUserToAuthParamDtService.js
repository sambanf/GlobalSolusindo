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
        .factory('mappingUserToAuthParamDtService', mappingUserToAuthParam);

    mappingUserToAuthParam.$inject = ['DatatableService'];

    function mappingUserToAuthParam(ds) {
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
                        return "<button id='view' rel='tooltip' title='View' data-placement='left' class='btn btn-primary'>User</button>"
                    }
                }
                ]
            });
            
        };
        return self;
    }

})();