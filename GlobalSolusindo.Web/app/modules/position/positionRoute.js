'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.positionList', {
                url: '/positionList',
                templateUrl: 'app/modules/position/position.html',
                controller: 'PositionCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Position'
                }
            });
    }]);