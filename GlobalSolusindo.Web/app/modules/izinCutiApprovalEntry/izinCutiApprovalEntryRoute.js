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
            .state('app.izinCutiApprovalEntry', {
                url: '/izinCutiApprovalEntry/:id',
                templateUrl: 'app/modules/izinCutiApprovalEntry/izinCutiApprovalEntry.html',
                controller: 'izinCutiApprovalEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Approval Izin Cuti'
                }
            });
    }]);