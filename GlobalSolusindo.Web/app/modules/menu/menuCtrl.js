(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('MenuCtrl', MenuCtrl);

    MenuCtrl.$inject = ['$scope', '$state', 'menuDtService', 'menuDeleteService', 'menuViewService'];

    function MenuCtrl($scope, $state, dtService, deleteService, viewService) {
        var self = this;

        dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        return self;
    }
})();