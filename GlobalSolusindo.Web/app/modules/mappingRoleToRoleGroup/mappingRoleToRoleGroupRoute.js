'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.mappingRoleToRoleGroupList', {
                url: '/mappingRoleToRoleGroupList',
                templateUrl: 'app/modules/mappingRoleToRoleGroup/mappingRoleToRoleGroup.html',
                controller: 'MappingRoleToRoleGroupCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Mapping Role To Role Group'
                }
            });
    }]);