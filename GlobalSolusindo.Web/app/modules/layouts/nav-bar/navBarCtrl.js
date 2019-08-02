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
        .controller('NavBarCtrl', NavBarCtrl);

    NavBarCtrl.$inject = ['MenuService', '$cookies', '$localStorage', '$state', '$window', 'HttpService', 'uiService', '$scope', '$rootScope'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

    function NavBarCtrl(MenuService, $cookies, localStorage, state, $window, http, ui, $scope, $rootScope) {

        /*jshint validthis: true */
        var nav = this;
        var user = JSON.parse($window.localStorage.getItem('user'));
        nav.model = user;
 
        nav.resizeDt = function () {
            console.log($rootScope);
            $rootScope.dt.columns.adjust();
        }
    
        function setImage(data) { 
            document.getElementById("photoProfile").src = data;
        }

        if (nav.model && nav.model.filePhotoInBase64) {
            setImage(nav.model.filePhotoInBase64);
        }

        function resetApplicationData() {
            $cookies.remove('token');
            $window.localStorage.removeItem('user');
            $window.localStorage.clear();
        }

        nav.logout = function () {
            http.post('/logout', {}).then(function (response) {
                state.go('login');
            });
            resetApplicationData();
        }
        // vm.toggle = function () {
        //     $('#toggle').click();
        // };

        return nav;
    } 
})();