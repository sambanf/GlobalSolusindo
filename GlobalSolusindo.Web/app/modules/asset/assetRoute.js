'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.assetList', {
                url: '/asset-list',
                templateUrl: 'app/modules/asset/asset.html',
                controller: 'AssetCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Asset'
                }
            });
    }]);