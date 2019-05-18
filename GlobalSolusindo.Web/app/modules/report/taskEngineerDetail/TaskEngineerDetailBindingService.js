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
        .factory('TaskEngineerDetailBindingService', TaskEngineerDetailBindingService);

    TaskEngineerDetailBindingService.$inject = ['HttpService', '$state'];

    function TaskEngineerDetailBindingService(http, $state) {
        var self = this;
        var controller = {};

        self.applyBinding = function (id) {
            return http.get('taskEngineerDetail/' + id);
        };

        self.init = function (ctrl) {
            controller = ctrl;
            var id = ctrl.stateParam.id;
            return new Promise(function (resolve, reject) {
                self.applyBinding(id).then(function (res) {
                    controller.sowAssign = res.data.sowAssign;
                    controller.user = res.data.user;
                    controller.bts = res.data.bts;
                    resolve(res);
                });
            });
        };

        return self;
    }

})();