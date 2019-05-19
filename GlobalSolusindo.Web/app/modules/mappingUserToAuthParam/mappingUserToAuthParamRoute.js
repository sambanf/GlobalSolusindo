'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.mappingUserToAuthParamList', {
                url: '/mappingUserToAuthParamList',
                templateUrl: 'app/modules/mappingUserToAuthParam/mappingUserToAuthParam.html',
                controller: 'MappingUserToAuthParamCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Mapping User To Auth Param'
                }
            });
    }]);