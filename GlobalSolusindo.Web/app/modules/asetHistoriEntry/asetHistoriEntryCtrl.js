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
        .controller('AsetHistoriEntryCtrl', AsetHistoriEntryCtrl);

    AsetHistoriEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'AsetHistoriSaveService', 'AsetHistoriBindingService', 'FormControlService', 'select2Service'];

    function AsetHistoriEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, select2Service) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
            formControlService.setFormControl(self);
            saveService.init(self);
            
            select2Service.liveSearch("aset/search", {
                selector: '#aset_fk',
                valueMember: 'aset_pk',
                displayMember: 'name',
                callback: function (data) { 
                    self.formData.asets = data;
                },
                onSelected: function (data) {
                    self.model.aset_fk = data.aset_pk;
                }
            });
        });

        return self;
    }
})();