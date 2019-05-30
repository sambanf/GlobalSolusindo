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
            .state('app.userImportExcel', {
                url: '/userImportExcel',
                templateUrl: 'app/modules/userImportExcel/userImportExcel.html',
                controller: 'UserImportExcelCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Import User'
                }
            });
    }]);