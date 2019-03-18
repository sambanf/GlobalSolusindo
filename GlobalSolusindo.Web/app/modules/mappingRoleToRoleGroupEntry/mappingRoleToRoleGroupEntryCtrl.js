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
        .controller('MappingRoleToRoleGroupEntryCtrl', MappingRoleToRoleGroupEntryCtrl);

    MappingRoleToRoleGroupEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'MappingRoleToRoleGroupSaveService', 'MappingRoleToRoleGroupBindingService', 'FormControlService', 'mappingRoleToRoleGroupEntryDtService'];

    function MappingRoleToRoleGroupEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, dtService) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
            //formControlService.setFormControl(self);
            //saveService.init(self);
            dtService.init(self);
        });

        self.roleModalCallback = function () {
            self.roleDt.draw();
        };

        return self;
    }
})();