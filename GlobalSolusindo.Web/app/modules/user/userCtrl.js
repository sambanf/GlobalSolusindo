(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('UserCtrl', UserCtrl);

    UserCtrl.$inject = ['$scope', '$state', 'userDtService', 'userDeleteService', 'userViewService', 'userInactivateService'];

    function UserCtrl($scope, $state, dtService, deleteService, viewService, inactivateService) {
        var self = this;

        self.datatable = dtService.init(self);
        deleteService.init(self);
        viewService.init(self);
        inactivateService.init(self);

        return self;
    }
})();