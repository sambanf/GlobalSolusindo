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

    BTSEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'BTSSaveService', 'BTSBindingService', 'FormControlService', 'BTSSelect2Service', 'BTSAddTechnologyService', 'BTSRemoveTechnologyService'];

    function BTSEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, BTSSelect2Service, addTechnology, removeTechnology) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
            formControlService.setFormControl(self);
            saveService.init(self);
            BTSSelect2Service.init(self);
            addTechnology.init(self);
            removeTechnology.init(self);
        });

        return self;
    }
})();