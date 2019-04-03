'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.taskEngineerList', {
                url: '/taskEngineerList',
                templateUrl: 'app/modules/report/taskEngineer/taskEngineer.html',
                controller: 'TaskEngineerCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'TaskEngineer'
                }
            });
    }]);