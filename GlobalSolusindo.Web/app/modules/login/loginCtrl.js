(function () {
    'use strict';

	/**
	* @ngdoc function
	* @name app.controller:loginCtrl
	* @description
	* # loginCtrl
	* Controller of the app
	*/

    angular
        .module('global-solusindo')
        .controller('LoginCtrl', Login);

    Login.$inject = ['$scope', '$state'];

    /*
    * recommend
    * Using function declarations
    * and bindable members up top.
    */

    function Login($scope, $state) {
        /*jshint validthis: true */
        var login = this;
        login.loginSubmit = function () {

        };

        return login;
    }
})();
