(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('AsetHistoriCtrl', AsetHistoriCtrl);

    AsetHistoriCtrl.$inject = ['$scope', '$state', 'asetHistoriDtService', '$stateParams'];

    function AsetHistoriCtrl($scope, $state, dtService, $stateParams) {
        var self = this;
        self.stateParam = $stateParams;
        dtService.init(self);

        return self;
    }
})();