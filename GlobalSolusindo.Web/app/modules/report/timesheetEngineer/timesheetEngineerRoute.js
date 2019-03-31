'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.timesheetEngineerList', {
                url: '/timesheetEngineerList',
                templateUrl: 'app/modules/report/timesheetEngineer/timesheetEngineer.html',
                controller: 'TimesheetEngineerCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Timesheet Engineer'
                }
            });
    }]);