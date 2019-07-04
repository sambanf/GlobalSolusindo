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
        .factory('asetHistoriViewService', asetHistoriView);

    asetHistoriView.$inject = ['HttpService', '$state', '$stateParams', 'uiService', '$uibModal'];

    function asetHistoriView(http, $state, $stateParams, ui, $uibModal) {
        var self = this;
        var controller;

        self.view = function (id, user_fk) {
            $state.go('app.asetHistoriEntry', {
                id: id,
                user_fk: user_fk
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#asetHistori tbody').on('click', '#view', function () {
                var asetHistori = controller.datatable.row($(this).parents('tr')).data();
                self.view(asetHistori.asetHistori_pk, asetHistori.user_fk);
            });

            $("#asetHistori tbody").on("dblclick", "tr", function () {
                var asetHistori = controller.datatable.row(this).data();
                self.view(asetHistori.asetHistori_pk, asetHistori.user_fk);
            });

            angular.element('#addNewButton').on('click', function () {
                self.view(0, $stateParams.user_fk);
            });

            $("#asetHistori tbody").on("click", "#show", function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                var modalInstance = $uibModal.open({
                    templateUrl: 'app/modules/asetHistori/asetHistoriDetail.html',
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