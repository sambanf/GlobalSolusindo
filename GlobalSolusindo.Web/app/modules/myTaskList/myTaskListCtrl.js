(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('MyTaskListCtrl', MyTaskListCtrl);

    MyTaskListCtrl.$inject = ['$scope', '$state', 'myTaskListDtService', 'myTaskListDeleteService', 'myTaskListViewService'];

    function MyTaskListCtrl($scope, $state, dtService, deleteService, viewService) {
        var self = this;

        dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        return self;
    }
})();