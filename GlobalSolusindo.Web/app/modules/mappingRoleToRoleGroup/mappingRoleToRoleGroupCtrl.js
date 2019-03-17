(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('MappingRoleToRoleGroupCtrl', MappingRoleToRoleGroupCtrl);

    MappingRoleToRoleGroupCtrl.$inject = ['$scope', '$state', 'mappingRoleToRoleGroupDtService', 'mappingRoleToRoleGroupViewService'];

    function MappingRoleToRoleGroupCtrl($scope, $state, dtService, viewService) {
        var self = this;

        self.datatable = dtService.init(self);
        viewService.init(self);

        return self;
    }
})();