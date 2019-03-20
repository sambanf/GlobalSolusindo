(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('MappingUserToAuthParamCtrl', MappingUserToAuthParamCtrl);

    MappingUserToAuthParamCtrl.$inject = ['$scope', '$state', 'mappingUserToAuthParamDtService', 'mappingUserToAuthParamViewService'];

    function MappingUserToAuthParamCtrl($scope, $state, dtService, viewService) {
        var self = this;

        self.datatable = dtService.init(self);
        viewService.init(self);

        return self;
    }
})();