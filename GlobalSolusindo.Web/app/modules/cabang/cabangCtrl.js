(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('CabangCtrl', CabangCtrl);

    CabangCtrl.$inject = ['$scope', '$state', 'cabangDtService', 'cabangDeleteService', 'cabangViewService'];

    function CabangCtrl($scope, $state, dtService, deleteService, viewService) {
        var self = this;

        self.datatable = dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        return self;
    }
})();