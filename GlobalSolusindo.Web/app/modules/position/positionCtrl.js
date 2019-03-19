(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('PositionCtrl', PositionCtrl);

    PositionCtrl.$inject = ['$scope', '$state', 'positionDtService', 'positionDeleteService', 'positionViewService'];

    function PositionCtrl($scope, $state, dtService, deleteService, viewService) {
        var self = this;

        self.datatable = dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        return self;
    }
})();