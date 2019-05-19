(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('TechnologyCtrl', TechnologyCtrl);

    TechnologyCtrl.$inject = ['$scope', '$state', 'technologyDtService', 'technologyDeleteService', 'technologyViewService'];

    function TechnologyCtrl($scope, $state, dtService, deleteService, viewService) {
        var self = this;

        dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        return self;
    }
})();