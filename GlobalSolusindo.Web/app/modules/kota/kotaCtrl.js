(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('KotaCtrl', KotaCtrl);

    KotaCtrl.$inject = ['$scope', '$state', 'kotaDtService', 'kotaDeleteService', 'kotaViewService'];

    function KotaCtrl($scope, $state, dtService, deleteService, viewService) {
        var self = this;

        self.datatable = dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        return self;
    }
})();