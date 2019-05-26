(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('VendorCtrl', VendorCtrl);

    VendorCtrl.$inject = ['$scope', '$state', 'vendorDtService', 'vendorDeleteService', 'vendorViewService'];

    function VendorCtrl($scope, $state, dtService, deleteService, viewService) {
        var self = this;

        dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        return self;
    }
})();