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
        .factory('RoleBindingService', RoleEntry);

    RoleEntry.$inject = ['HttpService', '$state'];

    function RoleEntry(http, $state) {
        var self = this;
        var controller = {};

        self.applyBinding = function (id) {
            return http.get('role/form/' + id);
        }

        self.init = function (ctrl) {
            controller = ctrl;
            var id = ctrl.stateParam.id;
            return new Promise(function (resolve, reject) {
                self.applyBinding(id).then(function (res) {
                    controller.model = res.data.model;
                    controller.formControls = res.data.formControls;
                    resolve(res);
                });
            }); 
        }

        return self;
    }

})();