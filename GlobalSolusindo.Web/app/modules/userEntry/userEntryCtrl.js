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
        .controller('UserEntryCtrl', UserEntryCtrl);

    UserEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'UserSaveService', 'UserBindingService', 'FormControlService', 'select2Service'];

    function UserEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, select2Service) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
            formControlService.setFormControl(self);
            saveService.init(self);
            angular.element(document).ready(function () {
                select2Service.liveSearch("position/search", {
                    selector: '#position_fk',
                    valueMember: 'position_pk',
                    displayMember: 'name',
                    callback: function (data) {
                        self.formData.positions = data;
                    },
                    onSelected: function (data) {
                        self.model.position_fk = data.position_pk;
                    }
                });
            });
        });

        return self;
    }
})();