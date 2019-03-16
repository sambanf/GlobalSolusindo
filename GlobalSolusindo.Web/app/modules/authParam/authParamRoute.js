'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.authParamList', {
                url: '/authParamList',
                templateUrl: 'app/modules/authParam/authParam.html',
                controller: 'AuthParamCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'AuthParam'
                }
            });
    }]);