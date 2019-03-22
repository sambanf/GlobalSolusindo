(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('BTSCtrl', BTSCtrl);

    BTSCtrl.$inject = ['$scope', '$state', 'btsDtService', 'btsDeleteService', 'btsViewService'];

    function BTSCtrl($scope, $state, dtService, deleteService, viewService) {
        var self = this;

        self.datatable = dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        return self;
    }
})();