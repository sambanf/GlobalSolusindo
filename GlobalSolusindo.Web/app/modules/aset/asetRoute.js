'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.asetList', {
                url: '/asetList',
                templateUrl: 'app/modules/aset/aset.html',
                controller: 'AsetCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Aset'
                }
            });
    }]);