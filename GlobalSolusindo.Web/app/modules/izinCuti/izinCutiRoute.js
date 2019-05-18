'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.izinCutiList', {
                url: '/izinCutiList',
                templateUrl: 'app/modules/izinCuti/izinCuti.html',
                controller: 'IzinCutiCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Izin Cuti'
                }
            });
    }]);