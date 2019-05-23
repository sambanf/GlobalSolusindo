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
            .state('app.checkInEntry', {
                url: '/checkInEntry/:id',
                templateUrl: 'app/modules/checkInEntry/checkInEntry.html',
                controller: 'CheckInEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Task Approval'
                }
            });
    }]);