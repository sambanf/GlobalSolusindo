(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('MappingUserToAuthParamCtrl', MappingUserToAuthParam);

    MappingUserToAuthParam.$inject = ['$scope', '$state', 'mappingUserToAuthParamDtService', 'mappingUserToAuthParamViewService'];

    function MappingUserToAuthParam($scope, $state, dtService, viewService) {
        var self = this;

        self.datatable = dtService.init(self);
        viewService.init(self);

        return self;
    }
})();