(function () {
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
        .factory('tokenService', tokenService);

    tokenService.$inject = ['$state', '$cookies', 'uiService', '$window'];

    function tokenService($state, $cookies, ui, $window) {
        var self = this;

        self.getToken = function () {
            return $cookies.get('token');
        }

        self.clearToken = function (token) {
            $cookies.remove('token');
        }

        return self;
    }

})();