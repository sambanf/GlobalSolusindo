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
            .state('app.mappingUserToAuthParamEntry', {
                url: '/mappingUserToAuthParamEntry/:id',
                templateUrl: 'app/modules/mappingUserToAuthParamEntry/mappingUserToAuthParamEntry.html',
                controller: 'MappingUserToAuthParamEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Role Group Entry'
                }
            });
    }]);