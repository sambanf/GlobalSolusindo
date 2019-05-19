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
        .controller('CostKategoriEntryCtrl', CostKategoriEntryCtrl);

    CostKategoriEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'CostKategoriSaveService', 'CostKategoriBindingService', 'FormControlService', 'select2Service'];

    function CostKategoriEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, select2Service) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
            formControlService.setFormControl(self);
            saveService.init(self);
        });

        return self;
    }
})();