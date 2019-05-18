(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('RoleCtrl', RoleCtrl);

    RoleCtrl.$inject = ['$scope', '$state', 'roleDtService', 'roleDeleteService', 'roleViewService'];

    function RoleCtrl($scope, $state, dtService, deleteService, viewService) {
        var self = this;

        self.datatable = dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        return self;
    }
})();