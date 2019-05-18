(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:dashboardService
	 * @description
	 * # dashboardService
	 * Service of the app
	 */

  	angular
		.module('global-solusindo')
		.factory('DashboardService', Dashboard);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Dashboard.$inject = ['$http'];

		function Dashboard ($http) {

		}

})();
