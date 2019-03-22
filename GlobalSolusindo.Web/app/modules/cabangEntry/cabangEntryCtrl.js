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
        .controller('CabangEntryCtrl', CabangEntryCtrl);

    CabangEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'CabangSaveService', 'CabangBindingService', 'FormControlService', 'select2Service'];

    function CabangEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, select2Service) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
            formControlService.setFormControl(self);
            saveService.init(self);
        });

        return self;
    }
})();