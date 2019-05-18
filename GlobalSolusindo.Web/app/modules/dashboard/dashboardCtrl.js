(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:dashboardCtrl
	* @description
	* # dashboardCtrl
	* Controller of the app
	*/

  	angular
		.module('global-solusindo')
		.controller('DashboardCtrl', Dashboard);

		Dashboard.$inject = ['$scope'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Dashboard($scope) {
			/*jshint validthis: true */
			var db = this;

		}
})();
