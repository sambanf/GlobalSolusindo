'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.userList', {
                url: '/userList',
                templateUrl: 'app/modules/user/user.html',
                controller: 'UserCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'User'
                }
            });
    }]);