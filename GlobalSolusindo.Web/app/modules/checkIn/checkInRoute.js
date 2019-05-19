'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.checkInList', {
                url: '/checkInList',
                templateUrl: 'app/modules/checkIn/checkIn.html',
                controller: 'CheckInCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'CheckIn'
                }
            });
    }]);