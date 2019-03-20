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
        .factory('AssetModalService', AssetModalService);

    AssetModalService.$inject = ['HttpService', '$state'];

    function AssetModalService(http, $state) {
        var self = this;
        var controller = {};

        self.applyBinding = function () {
            return http.get('asset/search', {
                pageIndex: 1,
                pageSize: 100
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            return new Promise(function (resolve, reject) {
                self.applyBinding().then(function (res) {
                    controller.roles = res.data.records;
                    resolve(res);
                });
            });
        };

        return self;
    }

})();