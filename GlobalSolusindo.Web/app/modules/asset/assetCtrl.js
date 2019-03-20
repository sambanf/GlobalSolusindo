(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('AssetCtrl', AssetCtrl);

    AssetCtrl.$inject = ['$scope', '$state', 'roleDtService', 'roleDeleteService', 'roleViewService'];

    function AssetCtrl($scope, $state, dtService, deleteService, viewService) {
        var self = this;

        self.datatable = dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        return self;
    }
})();