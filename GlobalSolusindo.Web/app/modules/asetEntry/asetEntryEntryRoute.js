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
            .state('app.asetEntry', {
                url: '/asetEntry/:id',
                templateUrl: 'app/modules/asetEntry/asetEntry.html',
                controller: 'AsetEntryCtrl',
                controllerAs: 'asetVm',
                ncyBreadcrumb: {
                    label: 'Aset Entry'
                }
            });
    }]);