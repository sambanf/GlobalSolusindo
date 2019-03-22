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
            .state('app.areaEntry', {
                url: '/areaEntry/:id',
                templateUrl: 'app/modules/areaEntry/areaEntry.html',
                controller: 'AreaEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Area Entry'
                }
            });
    }]);