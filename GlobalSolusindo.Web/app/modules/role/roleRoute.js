'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.role-list', {
                url: '/role-list',
                templateUrl: 'app/modules/role/role.html',
                controller: 'RoleCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Role'
                }
            });
    }]);