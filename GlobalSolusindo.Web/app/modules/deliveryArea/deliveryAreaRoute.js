'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.deliveryAreaList', {
                url: '/deliveryAreaList',
                templateUrl: 'app/modules/deliveryArea/deliveryArea.html',
                controller: 'DeliveryAreaCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Delivery Area'
                }
            });
    }]);