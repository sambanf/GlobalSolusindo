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
            .state('app.mappingUserToRoleGroupEntry', {
                url: '/mappingUserToRoleGroupEntry/:id',
                templateUrl: 'app/modules/mappingUserToRoleGroupEntry/mappingUserToRoleGroupEntry.html',
                controller: 'MappingUserToRoleGroupEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Mapping User To Role Group Entry'
                }
            });
    }]);