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
        .factory('assetDtService', asset);

    asset.$inject = ['DatatableService'];

    function asset(ds) {
        var self = this;

        self.init = function (ctrl) {
            return ds.init("#asset", "asset/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [1, "asc"],
                columns: [{
                    "orderable": false,
                    "data": "asset_pk"
                },
                {
                    "data": "asset_code"
                },
                {
                    "data": "created_date"
                },
                {
                    "data": "catrgory"
                },
                {
                    "data": "name"
                },
                {
                    "orderable": false,
                    "className": "text-center",
                    "render": function (data) {
                        return "<button id='show' rel='tooltip' title='Detail' data-placement='left' class='btn btn-success'><i class='fa fa-info'></i></button> " +
                            "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning'><i class='fas fa-pencil-alt'></i></button> " +
                            "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger'><i class='fa fa-trash-alt'></i></button>"
                    }
                }
                ]
            });
        }
        return self;
    }

})();