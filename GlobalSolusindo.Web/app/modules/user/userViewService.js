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
        .factory('userViewService', userView);

    userView.$inject = ['HttpService', '$state', 'uiService', '$uibModal'];

    function userView(http, $state, ui, $uibModal) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.userEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#user tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.user_pk);
            });

            $("#user tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["user_pk"];
                self.view(id);
            });

            $("#user tbody").on("click", "#show", function () {
                var data = controller.datatable.row($(this).parents('tr')).data();

                http.get('user/form/' + data.user_pk).then(function (response) {
                    var user = response.data.model;

                    var modalInstance = $uibModal.open({
                        templateUrl: 'app/modules/user/userDetail.html',
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