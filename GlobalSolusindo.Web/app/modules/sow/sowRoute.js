'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.sowList', {
                url: '/sow-list',
                templateUrl: 'app/modules/sow/sow.html',
                controller: 'SOWCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'SOW'
                }
            });
    }]);