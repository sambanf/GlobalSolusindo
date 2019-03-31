'use strict';

/**
 * @ngdoc function
 * @name app.route:orderRoute
 * @description
 * # dashboardRoute
 * Route of the app
 */

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.timesheetEngineerDetail', {
                url: '/timesheetEngineerDetail/:id',
                templateUrl: 'app/modules/report/timesheetEngineerDetail/timesheetEngineerDetail.html',
                controller: 'TimesheetEngineerDetailCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Timesheet Detail'
                }
            });
    }]);