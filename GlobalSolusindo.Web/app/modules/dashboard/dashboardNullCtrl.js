(function () {
    'use strict';

	/**
	* @ngdoc function
	* @name app.controller:dashboardNullCtrl
	* @description
	* # dashboardCtrl
	* Controller of the app
	*/

    angular
        .module('global-solusindo')
        .controller('DashboardNullCtrl', DashboardNull);

    DashboardNull.$inject = ['$scope'];

    /*
    * recommend
    * Using function declarations
    * and bindable members up top.
    */

    function DashboardNull($scope) {
        /*jshint validthis: true */
        var db = this;
        
    }
})();
