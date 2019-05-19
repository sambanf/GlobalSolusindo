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
            .state('app.kotaEntry', {
                url: '/kotaEntry/:id',
                templateUrl: 'app/modules/kotaEntry/kotaEntry.html',
                controller: 'KotaEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Kota Entry'
                }
            });
    }]);