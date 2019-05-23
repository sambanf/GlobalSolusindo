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
            .state('app.myTaskListEntry', {
                url: '/myTaskListEntry/:id',
                templateUrl: 'app/modules/myTaskListEntry/myTaskListEntry.html',
                controller: 'MyTaskListEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Task Approval'
                }
            });
    }]);