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
        .factory('timesheetEngineerDetailDtService', timesheetEngineerDetailDtService);

    timesheetEngineerDetailDtService.$inject = ['DatatableService','HttpService'];

    function timesheetEngineerDetailDtService(ds, http) {
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

        self.init = function (ctrl) {
            controller = ctrl;
            var titleColumnIndex = 1;
            var user_fk = controller.stateParam.id;
            var dt = ds.init("#timesheetEngineerDetail", "report/timesheetDetail", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10,
                    user_fk: user_fk,
                    bulan: controller.model.bulan,
                    tahun: controller.model.tahun
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
                        "orderable": false,
                        "data": "user_fk"
                    },
                    {
                        "data": "bulan",
                        "visible": false,
                    },
                    {
                        "data": "bulanName"
                    },
                    {
                        "data": "tahun"
                    },
                    {
                        "orderable": false,
                        "className": "text-center",
                        "render": function (data) {
                            return "<button id='view' rel='tooltip' title='Detail' data-placement='left' class='btn btn-info' style='visibility:" + view + "'>Detail</button>";
                            return "<button id='download' rel='tooltip' title='Detail' data-placement='left' class='btn btn-info' style='visibility:" + view + "'>Download</button>"
                        }
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