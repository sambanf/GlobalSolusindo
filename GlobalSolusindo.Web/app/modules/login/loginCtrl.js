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
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope', '$state', 'validationService', '$localStorage', '$cookies', 'uiService', 'HttpService', '$window'];

    /*
    * recommend
    * Using function declarations
    * and bindable members up top.
    */

    function LoginCtrl($scope, $state, validation, localStorage, $cookies, ui, http, $window) {
        /*jshint validthis: true */
        var self = this;

        self.model = {};

        angular.element('#loginButton').on('click', function () {
            validation.clearValidationErrors({});
            http.post('token', self.model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    if (typeof (res.token) != 'undefined') {
                        $cookies.put('token', res.token);
                        $window.localStorage.setItem('user', res.model);
                        $state.go('app.dashboard');
                    } else {
                        ui.alert.error(res.message);
                    }
                } else {
                    ui.alert.error(res.message);
                    validation.serverValidation(res.data.errors);
                }
            });
        });

        return self;
    }
})();
