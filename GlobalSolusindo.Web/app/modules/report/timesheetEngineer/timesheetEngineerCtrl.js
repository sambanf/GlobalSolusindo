(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('TimesheetEngineerCtrl', TimesheetEngineerCtrl);

    TimesheetEngineerCtrl.$inject = ['$scope', '$state', 'timesheetEngineerDtService', 'timesheetEngineerViewService'];

    function TimesheetEngineerCtrl($scope, $state, dtService, viewService) {
        var self = this;

        dtService.init(self);
        viewService.init(self);

        return self;
    }
})();