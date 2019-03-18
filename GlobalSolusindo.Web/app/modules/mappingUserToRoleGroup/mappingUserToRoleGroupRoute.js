'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.mappingUserToRoleGroupList', {
                url: '/mappingUserToRoleGroupList',
                templateUrl: 'app/modules/mappingUserToRoleGroup/mappingUserToRoleGroup.html',
                controller: 'MappingUserToRoleGroupCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Mapping User To Role Group'
                }
            });
    }]);