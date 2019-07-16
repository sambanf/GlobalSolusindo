'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.userHistory', {
                url: '/userHistory/:aset_fk',
                templateUrl: 'app/modules/userHistory/userHistory.html',
                controller: 'UserHistoryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'User History'
                }
            });
    }]);