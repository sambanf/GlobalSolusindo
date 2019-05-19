'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.technologyList', {
                url: '/technologyList',
                templateUrl: 'app/modules/technology/technology.html',
                controller: 'TechnologyCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Technology'
                }
            });
    }]);