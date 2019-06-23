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
            .state('app.changePasswordEntry', {
                url: '/changePasswordEntry/',
                templateUrl: 'app/modules/changePasswordEntry/changePasswordEntry.html',
                controller: 'ChangePasswordEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Change Password'
                }
            });
    }]);