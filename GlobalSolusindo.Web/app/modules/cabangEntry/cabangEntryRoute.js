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
            .state('app.cabangEntry', {
                url: '/cabangEntry/:id',
                templateUrl: 'app/modules/cabangEntry/cabangEntry.html',
                controller: 'CabangEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Cabang Entry'
                }
            });
    }]);