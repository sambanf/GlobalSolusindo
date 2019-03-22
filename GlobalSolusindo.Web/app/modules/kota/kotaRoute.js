'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.kotaList', {
                url: '/kotaList',
                templateUrl: 'app/modules/kota/kota.html',
                controller: 'KotaCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Kota'
                }
            });
    }]);