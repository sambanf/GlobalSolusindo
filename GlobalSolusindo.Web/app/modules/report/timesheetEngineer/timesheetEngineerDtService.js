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
        .factory('timesheetEngineerDtService', timesheetEngineerDtService);

    timesheetEngineerDtService.$inject = ['DatatableService','HttpService'];

    function timesheetEngineerDtService(ds, http) {
        var self = this;
        var controller = {};

        var view = 'hidden';
       
        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var updateRole = "TimesheetEngineer_ViewAll";

            if (setRole(res.data, updateRole)) {
                view = 'visible';
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


        self.dtCallback = function (dt) {
            self.datatable = dt.DataTable;
        };

        //instantiate DatatableService
        self.dtService = ds;

        self.dtService.param = {
            user_pk: 0
        };
        self.init = function (ctrl) {
            controller = ctrl;
            console.log(controller.model);
            controller.search = function (){
                if(controller.model)
                    self.dtService.param.user_pk = controller.model.user_pk;
                // console.log(self.dtService.param);
                controller.datatable.draw();
            }

            var titleColumnIndex = 1;
           var dt = self.dtService.init("#timesheetEngineer", "user/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10,
                    userId: self.userId,
                    name:self.name
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
                        "orderable": false,
                        "data": "user_pk"
                    },
                    {
                        "data": "userCode"
                    },
                    {
                        "data": "name"
                    },
                    {
                        "data": "kategoriJabatanTitle"
                    },
                    {
                        "orderable": false,
                        "className": "text-center",
                        "render": function (data) {
                            return "<button id='view' rel='tooltip' title='Detail' data-placement='left' class='btn btn-info' style='visibility:" + view +"'>Detail</button>";
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