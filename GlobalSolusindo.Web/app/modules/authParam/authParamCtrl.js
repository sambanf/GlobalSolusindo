(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('AuthParamCtrl', AuthParamCtrl);

    AuthParamCtrl.$inject = ['$scope', '$state', 'authParamDtService', 'authParamDeleteService', 'authParamViewService'];

    function AuthParamCtrl($scope, $state, dtService, deleteService, viewService) {
        var self = this;

        self.datatable = dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        return self;
    }
})();