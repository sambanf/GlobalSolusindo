(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('MappingUserToRoleGroupCtrl', MappingUserToRoleGroupCtrl);

    MappingUserToRoleGroupCtrl.$inject = ['$scope', '$state', 'mappingUserToRoleGroupDtService', 'mappingUserToRoleGroupViewService'];

    function MappingUserToRoleGroupCtrl($scope, $state, dtService, viewService) {
        var self = this;

        self.datatable = dtService.init(self);
        viewService.init(self);

        return self;
    }
})();