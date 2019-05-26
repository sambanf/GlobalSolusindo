(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.controller:userEntryCtrl
     * @description
     * # dashboardCtrl
     * Controller of the app
     */

    angular
        .module('global-solusindo')
        .controller('SOWApprovalCtrl', SOWApprovalCtrl);

    SOWApprovalCtrl.$inject = ['$scope', '$stateParams', '$state', 'SOWApprovalBindingService', 'HttpService', 'costDtService', 'sowMapService', 'SOWApprovalService'];

    function SOWApprovalCtrl($scope, sParam, $state, bindingService, http, costDtService, map, approval) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
            costDtService.init(self);
            approval.init(self);
            try {
                map.init(self);
            } catch (e) {

            }
        });

        return self;
    }
})();