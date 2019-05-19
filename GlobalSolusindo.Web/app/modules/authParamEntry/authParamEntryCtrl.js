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
        .controller('AuthParamEntryCtrl', AuthParamEntryCtrl);

    AuthParamEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'AuthParamSaveService', 'AuthParamBindingService', 'FormControlService'];

    function AuthParamEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
            formControlService.setFormControl(self);
            saveService.init(self);
        });

        return self;
    }
})();