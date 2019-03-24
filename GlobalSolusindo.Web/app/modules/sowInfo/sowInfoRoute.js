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
            .state('app.sowInfo', {
                url: '/sowInfo/:id',
                templateUrl: 'app/modules/sowInfo/sowInfo.html',
                controller: 'SOWInfoCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'SOW Entry'
                }
            });
    }]);