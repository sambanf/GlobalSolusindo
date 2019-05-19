'use strict';

/**
 * @ngdoc function
 * @name app.route:orderRoute
 * @description
 * # dashboardRoute
 * Route of the app
 */

angular.module('global-solusindo')
	.config(['$stateProvider', '$breadcrumbProvider', function ($stateProvider, $breadcrumbProvider) {

		$breadcrumbProvider.setOptions({
			prefixStateName: 'app',
			includeAbstract: true,
			template: '<li class="breadcrumb-item" ng-repeat="step in steps" ng-class="{active: $last}" ng-switch="$last || !!step.abstract"><a ng-switch-when="false" href="{{step.ncyBreadcrumbLink}}">{{step.ncyBreadcrumbLabel}}</a><span ng-switch-when="true">{{step.ncyBreadcrumbLabel}}</span></li>'
		});
		
		$stateProvider
			.state('app', {
				templateUrl: 'app/modules/layouts/app.html',
				abstract: true,
				controller: 'appCtrl',
				controllerAs: 'vm',
				ncyBreadcrumb: {
					label: 'App'
				}
			})
			.state('app.master', {
				abstract: true,
				ncyBreadcrumb: {
					label: 'Master'
				},
			})
			.state('app.activities', {
				abstract: true,
				ncyBreadcrumb: {
					label: 'Activities'
				},
			});

	}]);