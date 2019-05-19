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
            .state('app.mappingRoleToRoleGroupEntry', {
                url: '/mappingRoleToRoleGroupEntry/:id',
                templateUrl: 'app/modules/mappingRoleToRoleGroupEntry/mappingRoleToRoleGroupEntry.html',
                controller: 'MappingRoleToRoleGroupEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Mapping Role To Role Group Entry'
                }
            });
    }]);