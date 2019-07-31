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
        .factory('CheckInSaveService', CheckInSaveService);

    CheckInSaveService.$inject = ['$state', 'HttpService', 'uiService', 'validationService', '$uibModal'];

    function CheckInSaveService($state, http, ui, validation, $uibModal) {
        var self = this;
        var controller;
        function goToListPage() {
            $state.go('app.checkInList');
        }

        self.approve = function (model, isApproved, remark) {
            var request = {
                "checkInID": model.checkIn_pk,
                "isApproved": isApproved,
                "remark": remark
            };
            http.post('mobile/doCloseTask', request).then(function (res) {
                if (res.status == true) {
                    ui.alert.success("Data successfuly updated.");
                    //$state.go('app.checkInEntry', { id: res.data.model.checkIn_pk });
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            angular.element('#approveButton').on('click', function () {
                self.approve(controller.model, true, '');
            });
            angular.element('#rejectButton').on('click', function () {
                var modalInstance =
                    $uibModal.open({
                        templateUrl: 'app/modules/checkInEntry/checkinRemark.html',
                        controller: function ($scope, $uibModalInstance) {
                            $scope.close = function () {
                                $uibModalInstance.close();
                            };
                            $scope.ok = function (remark) {
                                $uibModalInstance.close($scope.remark);
                                self.approve(controller.model, false, document.getElementById('remark').value);
                            };
                        }
                    }).result.then(function (result) {
                        $scope.remark = result;
                    });
            });
        };

        return self;
    }

})();