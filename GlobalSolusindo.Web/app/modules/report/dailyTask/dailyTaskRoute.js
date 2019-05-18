'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.dailyTaskList', {
                url: '/dailyTaskList',
                templateUrl: 'app/modules/report/dailyTask/dailyTask.html',
                controller: 'DailyTaskCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'DailyTask'
                }
            });
    }]);