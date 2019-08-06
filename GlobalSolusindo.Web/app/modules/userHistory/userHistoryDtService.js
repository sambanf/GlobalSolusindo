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
        .factory('userHistoryDtService', userHistory);

    userHistory.$inject = ['DatatableService', '$stateParams'];

    function userHistory(ds, $stateParams) {
        var self = this;
        var controller = {};
        self.init = function (ctrl) {
            var titleColumnIndex = 1;
            controller = ctrl;
            return ds.init("#userHistori", "userHistori/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10,
                    aset_fk: $stateParams.aset_fk,
                    SortName: 'tglSelesai',
                    SortDir: 'DESC'
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
                        "orderable": false,
                        "data": "asetHistori_pk"
                    },
                    {
                        "data": "userFullName"
                    },
                    {
                        "data": "userPosition"
                    },
                    {
                        "data": "tglMulai",
                        "render": function (data) { return data ? moment(data).format("DD-MM-YYYY") : "-"; }
                    },
                    {
                        "data": "tglSelesai",
                        "render": function (data) { return data ? moment(data).format("DD-MM-YYYY") : "-"; }
                    },
                    {
                        "data": "description"
                    },
                    {
                        "orderable": false,
                        "className": "text-center",
                        "render": function (data) {
                            //return "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning'><i class='fas fa-pencil-alt'></i></button> " +
                            //    "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger'><i class='fa fa-trash-alt'></i></button>";
                            ////"<button id='show' rel='tooltip' title='Detail' data-placement='left' class='btn btn-success'><i class='fa fa-info'></i></button> " +
                            return "<button id='show' rel='tooltip' title='Detail' data-placement='left' class='btn btn-success'><i class='fa fa-info'></i></button> "
                                //"<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning'><i class='fas fa-pencil-alt'></i></button> " +
                                //"<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger'><i class='fa fa-trash-alt'></i></button>"
                               
                        }
                    }
                ],
                ajaxCallback: function (response) {
                    controller.user = response.data.user;
                }//,
                //exportButtons: {
                //    columns: [1, 2, 3],
                //    title: "AsetHistori"
                //}
            });
        };
        return self;
    }

})();