(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('SOWCtrl', SOWCtrl);

    SOWCtrl.$inject = ['$scope', '$state', 'sowDtService', 'sowDeleteService', 'sowViewService'];

    function SOWCtrl($scope, $state, dtService, deleteService, viewService) {
        var self = this;

        dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        return self;
    }
})();