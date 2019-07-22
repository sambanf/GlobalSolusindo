(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.controller:userEntryCtrl
     * @description
     * # dashboardCtrl
     * Controller of the app
     */

    angular
        .module('global-solusindo')
        .controller('TimesheetEngineerDetailCtrl', TimesheetEngineerDetailCtrl);

    TimesheetEngineerDetailCtrl.$inject = ['$scope', '$stateParams', '$state', 'FormControlService', 'timesheetEngineerDetailDtService', 'timesheetEngineerDetailViewService', 'select2Service','HttpService'];

    function TimesheetEngineerDetailCtrl($scope, sParam, $state, formControlService, dtService, timesheetEngineerDetailViewService, select2Service, http) {
        var self = this;
        self.stateParam = sParam;
        self.model = {};
        self.formData = {};

        dtService.init(self);
        timesheetEngineerDetailViewService.init(self);

        function getMonths() {
            select2Service.liveSearch("report/timesheetDetail", {
                selector: '#bulan',
                valueMember: 'bulan',
                displayMember: 'bulanName',
                extendRequestData: {
                    user_fk: sParam.id
                },
                callback: function (data) {
                    self.formData.months = data;
                },
                onSelected: function (data) { 
                    self.model.bulan = data.bulan;
                    self.datatable.draw(); 
                }
            });
        }

        function getYears() {
            select2Service.liveSearch("report/timesheetDetail", {
                selector: '#tahun',
                valueMember: 'tahun',
                displayMember: 'tahun',
                extendRequestData: {
                    user_fk: sParam.id
                },
                callback: function (data) {
                    self.formData.years = data;
                },
                onSelected: function (data) {
                    self.model.tahun = data.tahun;
                    self.datatable.draw();
                }
            });
        }

        getMonths();
        getYears();
        
        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var readRole = "AsetHistori_ViewAll";
            
            document.getElementById("asetHistoriButton").style.visibility = "hidden";

            setRole(res.data, "asetHistoriButton", readRole);

        })
        
        function setRole(roles, control, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            if (role) {
                document.getElementById(control).style.visibility = "visible";
            }
            else {
                document.getElementById(control).style.visibility = "hidden";
            }

        }

        return self;
    }
})();