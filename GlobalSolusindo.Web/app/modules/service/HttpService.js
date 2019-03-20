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

    Http.$inject = ['$http', '$state', '$cookies', '$q', '$httpParamSerializerJQLike', 'PendingRequest', '$httpParamSerializer'];

    function Http($http, $state, $cookies, $q, $httpParamSerializerJQLike, PendingRequest, $httpParamSerializer) {
        // var base_url = cs.config.getApiUrl();
        //var base_url = "http://global-solusindo-ws.local/";
        var base_url = "http://ws.gs.local/";
        var base_host = "";
        var auth = {};
        auth.getAccessToken = function () {
            return '';
        };

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
                $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    timeout: deferred.promise,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }

                }).then(function (response) {
                    deferred.resolve(response.data);
                    PendingRequest.remove(url);

                }, function (response) {
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
                    deferred.resolve(response.data);
                    PendingRequest.remove(url);
                }, function (response) {
                    PendingRequest.remove(url);
                    deferred.reject();
                });
                //}, function (response) {
                //    //console.log(response.xhrStatus);
                //    PendingRequest.remove(url);
                //    deferred.reject();
                //});

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
                    deferred.resolve(response.data);
                    PendingRequest.remove(url);

                }, function (response) {
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

                $http({
                    method: 'GET',
                    url: url,
                    params: data,
                    timeout: deferred.promise,
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                    }

                }).then(function (response) {
                    deferred.resolve(response.data);
                    PendingRequest.remove(url);

                }, function (response) {
                    //console.log(response.xhrStatus);
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
                    deferred.resolve(response.data);
                    PendingRequest.remove(url);

                }, function (response) {
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