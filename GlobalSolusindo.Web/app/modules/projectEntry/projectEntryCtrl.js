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
        .controller('ProjectEntryCtrl', ProjectEntryCtrl);

    ProjectEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'ProjectSaveService', 'ProjectBindingService', 'FormControlService', 'ProjectSelect2Service'];

    function ProjectEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, ProjectSelect2Service) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
            formControlService.setFormControl(self);
            saveService.init(self);
            ProjectSelect2Service.init(self);
        });

        return self;
    }
})();