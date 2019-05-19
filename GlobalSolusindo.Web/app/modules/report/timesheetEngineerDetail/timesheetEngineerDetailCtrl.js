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

    TimesheetEngineerDetailCtrl.$inject = ['$scope', '$stateParams', '$state', 'FormControlService', 'timesheetEngineerDetailDtService', 'timesheetEngineerDetailViewService', 'select2Service'];

    function TimesheetEngineerDetailCtrl($scope, sParam, $state, formControlService, dtService, timesheetEngineerDetailViewService, select2Service) {
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

        return self;
    }
})();