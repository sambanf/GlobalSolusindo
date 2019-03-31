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

    TimesheetEngineerDetailCtrl.$inject = ['$scope', '$stateParams', '$state', 'FormControlService', 'timesheetEngineerDetailDtService', 'timesheetEngineerDetailViewService'];

    function TimesheetEngineerDetailCtrl($scope, sParam, $state, formControlService, dtService, timesheetEngineerDetailViewService) {
        var self = this;
        self.stateParam = sParam;

        dtService.init(self);
        timesheetEngineerDetailViewService.init(self);

        return self;
    }
})();