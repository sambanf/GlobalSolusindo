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
        .controller('IssueTypeEntryCtrl', IssueTypeEntryCtrl);

    IssueTypeEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'IssueTypeSaveService', 'IssueTypeBindingService', 'FormControlService', 'select2Service'];

    function IssueTypeEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, select2Service) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
            formControlService.setFormControl(self);
            saveService.init(self);
        });

        return self;
    }
})();