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
            .state('app.sowImportExcel', {
                url: '/sowImportExcel',
                templateUrl: 'app/modules/sowImportExcel/sowImportExcel.html',
                controller: 'SOWImportExcelCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Import SOW'
                }
            });
    }]);