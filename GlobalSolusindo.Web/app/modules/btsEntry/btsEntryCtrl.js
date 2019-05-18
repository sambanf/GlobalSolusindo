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
        .controller('BTSEntryCtrl', BTSEntryCtrl);

    BTSEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'BTSSaveService', 'BTSBindingService', 'FormControlService', 'BTSSelect2Service', 'BTSAddTechnologyService'];

    function BTSEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, BTSSelect2Service, addTechnology) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
            formControlService.setFormControl(self);
            saveService.init(self);
            BTSSelect2Service.init(self);
            addTechnology.init(self);
        });

        return self;
    }
})();