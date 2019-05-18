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
        .controller('RoleGroupEntryCtrl', RoleGroupEntryCtrl);

    RoleGroupEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'RoleGroupSaveService', 'RoleGroupBindingService', 'FormControlService'];

    function RoleGroupEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
            formControlService.setFormControl(self);
            saveService.init(self);
        });

        return self;
    }
})();