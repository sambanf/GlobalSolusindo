(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.controller:costEntryModal
     * @description
     * # dashboardCtrl
     * Controller of the app
     */

    angular
        .module('global-solusindo')
        .controller('costEntryModalCtrl', costEntryModalCtrl);

    costEntryModalCtrl.$inject = ['$scope', '$uibModalInstance', 'costEntryModalBindingService', '$stateParams', 'costEntryModalSaveService', 'costEntryModalCancelService', 'select2Service','cost_pk'];

    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */
    function costEntryModalCtrl($scope, $uibModalInstance, bindingService, sParam, saveService, cancelService, select2Service, cost_pk) {
        var self = this;
        self.stateParam = sParam;
        self.model = {};
        self.model.cost_pk = cost_pk;
        self.model.sow_fk = sParam.id; 
        self.modalInstance = $uibModalInstance;

        self.formData = {};
        self.formData.costKategoris = [{
            costKategori_pk: "1",
            title: ""
        }];
 
        bindingService.init(self).then(function (res) {
            saveService.init(self);
            cancelService.init(self);
            
            angular.element(document).ready(function () {
                select2Service.liveSearch("costKategori/search", {
                    selector: '#kategoriCost_fk',
                    valueMember: 'costKategori_pk',
                    displayMember: 'title',
                    callback: function (data) {
                        self.formData.costKategoris = data;
                    },
                    onSelected: function (data) {
                        self.model.kategoriCost_fk = data.costKategori_pk;
                    }
                });
            });

        });

        $scope.$on('ui.layout.resize', function (e, beforeContainer, afterContainer) {
            ctrl.datatable.columns.adjust();
        });

        return self;
    }
})();