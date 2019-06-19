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
            .state('app.poImportExcel', {
                url: '/poImportExcel',
                templateUrl: 'app/modules/po/poImportExcel.html',
                controller: 'POImportExcelCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Import PO'
                }
            });
    }]);