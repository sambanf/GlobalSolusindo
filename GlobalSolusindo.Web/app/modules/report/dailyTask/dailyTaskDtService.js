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
        .factory('dailyTaskDtService', dailyTaskDtService);

    dailyTaskDtService.$inject = ['DatatableService', 'dailyTaskSearchService'];

    function dailyTaskDtService(ds, search) {
        var self = this;
        var controller = {};

        self.init = function (ctrl) {
            controller = ctrl;

            var titleColumnIndex = 1;
            var dt = ds.init("#dailyTask", "dailyTask/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10,
                    status: controller.model.statusName,
                    user_fk: controller.model.user_fk
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
                        "orderable": false,
                        "data": "user_fk"
                    },
                    {
                        "data": "userId"
                    },
                    {
                        "data": "userName"
                    },
                    {
                        "data": "kategoriJabatanTitle"
                    },
                    {
                        "data": "status",
                        "className": "text-center",
                        "render": function (data) {
                            var className = 'dot-online';
                            switch (data) {
                                case "Online":
                                    className = 'dot-online';
                                    break;
                                case "Offline":
                                    className = 'dot-offline';
                                    break;
                                case "Cuti":
                                    className = 'dot-cuti';
                                    break;
                                case "Unassigned":
                                    className = 'dot-unassigned';
                                    break;
                                default:
                            }
                            return "<span class='" + className + "'></span>";
                        }
                    }
                ],
                exportButtons: {
                    columns: [1, 2, 3, 4, 5],
                    title: "Daily Task"
                }
            });
            ctrl.datatable = dt;
            search.init(ctrl);
            return dt;
        };

        return self;
    }

})();