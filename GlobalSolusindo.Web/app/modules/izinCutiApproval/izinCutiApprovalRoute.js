'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.izinCutiApprovalList', {
                url: '/izinCutiApprovalList',
                templateUrl: 'app/modules/izinCutiApproval/izinCutiApproval.html',
                controller: 'izinCutiApprovalCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Approval Izin Cuti'
                }
            });
    }]);