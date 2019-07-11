(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('AsetHistoriCtrl', AsetHistoriCtrl);

    AsetHistoriCtrl.$inject = ['$scope', '$state', 'asetHistoriDtService', 'asetHistoriDeleteService', 'asetHistoriViewService'];

    function AsetHistoriCtrl($scope, $state, dtService, deleteService, viewService) {
        var self = this;
        self.datatable = dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        return self;
    }
})();