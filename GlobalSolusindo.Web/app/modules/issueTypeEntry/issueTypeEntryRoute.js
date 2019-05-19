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
            .state('app.issueTypeEntry', {
                url: '/issueTypeEntry/:id',
                templateUrl: 'app/modules/issueTypeEntry/issueTypeEntry.html',
                controller: 'IssueTypeEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Issue Type Entry'
                }
            });
    }]);