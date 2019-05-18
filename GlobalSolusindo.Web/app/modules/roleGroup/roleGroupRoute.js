'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.roleGroupList', {
                url: '/roleGroupList',
                templateUrl: 'app/modules/roleGroup/roleGroup.html',
                controller: 'RoleGroupCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Role Group'
                }
            });
    }]);