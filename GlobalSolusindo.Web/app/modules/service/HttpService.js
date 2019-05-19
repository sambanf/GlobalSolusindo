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
        .factory('HttpService', Http)
        .factory('PendingRequest', Pending);

    Http.$inject = ['$http', '$state', '$cookies', '$q', '$httpParamSerializerJQLike', 'PendingRequest', '$httpParamSerializer', 'uiService', 'tokenService'];

    function Http($http, $state, $cookies, $q, $httpParamSerializerJQLike, PendingRequest, $httpParamSerializer, ui, tokenService) {
        var debugMode = false;

        var base_url = "http://gsapi.local/";
        //var base_url = "http://globaloneapi.kairos-it.com/";
        var base_host = "";

        var auth = {};

        auth.getAccessToken = function () {
            return tokenService.getToken();
        };

        function showLoader() {
            ui.loader.show();
        }

        function hideLoader() {
            ui.loader.hide();
        }

        function goToLoginPage() {
            $state.go('login');
        }

        function handleUnauthorized() {
            tokenService.clearToken();
            ui.alert.error('Authorization is required.');
            goToLoginPage();
        }

        function handleHttpError(response) {
            hideLoader();
            var status = response.status;
            var message = response.statusText;
            var debugMessage = debugMode ? "<br/>Status: " + status + "<br/> Message: " + message + "" : "";
            if (debugMode) {
                console.log(response);
                ui.alert.error("Error. Debug mode is ON." + debugMessage);
            }
            if (status === 500)
                ui.alert.error("Something error happen on the server." + debugMessage);
            if (status === -1)
                ui.alert.error("Connection error, please check network or internet connection." + debugMessage);
            if (status === 401) {
                handleUnauthorized();
            }
        }

        function handleHttpSuccess(response) {
            hideLoader();
            var status = response.status;
            if (status != 200) {
                ui.alert.error(response.message);
            }
        }

        delete $http.defaults.headers.common['X-Requested-With'];
        return {
            login: function (_url, requestData) {
                var deferred = $q.defer();

                var url = base_host + _url;

                var data = $httpParamSerializer(requestData);

                PendingRequest.add({
                    url: url,
                    canceller: deferred
                });
                delete $http.defaults.headers.common['X-Requested-With'];
                showLoader();
                $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    timeout: deferred.promise,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }

                }).then(function (response) {
                    handleHttpSuccess(response);
                    deferred.resolve(response.data);
                    PendingRequest.remove(url);

                }, function (response) {
                    handleHttpError(response);
                    PendingRequest.remove(url);
                    deferred.reject(response.data);
                });

                return deferred.promise;
            },
            post: function (_url, requestData) {
                var deferred = $q.defer();
                var url = base_url + _url;

                var data = JSON.stringify(requestData);

                PendingRequest.add({
                    url: url,
                    canceller: deferred
                });
                delete $http.defaults.headers.common['X-Requested-With'];
                showLoader();
                $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    timeout: deferred.promise,
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                        'Authorization': 'Bearer ' + auth.getAccessToken()
                    }

                }).then(function (response) {
                    handleHttpSuccess(response);
                    deferred.resolve(response.data);
                    PendingRequest.remove(url);
                }, function (response) {
                    handleHttpError(response);
                    PendingRequest.remove(url);
                    deferred.reject();
                });

                return deferred.promise;
            },
            put: function (_url, requestData) {
                var deferred = $q.defer();
                var url = base_url + _url;

                var data = JSON.stringify(requestData);

                PendingRequest.add({
                    url: url,
                    canceller: deferred
                });
                showLoader();
                $http({
                    method: 'PUT',
                    url: url,
                    data: data,
                    timeout: deferred.promise,
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                        'Authorization': 'Bearer ' + auth.getAccessToken()
                    }

                }).then(function (response) {
                    handleHttpSuccess(response);
                    deferred.resolve(response.data);
                    PendingRequest.remove(url);

                }, function (response) {
                    handleHttpError(response);
                    PendingRequest.remove(url);
                    deferred.reject();
                });

                return deferred.promise;
            },
            get: function (_url, requestData) {
                var deferred = $q.defer();
                var url = base_url + _url;

                var data = requestData;
                PendingRequest.add({
                    url: url,
                    canceller: deferred
                });
                showLoader();
                $http({
                    method: 'GET',
                    url: url,
                    params: data,
                    timeout: deferred.promise,
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                        'Authorization': 'Bearer ' + auth.getAccessToken()
                    }

                }).then(function (response) {
                    handleHttpSuccess(response);
                    deferred.resolve(response.data);
                    PendingRequest.remove(url);

                }, function (response) {
                    handleHttpError(response);
                    PendingRequest.remove(url);
                    deferred.reject();
                });

                return deferred.promise;
            },
            delete: function (_url, requestData) {
                var deferred = $q.defer();
                var url = base_url + _url;

                //var data = JSON.stringify(requestData);
                PendingRequest.add({
                    url: url,
                    canceller: deferred
                });
                showLoader();
                $http({
                    method: 'DELETE',
                    url: url,
                    data: requestData,
                    timeout: deferred.promise,
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                        'Authorization': 'Bearer ' + auth.getAccessToken()
                    }

                }).then(function (response) {
                    handleHttpSuccess(response);
                    deferred.resolve(response.data);
                    PendingRequest.remove(url);

                }, function (response) {
                    handleHttpError(response);
                    PendingRequest.remove(url);
                    deferred.reject();
                });

                return deferred.promise;
            }
        };
    }

    function Pending() {
        var pending = [];
        this.get = function () {
            return pending;
        };
        this.add = function (request) {
            pending.push(request);
        };
        this.remove = function (request) {
            pending = _.filter(pending, function (p) {
                return p.url !== request;
            });
        };
        this.cancelAll = function () {
            angular.forEach(pending, function (p) {
                p.canceller.resolve();
            });
            pending.length = 0;
        };

        return this;
    }
})();