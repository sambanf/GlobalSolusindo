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
        .factory('activitiesDtService', activitiesDtService);

    activitiesDtService.$inject = ['DatatableService'];

    function activitiesDtService(ds) {
        var self = this;
        var controller = {};

        self.init = function (ctrl) {
            controller = ctrl;
            var titleColumnIndex = 1;
            var dt = ds.init("#activities", "report/activities", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10,
                    user_fk: controller.stateParam.id,
                    bulan: controller.stateParam.bulan
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
                        "orderable": false,
                        "data": "user_fk"
                    },
                    {
                        "data": "tanggal"
                    },
                    {
                        "data": "jam"
                    },
                    {
                        "data": "aktifitas"
                    },
                    {
                        "data": "approvedBy"
                    }
                ],
                exportButtons: {
                    columns: [1, 2, 3, 4],
                    title: "Activities"
                },
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