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
            .state('app.menuEntry', {
                url: '/menuEntry/:id',
                templateUrl: 'app/modules/menuEntry/menuEntry.html',
                controller: 'MenuEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Menu Entry'
                }
            });
    }]);