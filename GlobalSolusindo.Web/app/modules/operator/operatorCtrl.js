(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('OperatorCtrl', OperatorCtrl);

    OperatorCtrl.$inject = ['$scope', '$state', 'operatorDtService', 'operatorDeleteService', 'operatorViewService'];

    function OperatorCtrl($scope, $state, dtService, deleteService, viewService) {
        var self = this;

        self.datatable = dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        return self;
    }
})();