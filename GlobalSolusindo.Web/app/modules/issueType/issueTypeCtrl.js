(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('IssueTypeCtrl', IssueTypeCtrl);

    IssueTypeCtrl.$inject = ['$scope', '$state', 'issueTypeDtService', 'issueTypeDeleteService', 'issueTypeViewService'];

    function IssueTypeCtrl($scope, $state, dtService, deleteService, viewService) {
        var self = this;

        dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        return self;
    }
})();