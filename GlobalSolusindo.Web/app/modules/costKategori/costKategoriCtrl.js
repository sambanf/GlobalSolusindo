(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('CostKategoriCtrl', CostKategoriCtrl);

    CostKategoriCtrl.$inject = ['$scope', '$state', 'costKategoriDtService', 'costKategoriDeleteService', 'costKategoriViewService'];

    function CostKategoriCtrl($scope, $state, dtService, deleteService, viewService) {
        var self = this;

        self.datatable = dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        return self;
    }
})();