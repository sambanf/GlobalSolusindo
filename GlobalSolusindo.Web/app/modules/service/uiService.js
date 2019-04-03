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
        .factory('uiService', uiService);

    uiService.$inject = [];

    function uiService() {
        var self = this;

        self.alert = {
            error: function (message) {
                alertify.alert().setContent(message).setHeader('Alert').set({
                    transition: 'zoom'
                }).show(true, 'error');
            },
            errorToast: function (message) {
                alertify.set('notifier', 'position', 'top-center');
                alertify.notify(message, 'error', 5, null);
            },
            warningToast: function (message) {
                alertify.set('notifier', 'position', 'top-center');
                alertify.notify(message, 'warning', 5, null);
            },
            warning: function (message) {
                alertify.set('notifier', 'position', 'bottom-right');
                alertify.notify(message, 'warning', 5, null);
            },
            success: function (message) {
                alertify.set('notifier', 'position', 'bottom-right');
                alertify.notify(message, 'success', 5, null);
            },
            confirm: function (message, accept, cancel) {
                return alertify.confirm().setContent(message).setHeader('Confirm').set({
                    transition: 'zoom',
                    onok: accept,
                    oncancel: cancel
                }).show(true, 'confirm');
            }
        };

        self.loader = {
            show: function () {
                angular.element('.lds-ring').fadeIn();
            },
            hide: function () {
                angular.element('.lds-ring').fadeOut();
            }
        }


        return self;
    }
})();