(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.controller:orderCtrl
     * @description
     * # dashboardCtrl
     * Controller of the app
     */

    angular
        .module('global-solusindo')
        .controller('AssetModalCtrl', AssetModal);

    AssetModal.$inject = ['$scope', '$uibModalInstance', 'HttpService', 'MappingRoleToRoleGroupBindingModalService', 'param'];

    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */

    function AssetModal($scope, $uibModalInstance, HttpService, bindingService, param) {
        /*jshint validthis: true */
        var self = this;
        var http = HttpService;

        bindingService.init(self).then(function (res) {
            console.log(self.model);
        });

        self.ok = function () {
        //    var result = [];
        //    self.model.roles.forEach(function (i) {
        //        result.push({
        //            roleGroup_pk: param.id,
        //            role_pk: i.role_pk
        //        });
        //    });

        //    http.post('mappingUserToRoleGroup/bulk', result);
            $uibModalInstance.close();
        };

        self.cancel = function () {
            $uibModalInstance.close();
        };


        return self;
    }
})();