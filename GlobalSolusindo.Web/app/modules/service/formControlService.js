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
        .factory('FormControlService', FormControl);

        FormControl.$inject = [];

    function FormControl() {
        var self = this;

        self.setFormControl = function(ctrl){
            ctrl.formControls.forEach(function(component){
                $("#" + component.controlName).prop('disabled', !component.enabled);
                $("#" + component.controlName).text(component.text);
                $("#" + component.controlName).toggle(component.visible);
            });
        };

        return self;
    }
})();