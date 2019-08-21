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

        self.applyBinding = function (id, checkIn_fk) {
            return http.get('taskEngineerDetail/' + id + '/'+checkIn_fk);
        };

        self.init = function (ctrl) {
            controller = ctrl;
            var id = ctrl.stateParam.id;
            var checkIn_fk = ctrl.stateParam.checkIn_fk;
            return new Promise(function (resolve, reject) {
                self.applyBinding(id, checkIn_fk).then(function (res) {
                    controller.sowAssign = res.data.sowAssign;
                    controller.user = res.data.user;
                    controller.bts = res.data.bts;
                    controller.cellid = res.data.cellidstatus;
                    controller.sOWIssue = res.data.sOWIssue;
                    controller.remark = res.data.remark;
                    resolve(res);
                });
            });
        };

        return self;
    }

})();