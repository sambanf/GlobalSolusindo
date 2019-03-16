(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.service:kairosService
     * @description
     * # dashboardService
     * Service of the app
     */

    angular
        .module('global-solusindo')
        .factory('validationService', validationService);

    validationService.$inject = [];

    function validationService() {
        var self = this;

        self.serverValidation = function (obj) {
            var controls = document.querySelectorAll('[name]');

            var errors = obj;
            var tableErrors = obj.TableErrors;
            errors = (typeof (errors) == 'undefined' ? obj : errors);
            var validClass = "form-control is-valid";
            var invalidClass = "form-control is-invalid";
            controls.forEach(function (item) {
                item.className = item.className.replace(validClass, "");
                item.className = item.className.replace(invalidClass, "");
                item.className += " " + validClass;
            });

            console.log(controls);
            if (errors) {
                for (var i = 0; i < errors.length; i++) {
                    var error = errors[i];
                    controls.forEach(function (item) {
                        console.log(item);
                        //$scope.$apply(function () {
                        var fieldName = item.name;

                            if (error.propertyName.toLowerCase() == fieldName.toLowerCase()) {
                                item.className = item.className.replace(validClass, invalidClass);

                                var childNodes = item.parentElement.childNodes;
                                childNodes.forEach(function (item) {
                                    if (item.className == 'invalid-feedback') {
                                        item.innerHTML = error.message;
                                    }
                                });
                            }
                        //});
                    });
                }
            }
        }

        return self;
    }
})();