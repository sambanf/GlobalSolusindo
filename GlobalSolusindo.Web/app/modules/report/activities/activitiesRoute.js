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
            .state('app.engineerActivities', {
                url: '/activities/:id/:bulan/:bulanName',
                templateUrl: 'app/modules/report/activities/activities.html',
                controller: 'ActivitiesCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Activities'
                }
            });
    }]);