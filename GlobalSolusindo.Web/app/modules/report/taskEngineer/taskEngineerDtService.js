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

    taskEngineerDtService.$inject = ['DatatableService','HttpService'];

    function taskEngineerDtService(ds, http) {
        var self = this;
        var controller = {};

        var view = 'hidden';
        
        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var updateRole = "TaskEngineer_ViewAll";
        
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
                    pageSize: 10,
                    userId: self.userId,
                    name:self.name
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
                        "orderable": false,
                        "data": "sowAssign_fk"
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