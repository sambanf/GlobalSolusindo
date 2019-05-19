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
        .controller('ActivitiesCtrl', ActivitiesCtrl);

    ActivitiesCtrl.$inject = ['$scope', '$stateParams', '$state', 'FormControlService', 'activitiesDtService'];

    function ActivitiesCtrl($scope, sParam, $state, formControlService, dtService) {
        var self = this;
        self.stateParam = sParam;

        dtService.init(self);

        return self;
    }
})();