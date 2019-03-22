'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.operatorList', {
                url: '/operatorList',
                templateUrl: 'app/modules/operator/operator.html',
                controller: 'OperatorCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Operator'
                }
            });
    }]);