(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.service:dashboardService
     * @description
     * # dashboardService
     * Service of the app
     */

    angular
        .module('global-solusindo')
        .factory('ChangePasswordSaveService', ChangePasswordSaveService);

    ChangePasswordSaveService.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function ChangePasswordSaveService($state, http, ui, validation) {
        var self = this;
        var changePasswordCtrl;

        self.create = function (model) {

        };

        function validatePassword(password) {
            return (password != undefined && password != null && password.length > 0);
        }

        function validateRetypePassword(password, retypePassword) {
            return (password === retypePassword);
        }

        function validate() {
            validation.clearValidationErrors({});
            if (changePasswordCtrl && changePasswordCtrl.model) {

                var isValid = true;
                if (!validatePassword(changePasswordCtrl.model.currentPassword)) {
                    validation.setError('currentPassword', "Password is required.");
                    isValid = false;
                }

                if (!validatePassword(changePasswordCtrl.model.newPassword)) {
                    validation.setError('newPassword', "New password is required.");
                    isValid = false;
                }

                if (changePasswordCtrl.model.reTypeNewPassword === '') {
                    validation.setError('reTypeNewPassword', "Please retype new password.");
                    return false;
                } 

                if (!validateRetypePassword(changePasswordCtrl.model.newPassword, changePasswordCtrl.model.reTypeNewPassword)) {
                    validation.setError('reTypeNewPassword', "Password doesn't match.");
                    isValid = false;
                }
                return isValid;
            }
            return false;
        }

        self.save = function (model) {
            if (validate()) {
                return http.post('user/changePassword', model).then(function (res) {
                    if (res.success) {
                        ui.alert.success("Password has been changed.");
                    } else {
                        ui.alert.error(res.message);
                        if (res.data && res.data.errors)
                            validation.serverValidation(res.data.errors);
                    }
                });
            }
        };

        self.init = function (ctrl) {
            changePasswordCtrl = ctrl;
            angular.element('#saveButton').on('click', function () {
                self.save(changePasswordCtrl.model);
            });
        };

        return self;
    }

})();