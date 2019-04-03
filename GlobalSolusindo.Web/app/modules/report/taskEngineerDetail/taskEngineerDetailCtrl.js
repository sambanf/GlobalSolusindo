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
        .controller('TaskEngineerDetailCtrl', TaskEngineerDetailCtrl);

    TaskEngineerDetailCtrl.$inject = ['$scope', '$stateParams', '$state', 'TaskEngineerDetailBindingService'];

    function TaskEngineerDetailCtrl($scope, sParam, $state, bindingService) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self)

        return self;
    }
})();