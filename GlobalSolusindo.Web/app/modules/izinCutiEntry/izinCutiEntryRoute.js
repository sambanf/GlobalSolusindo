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
            .state('app.izinCutiEntry', {
                url: '/izinCutiEntry/:id',
                templateUrl: 'app/modules/izinCutiEntry/izinCutiEntry.html',
                controller: 'IzinCutiEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Pengajuan Izin Cuti'
                }
            });
    }]);