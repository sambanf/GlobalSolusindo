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
            .state('app.costKategoriEntry', {
                url: '/costKategoriEntry/:id',
                templateUrl: 'app/modules/costKategoriEntry/costKategoriEntry.html',
                controller: 'CostKategoriEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Cost Kategori Entry'
                }
            });
    }]);