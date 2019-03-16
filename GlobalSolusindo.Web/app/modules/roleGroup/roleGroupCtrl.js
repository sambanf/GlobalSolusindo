(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('RoleGroupCtrl', RoleGroupCtrl);

    RoleGroupCtrl.$inject = ['$scope', '$state', 'roleGroupDtService', 'roleGroupDeleteService', 'roleGroupViewService'];

    function RoleGroupCtrl($scope, $state, dtService, deleteService, viewService) {
        var self = this;

        self.datatable = dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        return self;
    }
})();