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
			.state('app.dashboardNull', {
				url:'/',
				templateUrl: 'app/modules/dashboard/dashboardNull.html',
				controller: 'DashboardNullCtrl',
				controllerAs: 'db',
				ncyBreadcrumb: {
                    label: 'Global One Solusindo'
                },
			});
		
	}]);
