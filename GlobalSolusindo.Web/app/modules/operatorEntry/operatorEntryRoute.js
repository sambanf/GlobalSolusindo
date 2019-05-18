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
            .state('app.operatorEntry', {
                url: '/operatorEntry/:id',
                templateUrl: 'app/modules/operatorEntry/operatorEntry.html',
                controller: 'OperatorEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Operator Entry'
                }
            });
    }]);