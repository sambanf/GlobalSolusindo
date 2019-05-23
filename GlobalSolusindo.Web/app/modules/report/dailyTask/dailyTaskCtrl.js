(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('DailyTaskCtrl', DailyTaskCtrl);

    DailyTaskCtrl.$inject = ['$scope', '$state', 'dailyTaskDtService'];

    function DailyTaskCtrl($scope, $state, dtService) {
        var self = this;

        dtService.init(self);

        return self;
    }
})();