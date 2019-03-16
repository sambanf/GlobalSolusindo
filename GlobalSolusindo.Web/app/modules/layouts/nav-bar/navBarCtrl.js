(function () {
    'use strict';

	/**
	 * @ngdoc function
	 * @name app.controller:NavBarCtrl
	 * @description
	 * # NavBarCtrl
	 * Controller of the app
	 */

    angular
        .module('global-solusindo')
        .controller('NavBarCtrl', NavBar);

    NavBar.$inject = ['MenuService', '$cookies', '$localStorage', '$state', '$window', 'HttpService'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

    function NavBar(MenuService, $cookies, localStorage, state, $window, HttpService) {

        /*jshint validthis: true */

        var nav = this;
        nav.user = JSON.parse($window.localStorage.getItem('user'));
        //nav.user = $cookies.getAll();
        //console.log(nav.user);

        nav.logout = function () {
            HttpService.login('/logout', {}).then(function (response) {

            });

            $cookies.remove('Token');
            $cookies.remove('User');
            localStorage.$reset();
            state.go('login');
            $window.localStorage.removeItem('userMenu');
            $window.localStorage.removeItem('user');
        }
        // vm.toggle = function () {
        //     $('#toggle').click();
        // };

        return nav;
    }

})();