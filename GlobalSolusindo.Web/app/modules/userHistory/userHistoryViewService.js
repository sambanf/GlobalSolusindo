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
        .factory('userHistoryViewService', userHistoryView);

    userHistoryView.$inject = ['HttpService', '$state', '$stateParams', 'uiService', '$uibModal'];

    function userHistoryView(http, $state, $stateParams, ui, $uibModal) {
        var self = this;
        var controller;

        //self.view = function (id, user_fk) {
        //    $state.go('app.asetHistoriEntry', {
        //        id: id,
        //        user_fk: user_fk
        //    });
        //};

        self.init = function (ctrl) {
            controller = ctrl;
            //$('#asetHistori tbody').on('click', '#view', function () {
            //    var asetHistori = controller.datatable.row($(this).parents('tr')).data();
            //    self.view(asetHistori.asetHistori_pk, asetHistori.user_fk);
            //});

            //$("#asetHistori tbody").on("dblclick", "tr", function () {
            //    var asetHistori = controller.datatable.row(this).data();
            //    self.view(asetHistori.asetHistori_pk, asetHistori.user_fk);
            //});

            //angular.element('#addNewButton').on('click', function () {
            //    self.view(0, $stateParams.user_fk);
            //});

            $("#userHistori tbody").on("click", "#show", function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                //var modalInstance = $uibModal.open({
                //    templateUrl: 'app/modules/userHistory/userHistoryDetail.html',
                //    controller: function ($scope, $uibModalInstance) {
                //        $scope.model = data;
                //        $scope.close = function () {
                //            $uibModalInstance.close();
                //        };
                //    }
                //});
                //modalInstance.result.then(function (selectedItem) { }, function () { });

                http.get('user/form/' + data.user_fk).then(function (response) {
                    var user = response.data.model;

                    var modalInstance = $uibModal.open({
                        templateUrl: 'app/modules/userHistory/userHistoryDetail.html',
                        controller: function ($scope, $uibModalInstance) {

                            $scope.model = user;
                            $scope.close = function () {
                                $uibModalInstance.close();
                            };
                        }
                    });
                    modalInstance.result.then(function (selectedItem) { }, function () { });
                });

            });
        };

        return self;
    }

})();