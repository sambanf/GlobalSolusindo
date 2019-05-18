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
            .state('app.btsEntry', {
                url: '/btsEntry/:id',
                templateUrl: 'app/modules/btsEntry/btsEntry.html',
                controller: 'BTSEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'BTS Entry'
                }
            });
    }]);