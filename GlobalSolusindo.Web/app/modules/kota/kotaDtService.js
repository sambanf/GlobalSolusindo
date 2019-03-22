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
        .factory('kotaDtService', kota);

    kota.$inject = ['DatatableService'];

    function kota(ds) {
        var self = this;

        self.init = function (ctrl) {
            var titleColumnIndex = 1;
            return ds.init("#kota", "kota/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [{
                    "orderable": false,
                    "data": "kota_pk"
                },
                {
                    "data": "title"
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