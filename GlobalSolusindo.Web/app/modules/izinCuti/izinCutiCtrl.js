(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('IzinCutiCtrl', IzinCutiCtrl);

    IzinCutiCtrl.$inject = ['$scope', '$state', 'izinCutiDtService', 'izinCutiDeleteService', 'izinCutiViewService'];

    function IzinCutiCtrl($scope, $state, dtService, deleteService, viewService) {
        var self = this;

        dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        return self;
    }
})();