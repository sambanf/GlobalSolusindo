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

    bts.$inject = ['DatatableService', 'btsMapService','HttpService'];

    function bts(ds, mapService, http) {
        var self = this;

        var show = 'hidden';
        var view = 'hidden';
        var assetHistory = 'hidden';
        var inactivate = 'hidden';
        var dlt = 'hidden';

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var updateRole = "BTS_Edit";
            var readRole = "BTS_ViewAll";
            var deleteRole = "BTS_Delete";

            if (setRole(res.data, updateRole)) {
                view = 'visible';
            }
            if (setRole(res.data, readRole)) {
                show = 'visible';
            }
            if (setRole(res.data, deleteRole)) {
                dlt = 'visible';
            }
        })

        function setRole(roles, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            return role;
        }
        
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
                            return "<button id='show' rel='tooltip' title='Detail' data-placement='left' class='btn btn-success' style='visibility:" + show +"'><i class='fa fa-info'></i></button> " +
                                "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning' style='visibility:" + view +"'><i class='fas fa-pencil-alt'></i></button> " +
                                "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger' style='visibility:" + dlt +"'><i class='fa fa-trash-alt'></i></button>"
                        }
                    }
                ],
                exportButtons: {
                    columns: [1, 2, 3, 4],
                    title: "Site"
                },
                ajaxCallback: function (response) {
                    //var cities = [];
                    //var marker = [];

                    //if (response && response.data && response.data.records) {
                    //    response.data.records.forEach(function (bts) {
                             
                    //        marker.push(bts.name);
                    //        marker.push(parseFloat(bts.latitude));
                    //        marker.push(parseFloat(bts.longitude));
                    //        marker.push(5);
                    //        marker.push(bts.operatorTitle);
                    //        marker.push(bts.statusBtsTitle);
                    //        cities.push(marker);
                    //        marker = [];
                    //    });

                    //    mapService.init(cities);
                    //}
                }
            });

            return dt;
        };
        return self;
    }

})();