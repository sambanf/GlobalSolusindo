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
            .state('app.btsImportExcel', {
                url: '/btsImportExcel',
                templateUrl: 'app/modules/btsImportExcel/btsImportExcel.html',
                controller: 'BTSImportExcelCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Import Site'
                }
            });
    }]);