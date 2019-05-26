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
            .state('app.vendorEntry', {
                url: '/vendorEntry/:id',
                templateUrl: 'app/modules/vendorEntry/vendorEntry.html',
                controller: 'VendorEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Vendor Entry'
                }
            });
    }]);