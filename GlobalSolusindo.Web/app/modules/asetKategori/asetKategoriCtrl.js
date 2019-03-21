(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('AsetKategoriCtrl', AsetKategoriCtrl);

    AsetKategoriCtrl.$inject = ['$scope', '$state', 'asetKategoriDtService', 'asetKategoriDeleteService', 'asetKategoriViewService'];

    function AsetKategoriCtrl($scope, $state, dtService, deleteService, viewService) {
        var self = this;

        self.datatable = dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        return self;
    }
})();