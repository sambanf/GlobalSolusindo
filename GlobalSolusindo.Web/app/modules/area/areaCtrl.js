(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('AreaCtrl', AreaCtrl);

    AreaCtrl.$inject = ['$scope', '$state', 'areaDtService', 'areaDeleteService', 'areaViewService'];

    function AreaCtrl($scope, $state, dtService, deleteService, viewService) {
        var self = this;

        dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        return self;
    }
})();