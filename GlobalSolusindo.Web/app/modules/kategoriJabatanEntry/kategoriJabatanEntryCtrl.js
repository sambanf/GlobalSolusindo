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
        .controller('KategoriJabatanEntryCtrl', KategoriJabatanEntryCtrl);

    KategoriJabatanEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'KategoriJabatanSaveService', 'KategoriJabatanBindingService', 'FormControlService', 'select2Service'];

    function KategoriJabatanEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, select2Service) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
            formControlService.setFormControl(self);
            saveService.init(self);
        });

        return self;
    }
})();