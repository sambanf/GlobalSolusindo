'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.asetKategoriList', {
                url: '/asetKategoriList',
                templateUrl: 'app/modules/asetKategori/asetKategori.html',
                controller: 'AsetKategoriCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Aset Kategori'
                }
            });
    }]);