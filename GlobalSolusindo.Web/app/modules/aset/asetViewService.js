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
        .factory('asetViewService', asetView);

    asetView.$inject = ['HttpService', '$state', 'uiService', '$uibModal'];

    function asetView(http, $state, ui, $uibModal) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.asetEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#aset tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.aset_pk);
            });

            $("#aset tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var modalInstance = $uibModal.open({
                    templateUrl: 'app/modules/aset/asetDetail.html',
                    controller: function ($scope, $uibModalInstance) {
                        http.get('aset/form/' + data.aset_pk).then(function (res) {
                            $scope.model = res.data.model;
                            if ($scope.model && $scope.model.filePhotoInBase64) {
                                document.getElementById("photo").src = $scope.model.filePhotoInBase64;
                            }
                        });
                        $scope.close = function () {
                            $uibModalInstance.close();
                        };
                    }
                });
                modalInstance.result.then(function (selectedItem) { }, function () { });
            });
            $('#aset tbody').on('click', '#userHistory', function () {
                //alert('User History');
                var data = controller.datatable.row($(this).parents('tr')).data();

                $state.go('app.userHistory', { aset_fk: data.aset_pk });
            });
            $("#aset tbody").on("click", "#show", function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                var modalInstance = $uibModal.open({
                    templateUrl: 'app/modules/aset/asetDetail.html',
                    controller: function ($scope, $uibModalInstance) {
                        http.get('aset/form/' + data.aset_pk).then(function (res) { 
                            $scope.model = res.data.model;
                            if ($scope.model && $scope.model.filePhotoInBase64) {
                                document.getElementById("photo").src = $scope.model.filePhotoInBase64;
                            }
                        });
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