(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('izinCutiApprovalCtrl', izinCutiApprovalCtrl);

    izinCutiApprovalCtrl.$inject = ['$scope', '$state', 'izinCutiApprovalDtService', 'izinCutiApprovalViewService'];

    function izinCutiApprovalCtrl($scope, $state, dtService, viewService) {
        var self = this;

        dtService.init(self);
        viewService.init(self);

        return self;
    }
})();