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

        self.clearValidationErrors = function (obj) {
            var controls = document.querySelectorAll('[name]');

            var validClass = "is-valid";
            var invalidClass = "is-invalid";
            //Clear state
            controls.forEach(function (item) {
                item.className = item.className.replace(validClass, "");
                item.className = item.className.replace(invalidClass, "");
            });
        };

        self.setError = function (selector, errorMessage) {
            var element = document.getElementById(selector);

            var validClass = "form-control is-valid";
            var invalidClass = "form-control is-invalid";

            element.className = element.className.replace(validClass, "");
            element.className = element.className.replace(invalidClass, "");
            element.className += " " + validClass;


            element.className = element.className.replace(validClass, invalidClass);

            var childNodes = element.parentElement.childNodes;
            childNodes.forEach(function (element) {
                if (element.className == 'invalid-feedback') {
                    element.innerHTML = errorMessage;
                }
            });

            $('#submit').prop('disabled', false);
        };

        function handleSubErrors(subErrors) {
            var validClass = "form-control is-valid";
            var invalidClass = "form-control is-invalid";
            if (subErrors) {
                var tables = document.getElementsByTagName('table');
                for (var m = 0; m < tables.length; m++) {
                    var table = tables[m];
                    for (var j = 0; j < subErrors.length; j++) {
                        var subError = subErrors[j];
                        var rows = table.tBodies[0].rows;
                        for (var k = 0; k < rows.length; k++) {
                            var cells = rows[k].querySelectorAll('[name]');
                            cells.forEach(function (cell) {
                                var rowIndex = cell.parentElement.parentElement.sectionRowIndex;
                                var elementName = cell.getAttribute('name');
                                if (subError.index == rowIndex) {
                                    subError.errors.forEach(function (subErrorItem) {
                                        if (subErrorItem.propertyName.toLowerCase() == elementName.toLowerCase()) {
                                            cell.className = cell.className.replace(validClass, invalidClass);
                                            var childNodes = cell.parentElement.childNodes;
                                            childNodes.forEach(function (cell) {
                                                if (cell.className == 'invalid-feedback') {
                                                    cell.innerHTML = subErrorItem.message;
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    }
                }

            }
        }

        self.serverValidation = function (obj) {
            var controls = document.querySelectorAll('[name]');

            var errors = obj;


            errors = (typeof (errors) == 'undefined' ? obj : errors);
            var validClass = "form-control is-valid";
            var invalidClass = "form-control is-invalid";
            controls.forEach(function (item) {
                item.className = item.className.replace(validClass, "");
                item.className = item.className.replace(invalidClass, "");
                item.className += " " + validClass;
            });

            if (errors) {
                for (var i = 0; i < errors.length; i++) {
                    var error = errors[i];
                    controls.forEach(function (item) {
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
                    handleSubErrors(error.subErrors);
                }
            }
        };

        return self;
    }
})();