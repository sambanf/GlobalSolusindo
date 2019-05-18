(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.controller:userAuthParamModal
     * @description
     * # dashboardCtrl
     * Controller of the app
     */

    angular
        .module('global-solusindo')
        .controller('userAuthParamModalCtrl', userAuthParamModalCtrl);

    userAuthParamModalCtrl.$inject = ['$scope', '$uibModalInstance', 'userAuthParamModalBindingService', '$stateParams', 'userAuthParamModalSaveService', 'userAuthParamModalCancelService', 'select2Service'];

    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */
    function userAuthParamModalCtrl($scope, $uibModalInstance, bindingService, sParam, saveService, cancelService, select2Service) {
        var self = this;
        self.stateParam = sParam;
        self.modalInstance = $uibModalInstance;

        self.formData = {};
        self.formData.users = [{
            user_pk: "1",
            name: "sadfasdf"
        }];

        self.model = {
            authParam_pk: sParam.id,
            user_pk: 0
        };

        angular.element(document).ready(function () {
            select2Service.liveSearch("user/search", {
                selector: '#user_pk',
                valueMember: 'user_pk',
                displayMember: 'name',
                callback: function (data) {
                    self.formData.users = data;
                },
                onSelected: function (data) {
                    self.model.user_pk = data.user_pk;
                }
            });
        });

        bindingService.init(self).then(function (res) {
            saveService.init(self);
            cancelService.init(self);
        });

        $scope.$on('ui.layout.resize', function (e, beforeContainer, afterContainer) {
            ctrl.datatable.columns.adjust();
        });

        return self;
    }
})();