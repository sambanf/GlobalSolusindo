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
        .factory('costShowModalService', costShowModalService);

    costShowModalService.$inject = ['$state', 'HttpService', 'uiService', 'validationService', '$uibModal'];

    function costShowModalService($state, http, ui, validation, $uibModal) {
        var self = this;
        var controller;

        function openModal(cost_pk) {
            var modalInstance = $uibModal.open({
                templateUrl: 'app/modules/sowInfo/costEntryModal/costEntryModal.html',
                controller: 'costEntryModalCtrl',
                controllerAs: 'vm',
                windowTopClass: 'modal-list-user',
                resolve: {
                    cost_pk: function () {
                        return cost_pk;
                    }
                }
            });
            modalInstance.result.then(function (data) {
                //controller.datatable.draw();
                controller.costDt.draw();
            }, function () { });

            return modalInstance;
        }

        self.init = function (ctrl) {
            controller = ctrl;
            angular.element('#addCost').on('click', function () { 
                openModal(0);
            });

            //Row delete button event
            $('#cost tbody').on('click', '#view', function () {
                var selectedRecord = controller.costDt.row($(this).parents('tr')).data();
                openModal(selectedRecord.cost_pk);
            });
        };

        return self;
    }

})();