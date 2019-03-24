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
        .factory('costDtService', costDtService);

    costDtService.$inject = ['DatatableService'];

    function costDtService(ds) {
        var self = this;
        var controller = {};

        self.init = function (ctrl) {
            controller = ctrl;
            var titleColumnIndex = 1;
            var dt = ds.init("#cost", "cost/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10,
                    sow_fk: controller.stateParam.id
                },
                order: [titleColumnIndex, "asc"],
                columns: [{
                    "orderable": false,
                    "data": "cost_pk"
                },
                {
                    "data": "kategoriCostTitle"
                },
                {
                    "data": "nominal"
                },
                {
                    "data": "deskripsi"
                },
                {
                    "data": "tanggal"
                },
                {
                    "orderable": false,
                    "className": "text-center",
                    "render": function (data) {
                        return "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning'><i class='fas fa-pencil-alt'></i></button> " +
                            "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger'><i class='fa fa-trash-alt'></i></button>"
                    }
                }
                ]
            });
            controller.datatable = dt;
            return dt;
        };

        return self;
    }

})();