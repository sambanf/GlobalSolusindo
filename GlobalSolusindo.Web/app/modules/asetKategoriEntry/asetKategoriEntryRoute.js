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
            .state('app.asetKategoriEntry', {
                url: '/asetKategoriEntry/:id',
                templateUrl: 'app/modules/asetKategoriEntry/asetKategoriEntry.html',
                controller: 'AsetKategoriEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Aset Kategori Entry'
                }
            });
    }]);