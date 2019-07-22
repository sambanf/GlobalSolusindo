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
        .controller('MappingRoleToRoleGroupEntryCtrl', MappingRoleToRoleGroupEntryCtrl);

    MappingRoleToRoleGroupEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'MappingRoleToRoleGroupSaveService', 'MappingRoleToRoleGroupBindingService', 'FormControlService', 'mappingRoleToRoleGroupEntryDtService','HttpService'];

    function MappingRoleToRoleGroupEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, dtService, http) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
            //formControlService.setFormControl(self);
            //saveService.init(self);
            dtService.init(self);
        });

        self.roleModalCallback = function () {
            self.roleDt.draw();
        };
        
        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var createRole = "MappingRoleToRoleGroup_Input";

            document.getElementById("modalRoleButton").style.visibility = "hidden";

            setRole(res.data, "modalRoleButton", createRole);

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