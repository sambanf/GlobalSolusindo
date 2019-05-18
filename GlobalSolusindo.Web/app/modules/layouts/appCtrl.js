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

    App.$inject = ['$rootScope', '$scope'];

    function App($rootScope, $scope) {
        var vm = this;

        vm.layout = {
            one: false,
            four: false
        };

        vm.toggle = function (which) {
            vm.layout[which] = !vm.layout[which];
        };

        return vm;
    }

})();