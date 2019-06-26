'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.menuList', {
                url: '/menuList',
                templateUrl: 'app/modules/menu/menu.html',
                controller: 'MenuCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Menu'
                }
            });
    }]);