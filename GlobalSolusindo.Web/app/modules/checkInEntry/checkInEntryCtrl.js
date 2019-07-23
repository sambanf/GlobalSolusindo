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
        .controller('CheckInEntryCtrl', CheckInEntryCtrl);

    CheckInEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'CheckInSaveService', 'CheckInBindingService', 'FormControlService', 'select2Service', 'checkInMapService'];

    function CheckInEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, select2Service, map) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) { 
            formControlService.setFormControl(self);
            saveService.init(self);
            try {
                map.init(self);
            } catch (e) {

            }
        });

        return self;
    }
})();