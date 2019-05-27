(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.controller:SidebarCtrl
     * @description
     * # NavBarCtrl
     * Controller of the app
     */

    angular
        .module('global-solusindo-app')
        .controller('appCtrl', App);

    App.$inject = ['$rootScope', '$scope', '$state', 'tokenService'];

    function App($rootScope, $scope, $state, tokenService) {
        var vm = this;

        vm.layout = {
            one: false,
            four: false
        };

        vm.toggle = function (which) {
            vm.layout[which] = !vm.layout[which];
        };

        function goToLoginPage() {
            $state.go('login');
        }

        function validateToken() {
            var token = tokenService.getToken();
            if (token && (token != '' || token != null)) {
                return true;
            }
            return false;
        }

        function goToLoginPageIfNotLoggedIn() {
            if (!validateToken())
                goToLoginPage();
        }

        goToLoginPageIfNotLoggedIn();

        return vm;
    }

})();