(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('DeliveryAreaCtrl', DeliveryAreaCtrl);

    DeliveryAreaCtrl.$inject = ['$scope', '$state', 'deliveryAreaDtService', 'deliveryAreaDeleteService', 'deliveryAreaViewService'];

    function DeliveryAreaCtrl($scope, $state, dtService, deleteService, viewService) {
        var self = this;

        self.datatable = dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        return self;
    }
})();