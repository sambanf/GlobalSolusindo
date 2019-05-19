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
            .state('app.deliveryAreaEntry', {
                url: '/deliveryAreaEntry/:id',
                templateUrl: 'app/modules/deliveryAreaEntry/deliveryAreaEntry.html',
                controller: 'DeliveryAreaEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Delivery Area Entry'
                }
            });
    }]);