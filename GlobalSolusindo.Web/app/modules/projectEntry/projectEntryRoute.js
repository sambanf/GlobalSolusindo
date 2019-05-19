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
            .state('app.projectEntry', {
                url: '/projectEntry/:id',
                templateUrl: 'app/modules/projectEntry/projectEntry.html',
                controller: 'ProjectEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Project Entry'
                }
            });
    }]);