(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('KategoriJabatanCtrl', KategoriJabatanCtrl);

    KategoriJabatanCtrl.$inject = ['$scope', '$state', 'kategoriJabatanDtService', 'kategoriJabatanDeleteService', 'kategoriJabatanViewService'];

    function KategoriJabatanCtrl($scope, $state, dtService, deleteService, viewService) {
        var self = this;

        dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        return self;
    }
})();