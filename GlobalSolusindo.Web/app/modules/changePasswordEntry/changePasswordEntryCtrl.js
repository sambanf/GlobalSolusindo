(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.controller:changePasswordEntryCtrl
     * @description
     * # dashboardCtrl
     * Controller of the app
     */

    angular
        .module('global-solusindo')
        .controller('ChangePasswordEntryCtrl', ChangePasswordEntryCtrl);

    ChangePasswordEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'ChangePasswordSaveService'];

    function ChangePasswordEntryCtrl($scope, sParam, $state, saveService) {
        var self = this;
        self.stateParam = sParam;

        self.model = {
            currentPassword: "",
            newPassword: "",
            reTypeNewPassword: ""
        };

        saveService.init(self);

        return self;
    }
})();