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
            .state('app.roleGroupEntry', {
                url: '/roleGroupEntry/:id',
                templateUrl: 'app/modules/roleGroupEntry/roleGroupEntry.html',
                controller: 'RoleGroupEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Role Group Entry'
                }
            });
    }]);