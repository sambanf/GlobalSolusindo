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
            .state('app.taskEngineerDetail', {
                url: '/taskEngineerDetail/:id',
                templateUrl: 'app/modules/report/taskEngineerDetail/taskEngineerDetail.html',
                controller: 'TaskEngineerDetailCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Task Engineer Detail'
                }
            });
    }]);