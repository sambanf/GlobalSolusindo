'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.vendorList', {
                url: '/vendorList',
                templateUrl: 'app/modules/vendor/vendor.html',
                controller: 'VendorCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Vendor'
                }
            });
    }]);