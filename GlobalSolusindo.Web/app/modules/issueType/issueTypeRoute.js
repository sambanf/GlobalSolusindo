'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.issueTypeList', {
                url: '/issueTypeList',
                templateUrl: 'app/modules/issueType/issueType.html',
                controller: 'IssueTypeCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Issue Type'
                }
            });
    }]);