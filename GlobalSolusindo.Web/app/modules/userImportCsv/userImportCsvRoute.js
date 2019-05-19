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
            .state('app.userImportCsv', {
                url: '/userImportCsv',
                templateUrl: 'app/modules/userImportCsv/userImportCsv.html',
                controller: 'UserImportCsvCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Import User'
                }
            });
    }]);