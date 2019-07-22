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
        .factory('btsViewService', btsView);

    btsView.$inject = ['HttpService', '$state', 'uiService', '$uibModal'];

    function btsView(http, $state, ui, $uibModal) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.btsEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#bts tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.bts_pk);
            });

            $("#bts tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var modalInstance = $uibModal.open({
                    templateUrl: 'app/modules/bts/btsDetail.html',
                    controller: function ($scope, $uibModalInstance) {
                        $scope.model = data;
                        $scope.close = function () {
                            $uibModalInstance.close();
                        };
                    }
                });
                modalInstance.result.then(function (selectedItem) { }, function () { });
            });

            $("#bts tbody").on("click", "#show", function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                var modalInstance = $uibModal.open({
                    templateUrl: 'app/modules/bts/btsDetail.html',
                    controller: function ($scope, $uibModalInstance) {
                        $scope.model = data;
                        $scope.close = function () {
                            $uibModalInstance.close();
                        };
                    }
                });
                modalInstance.result.then(function (selectedItem) { }, function () { });
            });
        };

        return self;
    }

})();