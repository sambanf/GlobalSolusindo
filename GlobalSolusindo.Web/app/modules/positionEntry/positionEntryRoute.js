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
            .state('app.positionEntry', {
                url: '/positionEntry/:id',
                templateUrl: 'app/modules/positionEntry/positionEntry.html',
                controller: 'PositionEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Position Entry'
                }
            });
    }]);