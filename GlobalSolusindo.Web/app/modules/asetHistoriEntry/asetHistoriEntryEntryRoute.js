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
            .state('app.asetHistoriEntry', {
                url: '/asetHistoriEntry/:id/:user_fk',
                templateUrl: 'app/modules/asetHistoriEntry/asetHistoriEntry.html',
                controller: 'AsetHistoriEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Aset Histori Entry'
                }
            });
    }]);