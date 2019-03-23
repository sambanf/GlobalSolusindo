'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.sowList', {
                url: '/sowList',
                templateUrl: 'app/modules/sow/sow.html',
                controller: 'SOWCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'SOW'
                }
            });
    }]);