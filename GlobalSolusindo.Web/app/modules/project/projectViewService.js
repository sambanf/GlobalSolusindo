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
        .factory('projectViewService', projectView);

    projectView.$inject = ['HttpService', '$state', 'uiService', '$uibModal'];

    function projectView(http, $state, ui, $uibModal) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.projectEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#project tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.project_pk);
            });

            $("#project tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var modalInstance = $uibModal.open({
                    templateUrl: 'app/modules/project/projectDetail.html',
                    controller: function ($scope, $uibModalInstance) {
                        $scope.model = data;
                        $scope.close = function () {
                            $uibModalInstance.close();
                        };
                    }
                });
                modalInstance.result.then(function (selectedItem) { }, function () { });
                //var id = data["project_pk"];
                //self.view(id);
            });

            $("#project tbody").on("click", "#show", function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                var modalInstance = $uibModal.open({
                    templateUrl: 'app/modules/project/projectDetail.html',
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