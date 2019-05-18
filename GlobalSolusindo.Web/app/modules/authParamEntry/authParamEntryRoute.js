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
            .state('app.authParamEntry', {
                url: '/authParamEntry/:id',
                templateUrl: 'app/modules/authParamEntry/authParamEntry.html',
                controller: 'AuthParamEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Auth Param Entry'
                }
            });
    }]);