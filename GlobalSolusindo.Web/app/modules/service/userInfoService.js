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
        .factory('userInfoService', userInfoService);

    userInfoService.$inject = ['$state', 'HttpService', 'uiService', 'validationService', '$window'];

    function userInfoService($state, http, ui, validation, $window) {
        var self = this;

        self.getUserInfo = function() {
            return $window.localStorage.getItem('user');
        }

        self.setUserInfo = function (userInfo) {
            $window.localStorage.setItem('user', JSON.stringify(userInfo));
        }

        return self;
    }

})();