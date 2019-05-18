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
        .controller('MappingUserToAuthParamEntryCtrl', MappingUserToAuthParamEntryCtrl);

    MappingUserToAuthParamEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'MappingUserToAuthParamSaveService', 'MappingUserToAuthParamBindingService', 'FormControlService', 'mappingUserToAuthParamEntryDtService', 'select2Service', 'mappingUserToAuthParamDeleteService'];

    function MappingUserToAuthParamEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, dtService, select2Service, deleteService) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
            dtService.init(self);
            deleteService.init(self);
        });

        self.userAuthParamModalCallback = function () {
            self.userDt.draw();
        };

        return self;
    }
})();