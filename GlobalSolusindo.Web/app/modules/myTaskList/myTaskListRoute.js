'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.myTaskListList', {
                url: '/myTaskListList',
                templateUrl: 'app/modules/myTaskList/myTaskList.html',
                controller: 'MyTaskListCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'MyTaskList'
                }
            });
    }]);