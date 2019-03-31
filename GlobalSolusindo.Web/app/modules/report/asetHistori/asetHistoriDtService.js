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
        .factory('asetHistoriDtService', asetHistoriDtService);

    asetHistoriDtService.$inject = ['DatatableService'];

    function asetHistoriDtService(ds) {
        var self = this;
        var controller = {};

        self.init = function (ctrl) {
            controller = ctrl;
            var titleColumnIndex = 1;
            var dt = ds.init("#asetHistori", "asetHistori/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10,
                    userDetail_fk: controller.stateParam.userDetail_pk
                },
                order: [titleColumnIndex, "asc"],
                columns: [{
                    "orderable": false,
                    "data": "asetHistori_pk"
                },
                {
                    "data": "tglMulai"
                },
                {
                    "data": "tglSelesai"
                },
                {
                    "data": "asetKategoriTitle"
                },
                {
                    "data": "asetName"
                }
                ],
                ajaxCallback: function (response) {
                    controller.user = response.data.user;
                }
            });
            controller.datatable = dt;
            return dt;
        };

        return self;
    }

})();