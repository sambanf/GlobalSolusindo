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
        .controller('izinCutiApprovalEntryCtrl', izinCutiApprovalEntryCtrl);

    izinCutiApprovalEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'izinCutiApprovalSaveService', 'izinCutiApprovalBindingService', 'FormControlService', 'select2Service'];

    function izinCutiApprovalEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, select2Service) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
            formControlService.setFormControl(self);
            saveService.init(self);
        });

        return self;
    }
})();