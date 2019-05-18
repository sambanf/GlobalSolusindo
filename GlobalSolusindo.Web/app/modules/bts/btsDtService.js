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
        .factory('btsDtService', bts);

    bts.$inject = ['DatatableService', 'btsMapService'];

    function bts(ds, mapService) {
        var self = this;

        self.init = function (ctrl) {
            var titleColumnIndex = 1;
            var dt = ds.init("#bts", "bts/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
                        "orderable": false,
                        "data": "bts_pk"
                    },
                    {
                        "data": "name"
                    },
                    {
                        "data": "operatorTitle"
                    },
                    {
                        "data": "cellId"
                    },
                    {
                        "data": "statusBtsTitle"
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
                ],
                exportButtons: {
                    columns: [1, 2, 3, 4],
                    title: "BTS"
                },
                ajaxCallback: function (response) {
                    var cities = [];
                    var marker = [];

                    if (response && response.data && response.data.records) {
                        response.data.records.forEach(function (bts) {
                            marker.push(bts.name);
                            marker.push(parseFloat(bts.latitude));
                            marker.push(parseFloat(bts.longitude));
                            marker.push(5);

                            cities.push(marker);
                            marker = [];
                        });

                        mapService.init(cities);
                    }
                }
            });

            return dt;
        };
        return self;
    }

})();