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
        .factory('deliveryAreaDtService', deliveryArea);

    deliveryArea.$inject = ['DatatableService'];

    function deliveryArea(ds) {
        var self = this;

        self.init = function (ctrl) {
            var titleColumnIndex = 1;
            return ds.init("#deliveryArea", "deliveryArea/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
                        "orderable": false,
                        "data": "deliveryArea_pk"
                    },
                    {
                        "data": "title"
                    },
                    {
                        "orderable": false,
                        "className": "text-center",
                        "render": function (data) {
                            return "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning'><i class='fas fa-pencil-alt'></i></button> " +
                                "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger'><i class='fa fa-trash-alt'></i></button>"
                        }
                    }
                ],
                exportButtons: {
                    columns: [1],
                    title: "Delivery Area"
                }
            });
        };
        return self;
    }

})();