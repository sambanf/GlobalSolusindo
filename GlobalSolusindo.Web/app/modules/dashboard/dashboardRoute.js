'use strict';

/**
 * @ngdoc function
 * @name app.route:dashboardRoute
 * @description
 * # dashboardRoute
 * Route of the app
 */

angular.module('global-solusindo')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('app.dashboard', {
				url:'/',
				templateUrl: 'app/modules/dashboard/dashboard.html',
				controller: 'DashboardCtrl',
				controllerAs: 'db',
				ncyBreadcrumb: {
                    label: 'Dashboard'
                },
			});
		
	}]);
