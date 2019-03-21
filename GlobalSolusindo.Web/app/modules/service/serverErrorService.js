(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.service:kairosService
     * @description 
     * When we hit api and the server return error either a message or validation errors, this service handle the response and 
     * show it on error and/or bind the message to the ui
     * # serverErrorService
     * Service of the app
     */

    angular
        .module('global-solusindo')
        .factory('serverErrorService', serverErrorService);

    serverErrorService.$inject = ['validationService', 'uiService'];

    function serverErrorService(validationService, ui) {
        var self = this;

        self.show = function (res) {
            debugger;
            if (res) {
                validationService.clearValidationErrors({});
                ui.alert.error(res.message);
                if (res.data && res.data.errors) {
                    validationService.serverValidation(res.data.errors);
                }
            }
        };

        return self;
    }
})();