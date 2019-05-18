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
            .state('app.sowEntry', {
                url: '/sowEntry/:id',
                templateUrl: 'app/modules/sowEntry/sowEntry.html',
                controller: 'SOWEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'SOW Entry'
                }
            });
    }]);