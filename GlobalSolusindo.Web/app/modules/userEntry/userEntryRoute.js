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
            .state('app.userEntry', {
                url: '/userEntry/:id',
                templateUrl: 'app/modules/userEntry/userEntry.html',
                controller: 'UserEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'User Entry'
                }
            });
    }]);