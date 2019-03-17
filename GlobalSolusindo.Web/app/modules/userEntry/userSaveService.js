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
        .factory('UserSaveService', UserEntry);

    UserEntry.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function UserEntry($state, http, ui, validation) {
        var self = this;
        var controller;

        self.create = function (model) {
            http.post('user', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    $state.go('app.userEntry', { id: res.data.model.user_pk });
                } else {
                    ui.alert.error(res.message);
                    validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('user', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                } else {
                    ui.alert.error(res.message);
                    validation.serverValidation(res.data.errors);
                }
            });
        };

        function validate() {
            validation.clearValidationErrors({});
            console.log(controller.model.password);
            console.log(controller.model.reTypePassword);

            var password = controller.model.password;
            var reTypePassword = controller.model.reTypePassword;

            if (password == '' || password == null || password == 'undefined') {
                validation.setError("password", "Password is required.");
                return false;
            }
            if (reTypePassword == '' || reTypePassword == null || reTypePassword == 'undefined') {
                validation.setError("reTypePassword", "Please re type password.");
                return false;
            }
            if (password != reTypePassword) {
                validation.setError("reTypePassword", "Password do not match.");
                return false;
            }

            return true;
        }

        self.save = function (model) {

            if (!validate())
                return;

            model.userCode = model.username;
            if (model.user_pk === 0) {
                return self.create(model);
            } else {
                return self.update(model);
            }
        };

        self.init = function (ctrl) {
            controller = ctrl;
            angular.element('#saveButton').on('click', function () {
                self.save(controller.model);
            });
        };

        return self;
    }

})();