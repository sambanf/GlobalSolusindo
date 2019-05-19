(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('CheckInCtrl', CheckInCtrl);

    CheckInCtrl.$inject = ['$scope', '$state', 'checkInDtService', 'checkInDeleteService', 'checkInViewService'];

    function CheckInCtrl($scope, $state, dtService, deleteService, viewService) {
        var self = this;

        dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        return self;
    }
})();