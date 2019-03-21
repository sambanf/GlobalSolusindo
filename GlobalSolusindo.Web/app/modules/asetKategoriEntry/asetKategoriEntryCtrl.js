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
        .controller('AsetKategoriEntryCtrl', AsetKategoriEntryCtrl);

    AsetKategoriEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'AsetKategoriSaveService', 'AsetKategoriBindingService', 'FormControlService', 'select2Service'];

    function AsetKategoriEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, select2Service) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
            formControlService.setFormControl(self);
            saveService.init(self);
        });

        return self;
    }
})();