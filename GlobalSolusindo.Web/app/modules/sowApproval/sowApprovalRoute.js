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
            .state('app.sowApproval', {
                url: '/sowApproval/:id',
                templateUrl: 'app/modules/sowApproval/sowApproval.html',
                controller: 'SOWApprovalCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'SOW Approval'
                }
            });
    }]);