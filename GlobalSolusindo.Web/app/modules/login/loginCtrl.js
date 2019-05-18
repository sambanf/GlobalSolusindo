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

    LoginCtrl.$inject = ['$scope', '$state', 'serverErrorService', '$localStorage', '$cookies', 'uiService', 'HttpService', '$window', 'userInfoService'];

    /*
    * recommend
    * Using function declarations
    * and bindable members up top.
    */

    function LoginCtrl($scope, $state, serverError, localStorage, $cookies, ui, http, $window, userInfoService) {
        /*jshint validthis: true */
        var self = this;

        self.model = {};

        function setTokenInfo(token) {
            $cookies.put('token', token);
        }

        function setUserInfo(userInfo) {
            userInfoService.setUserInfo(userInfo)
        }

        function goToDashboard() {
            $state.go('app.dashboard');
        }

        function login() {
            http.post('token', self.model)
                .then(function (res) {
                    if (res.success) {
                        ui.alert.success(res.message);
                        setTokenInfo(res.token);
                        setUserInfo(res.model);
                        goToDashboard();
                    } else {
                        serverError.show(res);
                    }
                });
        }

        angular.element('#loginButton').on('click', function () {
            login();
        });

        angular.element('#username').on('keyup', function (e) {
            if (e.keyCode === 13) {
                angular.element('#password').focus();
            }
        });

        angular.element('#password').on('keyup', function (e) {
            if (e.keyCode === 13) {
                login();
            }
        });

        return self;
    }
})();
