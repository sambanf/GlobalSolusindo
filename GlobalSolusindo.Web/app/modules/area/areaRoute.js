'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.areaList', {
                url: '/areaList',
                templateUrl: 'app/modules/area/area.html',
                controller: 'AreaCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Area'
                }
            });
    }]);