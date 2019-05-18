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
        .factory('costEntryModalBindingService', costEntryModalBindingService);

    costEntryModalBindingService.$inject = ['HttpService', '$state'];

    function costEntryModalBindingService(http, $state) {
        var self = this;
        var controller = {};

        self.applyBinding = function (id) {
            return http.get('cost/form/' + id);
        };

        self.init = function (ctrl) {
            controller = ctrl;
            var id = ctrl.model.cost_pk;
          
            return new Promise(function (resolve, reject) {
                self.applyBinding(id).then(function (res) {
                    if (res.success) {
                        controller.formData = res.data.formData;
                        controller.model = res.data.model;
                        controller.formControls = res.data.formControls; 

                        controller.model.sow_fk = controller.stateParam.id;
                    }
                    resolve(res);
                });
            });
        };

        return self;
    }

})();