'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.kategoriJabatanList', {
                url: '/kategoriJabatanList',
                templateUrl: 'app/modules/kategoriJabatan/kategoriJabatan.html',
                controller: 'KategoriJabatanCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Kategori Jabatan'
                }
            });
    }]);