(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('AsetCtrl', AsetCtrl);

    AsetCtrl.$inject = ['$scope', '$state', 'asetDtService', 'asetDeleteService', 'asetViewService'];

    function AsetCtrl($scope, $state, dtService, deleteService, viewService) {
        var self = this;

        self.datatable = dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        return self;
    }
})();