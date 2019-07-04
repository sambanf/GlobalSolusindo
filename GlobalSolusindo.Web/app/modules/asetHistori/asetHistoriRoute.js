'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.asetHistoriList', {
                url: '/asetHistoriList/:user_fk',
                templateUrl: 'app/modules/asetHistori/asetHistori.html',
                controller: 'AsetHistoriCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Aset Histori'
                }
            });
    }]);