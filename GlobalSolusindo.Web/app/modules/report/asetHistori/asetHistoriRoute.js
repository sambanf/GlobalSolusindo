'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.asetHistoriList', {
                url: '/asetHistoriList/:userDetail_pk',
                templateUrl: 'app/modules/report/asetHistori/asetHistori.html',
                controller: 'AsetHistoriCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Aset Histori'
                }
            });
    }]);