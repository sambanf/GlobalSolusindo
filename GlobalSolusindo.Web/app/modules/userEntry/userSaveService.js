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
        .factory('UserSaveService', UserSaveService);

    UserSaveService.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function UserSaveService($state, http, ui, validation) {
        var self = this;
        var userCtrl;

        function goToListPage() {
            $state.go('app.userList');
        }

        self.create = function (model) {
            http.post('user', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    //$state.go('app.userEntry', { id: res.data.model.user_pk });
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('user', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };


        function validatePassword(password) {
            return (password != undefined && password != null && password.length > 0);
        }

        function validateRetypePassword(password, retypePassword) {
            return (password === retypePassword);
        }

        function validate() {
            if (userCtrl && userCtrl.model) {
                var isValid = true;
                if (!validatePassword(userCtrl.model.password)) {
                    validation.setError('password', "Password is required.");
                    isValid = false;
                }

                if (!validateRetypePassword(userCtrl.model.password, userCtrl.model.reTypePassword)) {
                    validation.setError('reTypePassword', "Password doesn't match.");
                    isValid = false;
                }
                return isValid;
            }
            return false;
        }

        self.save = function (model) {
            validation.clearValidationErrors({});
            if (!validate())
                return;

            if (model.user_pk === 0) {
                return self.create(model);
            } else {
                return self.update(model);
            }
        };

        self.init = function (ctrl) {
            userCtrl = ctrl;
            angular.element('#saveButton').on('click', function () {
                self.save(userCtrl.model);
            });
        };

        return self;
    }

})();