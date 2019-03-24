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
        .controller('SOWInfoCtrl', SOWInfoCtrl);

    SOWInfoCtrl.$inject = ['$scope', '$stateParams', '$state', 'SOWInfoBindingService', 'HttpService'];

    function SOWInfoCtrl($scope, sParam, $state, bindingService, http) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
        });

        return self;
    }
})();