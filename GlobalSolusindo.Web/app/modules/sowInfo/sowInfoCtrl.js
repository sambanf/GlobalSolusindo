(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.controller:userEntryCtrl
     * @description
     * # dashboardCtrl
     * Controller of the app
     */

    angular
        .module('global-solusindo')
        .controller('SOWInfoCtrl', SOWInfoCtrl);

    SOWInfoCtrl.$inject = ['$scope', '$stateParams', '$state', 'SOWInfoBindingService', 'HttpService', 'costDtService', 'costShowModalService', 'costDeleteService', 'sowMapService', 'sowlinkDtService', 'sowissueDtService'];

    function SOWInfoCtrl($scope, sParam, $state, bindingService, http, costDtService, costShowModalService, costDeleteService, map, sowlinkDtService, sowissueDtService) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
            costDtService.init(self);
            costShowModalService.init(self);
            costDeleteService.init(self);
            sowlinkDtService.init(self);
            sowissueDtService.init(self);
            try {
                map.init(self);
            } catch (e) {

            }
        });

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var createRole = "Cost_Input";

            document.getElementById("addCost").style.visibility = "hidden";
            
            setRole(res.data, "addCost", createRole);
            
        })
        
        function setRole(roles, control, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            if (role) {
                document.getElementById(control).style.visibility = "visible";
            }
            else {
                document.getElementById(control).style.visibility = "hidden";
            }

        }

        return self;
    }
})();