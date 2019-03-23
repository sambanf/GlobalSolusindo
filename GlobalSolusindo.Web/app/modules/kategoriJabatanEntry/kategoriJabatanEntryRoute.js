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
            .state('app.kategoriJabatanEntry', {
                url: '/kategoriJabatanEntry/:id',
                templateUrl: 'app/modules/kategoriJabatanEntry/kategoriJabatanEntry.html',
                controller: 'KategoriJabatanEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'KategoriJabatan Entry'
                }
            });
    }]);