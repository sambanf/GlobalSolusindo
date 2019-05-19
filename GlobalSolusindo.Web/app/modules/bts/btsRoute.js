'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.btsList', {
                url: '/btsList',
                templateUrl: 'app/modules/bts/bts.html',
                controller: 'BTSCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'BTS'
                }
            });
    }]);