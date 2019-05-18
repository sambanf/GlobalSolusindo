'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.cabangList', {
                url: '/cabangList',
                templateUrl: 'app/modules/cabang/cabang.html',
                controller: 'CabangCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Cabang'
                }
            });
    }]);