'use strict';

/**
 * @ngdoc function
 * @name app.route:orderRoute
 * @description
 * # dashboardRoute
 * Route of the app
 */

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.technologyEntry', {
                url: '/technologyEntry/:id',
                templateUrl: 'app/modules/technologyEntry/technologyEntry.html',
                controller: 'TechnologyEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Technology Entry'
                }
            });
    }]);