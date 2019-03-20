(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.controller:roleModal
     * @description
     * # dashboardCtrl
     * Controller of the app
     */

    angular
        .module('global-solusindo')
        .controller('roleModalCtrl', roleModalCtrl);

    roleModalCtrl.$inject = ['$scope', '$uibModalInstance', 'roleModalBindingService', '$stateParams', 'roleModalSaveService', 'roleModalCancelService'];

    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */
    function roleModalCtrl($scope, $uibModalInstance, bindingService, sParam, saveService, cancelService) {
        var self = this;
        self.stateParam = sParam;
        self.modalInstance = $uibModalInstance;

        bindingService.init(self).then(function (res) {
            saveService.init(self);
            cancelService.init(self);

            select2Service.liveSearch("user/search", {
                selector: '#user_fk',
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
      
        $scope.$on('ui.layout.resize', function (e, beforeContainer, afterContainer) {
            ctrl.datatable.columns.adjust();
        });

        return self;
    }
})();