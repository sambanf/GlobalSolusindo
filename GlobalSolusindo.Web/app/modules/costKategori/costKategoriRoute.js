'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.costKategoriList', {
                url: '/costKategoriList',
                templateUrl: 'app/modules/costKategori/costKategori.html',
                controller: 'CostKategoriCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'CostKategori'
                }
            });
    }]);