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
        .factory('taskEngineerDtService', taskEngineerDtService);

    taskEngineerDtService.$inject = ['DatatableService'];

    function taskEngineerDtService(ds) {
        var self = this;
        var controller = {};

        //instantiate DatatableService
        self.dtService = ds;

        self.dtService.param = {
            user_fk: 0
        };

        self.init = function (ctrl) {
            controller = ctrl;
            console.log(controller.model);
            controller.search = function (){
                if(controller.model){
                    self.dtService.param.user_fk = controller.model.user_fk;
                }
                // console.log(self.dtService.param);
                controller.datatable.draw();
            }

            var titleColumnIndex = 1;
            var dt = ds.init("#taskEngineer", "taskEngineer/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
                        "orderable": false,
                        "data": "sowAssign_fk"
                    },
                    {
                        "data": "assignNumber"
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
                        "data": "btsName"
                    },
                    {
                        "data": "taskStatus"
                    },
                    {
                        "orderable": false,
                        "className": "text-center",
                        "render": function (data) {
                            return "<button id='view' rel='tooltip' title='Detail' data-placement='left' class='btn btn-info'>Detail</button>";
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